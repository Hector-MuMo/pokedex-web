import capitalizeText from '../utils/capitalizeText';
import getPkmnImgByNmbr from '../utils/getPkmnImg';
import { getPkmnNmbrByUri, completePkmnNmbr, getOnlyPokemonId } from '../utils/getPkmNmbr';
import '../styles/PokeCard/PokeCardStyles.css';
import { Link } from 'react-router-dom';

interface PokeCardProps {
    name?: string,
    url?: string,
    pokemon?: {
        id: number,
        name: string,
    }
}

const PokeCard = ({ name, url, pokemon }: PokeCardProps) => {

    // const handleClick = () => {
    //     console.log('click');

    //     if (pokemon) {
    //         redirect(`/pokemons/${pokemon.id}`);
    //     } else {
    //         console.log(pokemon);
    //         redirect(`/pokemons`);
    //     }
    // }

    return (

        pokemon ?
            <div className='pokeCard-container'>
                <div className='pokeCard__number' >#{completePkmnNmbr(pokemon.id)}</div >
                <Link to={`/pokemons/${pokemon.id}`} className='pokeCard__img-name' >
                    <figure className='pokeCard__img-container'>
                        <img src={getPkmnImgByNmbr(pokemon.id)} alt={pokemon.name} />
                    </figure>
                    {
                        pokemon.name ?
                            <span className='pokeCard__name'>{capitalizeText(pokemon.name)}</span>
                            :
                            <span>generic name</span>
                    }
                </Link>
            </div >

            :

            <div className='pokeCard-container'>
                <div className='pokeCard__number'>#{getPkmnNmbrByUri(url)}</div>
                <Link to={`/pokemons/${getOnlyPokemonId(url)}`} className='pokeCard__img-name' >
                    <figure className='pokeCard__img-container'>
                        <img src={getPkmnImgByNmbr(url)} alt={name} />
                    </figure>
                    {
                        name ?
                            <span className='pokeCard__name'>{capitalizeText(name)}</span>
                            :
                            <span>generic name</span>
                    }
                </Link>
            </div>


    )
}

export default PokeCard