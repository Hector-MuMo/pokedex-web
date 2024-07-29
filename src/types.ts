interface Pokemon {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: [
        {
            is_hidden: boolean,
            slot: number,
            ability: {
                name: string
                url: string
            }
        }
    ]
    form: [
        {
            name: string,
            url: string
        }
    ]
    game_indices: [
        {
            game_index: number,
            version: {
                name: string,
                url: string
            }
        }
    ]
    held_items: [
        {
            item: {
                name: string,
                url: string
            },
            version_details: [
                {
                    rarity: number,
                    version: {
                        name: string,
                        url: string
                    }
                }
            ],
        }
    ],
    location_area_encounters: string,
    moves: [
        {
            move: {
                name: string,
                url: string
            },
            version_group_details: [
                {
                    level_learned_at: number,
                    version_group: {
                        name: string,
                        url: string
                    },
                    move_learn_method: {
                        name: string,
                        url: string
                    }
                }
            ]
        }
    ],
    species: {
        name: string,
        url: string
    },
    sprites: {
        back_default: string | null,
        back_female: string | null,
        back_shiny: string | null,
        back_shiny_female: string | null,
        front_default: string | null,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null
    },

}

type SimplePkmInfo = {
    name: string,
    url: string
}

type State = {
    search: string,
    sortByName: boolean,
    pokeList: [],
    nextUri: string,
    prevUri: string,
}

type Actions = {
    handleSearch: (value: string) => void,
    handleSortPokemon: (value: boolean) => void,
    handlePokeList: (list: []) => void,
    handleNextUri: (uri: string) => void,
    handlePrevUri: (uri: string) => void,
}

export type {
    Pokemon,
    SimplePkmInfo,
    State,
    Actions,
}