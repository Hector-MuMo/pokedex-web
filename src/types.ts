type SimplePkmInfo = {
    name: string,
    url: string
}

type State = {
    search: string
}

type Actions = {
    handleSearch: (value: string) => void
}

export type {
    SimplePkmInfo,
    State,
    Actions
}