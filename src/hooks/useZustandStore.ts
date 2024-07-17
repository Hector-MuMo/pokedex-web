import { create } from "zustand";
import { Actions, State } from "../types";


const useZustandStore = create<State & Actions>((set) => ({
    search: '',
    handleSearch: (value) => set(() => ({ search: value })),
    sortByName: false,
    handleSortPokemon: (value) => set(() => ({ sortByName: value }))
}))

export default useZustandStore;