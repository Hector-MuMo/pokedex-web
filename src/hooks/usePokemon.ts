import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import useZustandStore from './useZustandStore';

interface ErrorsProps {
    errorList: string
}

const usePokemon = (endpoint: string) => {
    const [pokeList, setPokeList] = useState<[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [pokemon, setPokemon] = useState<any | undefined>(undefined);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [characteristics, setCharacteristics] = useState<any | undefined>(undefined);
    const [erros, setErrors] = useState<ErrorsProps>();
    const [loading, setLoading] = useState<boolean>(true);
    const search = useZustandStore((state) => state.search);

    const getPokemonList = async (endpoint: string) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${import.meta.env.VITE_API_URL}/${endpoint}`,
            })
            setPokeList(response.data.results);

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
                setPokeList([]);
            } else {
                const response = await axios({
                    method: 'get',
                    url: `${import.meta.env.VITE_API_URL}/pokemon/`
                })

                setPokemon(undefined);
                setPokeList(response.data.results);
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

    useEffect(() => {
        getPokemonList(endpoint);
    }, [endpoint])

    useEffect(() => {
        getSpecificPokemon(search);
    }, [search]);


    return { pokeList, pokemon, characteristics, loading, erros, getSpecificPokemon, getPokemonCharacteristics }
}

export default usePokemon