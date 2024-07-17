import { useEffect, useState } from 'react';
import usePokemon from '../hooks/usePokemon';
import useZustandStore from '../hooks/useZustandStore';
import { SimplePkmInfo } from '../types';
import PokeCard from '../components/PokeCard';


const PokeMain = () => {
    const { pokeList, pokemon } = usePokemon('pokemon');
    const [sortedList, setSortedList] = useState<[] | undefined>(undefined);
    const sortByName = useZustandStore(state => state.sortByName)

    const sortList = (value: boolean) => {
        const newList: [] = [...pokeList]
        if (pokeList) {
            if (value) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setSortedList(newList.sort(function (a: any, b: any) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                })
                )
            } else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setSortedList(newList.sort(function (a: any, b: any) {
                    if (a.id < b.id) {
                        return -1;
                    }
                    if (a.id > b.id) {
                        return 1;
                    }
                    return 0;
                })
                )
            }
        }
    }

    const CardList = sortedList ?
        sortedList.map((pkmn: SimplePkmInfo) =>
            < PokeCard key={pkmn.name} name={pkmn.name} url={pkmn.url} />
        )
        : pokeList.map((pkmn: SimplePkmInfo) =>
            < PokeCard key={pkmn.name} name={pkmn.name} url={pkmn.url} />
        )


    useEffect(() => {
        sortList(sortByName);

    }, [sortByName, pokeList]);

    return (

        pokemon ?
            <PokeCard pokemon={pokemon} />
            :
            CardList

    )
}

export default PokeMain