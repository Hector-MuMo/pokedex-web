import logo from '../assets/pokedex-logo.svg';
import '../styles/NavBarStyles/NavBarStyles.css';

interface NavBarProps {
    handleChange: (value: string) => void
}

const NavBar = ({ handleChange }: NavBarProps) => {
    return (
        <nav className='navbar'>
            <div className='navbar__img-container'>
                <img src={logo} alt="pokedex" />
            </div>
            <div className='navbar__inputs-container'>
                <input placeholder='Search by name or id' className='navbar__input' onChange={(e) => handleChange(e.target.value)} />
                <button className='navbar__sort-button'>#</button>
            </div>
        </nav>
    )
}

export default NavBar