import { create } from "zustand";
import { Actions, State } from "../types";


const useZustandStore = create<State & Actions>((set) => ({
    pokeList: [],
    handlePokeList: (list) => set(() => ({ pokeList: list })),
    search: '',
    handleSearch: (value) => set(() => ({ search: value })),
    sortByName: false,
    handleSortPokemon: (value) => set(() => ({ sortByName: value })),
    nextUri: '',
    handleNextUri: (uri) => set(() => ({ nextUri: uri })),
    prevUri: '',
    handlePrevUri: (uri) => set(() => ({ prevUri: uri }))
}))

export default useZustandStore;