import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

interface ErrorsProps {
    errorList: string
}

const usePokemon = (endpoint: string) => {
    const [pokeList, setPokeList] = useState<[]>([]);
    const [erros, setErrors] = useState<ErrorsProps>();
    const [loading, setLoading] = useState<boolean>(true);

    const getPokemonList = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: `${import.meta.env.VITE_API_URL}/${endpoint}`,
            })
            setPokeList(response.data.results);
            console.log(response.data.results);

        } catch (error) {
            const err = error as AxiosError;
            setErrors({ errorList: err.message });
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPokemonList();
    }, [endpoint])


    return { pokeList, loading, erros }
}

export default usePokemon