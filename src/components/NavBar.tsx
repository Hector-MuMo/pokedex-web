import logo from '../assets/pokedex-logo.svg';
import useZustandStore from '../hooks/useZustandStore';
import '../styles/NavBarStyles/NavBarStyles.css';


const NavBar = () => {
    const search = useZustandStore(state => state.search);
    const handleSearch = useZustandStore(state => state.handleSearch);
    const sortByName = useZustandStore(state => state.sortByName)
    const handleSort = useZustandStore(state => state.handleSortPokemon)

    return (
        <nav className='navbar'>
            <div className='navbar__img-container'>
                <img src={logo} alt="pokedex" />
            </div>
            <div className='navbar__inputs-container'>
                <input placeholder='Search by name or id' className='navbar__input'
                    onChange={(e) => handleSearch(e.target.value)} value={search} />
                <button className='navbar__sort-button' onClick={() => handleSort(!sortByName)}>
                    {
                        sortByName ?
                            <i>#</i>
                            :
                            <i>Az</i>
                    }
                </button>
            </div>
        </nav>
    )
}

export default NavBar

// onClick={() => handleSort(!sortByName)}