
import usePokemon from './hooks/usePokemon'
import PokeCard from './components/PokeCard'
import { SimplePkmInfo } from './types';
import Layout from './Layout';
import './App.css'

function App() {
    const { pokeList } = usePokemon('pokemon');

    const CardList = pokeList.map((pkmn: SimplePkmInfo) =>
        < PokeCard key={pkmn.name} name={pkmn.name} url={pkmn.url} />
    )

    return (
        <Layout>
            {CardList}
        </Layout>
    )
}

export default App
