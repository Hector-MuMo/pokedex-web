import { useEffect, useState } from 'react';
import usePokemon from '../hooks/usePokemon';
import useZustandStore from '../hooks/useZustandStore';
import { SimplePkmInfo } from '../types';
import PokeCard from '../components/PokeCard';
import '../styles/PokeMainStyles/PokeMain.css';


const PokeMain = () => {
    const sortByName = useZustandStore(state => state.sortByName);
    const pokeList = useZustandStore(state => state.pokeList);
    const { pokemon, next, prev, getNextList, getPrevList } = usePokemon('pokemon');
    const [sortedList, setSortedList] = useState<[] | undefined>(undefined);

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

    const handlePrevPage = () => {
        getPrevList(prev)
    }

    const handleNextPage = () => {
        getNextList(next)
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
    }, [sortByName, pokeList, pokemon]);

    return (

        pokemon ?
            <PokeCard pokemon={pokemon} />
            :
            <div className='main-container'>

                <div>
                    <button onClick={() => handlePrevPage()}>Prev</button>
                    <button onClick={() => handleNextPage()}>Next</button>
                </div>
                <div className='cards-container'>
                    {CardList}
                </div>

            </div>

    )
}

export default PokeMain