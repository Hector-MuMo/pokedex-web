import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import useZustandStore from './useZustandStore';

interface ErrorsProps {
    errorList: string
}

const usePokemon = (endpoint: string) => {
    const search = useZustandStore((state) => state.search);
    const handleChangePokeList = useZustandStore((state) => state.handlePokeList);
    const next = useZustandStore((state) => state.nextUri);
    const handleChangeNext = useZustandStore((state) => state.handleNextUri);
    const prev = useZustandStore((state) => state.prevUri);
    const handleChangePrev = useZustandStore((state) => state.handlePrevUri);
    //const [pokeList, setPokeList] = useState<[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [pokemon, setPokemon] = useState<any | undefined>(undefined);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [characteristics, setCharacteristics] = useState<any | undefined>(undefined);
    const [erros, setErrors] = useState<ErrorsProps>();
    const [loading, setLoading] = useState<boolean>(true);
    //const [prev, setPrev] = useState<string | null>(null);
    //const [next, setNext] = useState<string | null>(null);

    const getPokemonList = async (endpoint: string) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${import.meta.env.VITE_API_URL}/${endpoint}`,
            })
            handleChangePokeList(response.data.results);

        } catch (error) {
            const err = error as AxiosError;
            setErrors({ errorList: err.message });
            //console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const getSpecificPokemon = async (id: string) => {
        try {
            if (id) {
                const response = await axios({
                    method: 'get',
                    url: `${import.meta.env.VITE_API_URL}/pokemon/${id}`
                })

                setPokemon(response.data);
                handleChangePokeList([]);
            } else {
                const response = await axios({
                    method: 'get',
                    url: `${import.meta.env.VITE_API_URL}/pokemon/`
                })

                setPokemon(undefined);
                handleChangePokeList(response.data.results);
                handleChangeNext(response.data.next);
                handleChangePrev(response.data.previous);
                console.log(next);
            }

        } catch (error) {
            const err = error as AxiosError
            setErrors({ errorList: err.message });
            //console.error(err.message)
        } finally {
            setLoading(false);
        }
    }

    const getPokemonCharacteristics = async (id: string | undefined) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${import.meta.env.VITE_API_URL}/characteristic/${id}`
            });

            setCharacteristics(response.data)

        } catch (error) {
            const err = error as AxiosError
            setErrors({ errorList: err.message });
        }
    }

    const getEvolutionsChain = async (id: string) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${import.meta.env.VITE_API_URL}/evolution-chain/${id}`
            })
            console.log(response.data);

        } catch (error) {
            const err = error as AxiosError;
            setErrors({ errorList: err.message });
            //console.error(err);
        }
    }

    const getNextList = async (next: string | null) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${next}`
            });

            handleChangePokeList(response.data.results);
            handleChangeNext(response.data.next);
            handleChangePrev(response.data.previous);

        } catch (error) {
            const err = error as AxiosError;
            setErrors({ errorList: err.message });
            //console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const getPrevList = async (prev: string | null) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${prev}`
            });

            handleChangePokeList(response.data.results);
            handleChangeNext(response.data.next);
            handleChangePrev(response.data.previous);

        } catch (error) {
            const err = error as AxiosError;
            setErrors({ errorList: err.message });
            //console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPokemonList(endpoint);
    }, [endpoint])

    useEffect(() => {
        getSpecificPokemon(search);
    }, [search]);


    return {
        pokemon,
        characteristics,
        loading,
        erros,
        next,
        prev,
        getSpecificPokemon,
        getPokemonCharacteristics,
        getEvolutionsChain,
        getNextList,
        getPrevList
    }
}

export default usePokemon