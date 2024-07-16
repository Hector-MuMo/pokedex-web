import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import useZustandStore from './useZustandStore';

interface ErrorsProps {
    errorList: string
}

const usePokemon = (endpoint: string) => {
    const [pokeList, setPokeList] = useState<[]>([]);
    const [pokemon, setPokemon] = useState<[] | undefined>(undefined);
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
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const getSpecificPokemon = async (search: string) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${import.meta.env.VITE_API_URL}/pokemon/${search}`
            })

            if (response.data.results) {
                setPokeList(response.data.results)
                setPokemon(undefined)
            } else {
                //console.log(response.data)
                setPokeList([])
                setPokemon(response.data);
            }

        } catch (error) {
            const err = error as AxiosError
            console.error(err)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPokemonList(endpoint);
    }, [endpoint])

    useEffect(() => {
        getSpecificPokemon(search);
    }, [search]);


    return { pokeList, pokemon, loading, erros }
}

export default usePokemon