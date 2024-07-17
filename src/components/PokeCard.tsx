import '../styles/PokeCard/PokeCardStyles.css';
import capitalizeText from '../utils/capitalizeText';
import getPkmnImgByNmbr from '../utils/getPkmnImg';
import { getPkmnNmbrByUri, completePkmnNmbr } from '../utils/getPkmNmbr';

interface PokeCardProps {
    name?: string,
    url?: string,
    pokemon?: {
        id: number,
        name: string,
    }
}

const PokeCard = ({ name, url, pokemon }: PokeCardProps) => {

    return (

        pokemon ?
            <div className='pokeCard-container'>
                <div className='pokeCard__number' >#{completePkmnNmbr(pokemon.id)}</div >
                <div className='pokeCard__img-name'>
                    <figure className='pokeCard__img-container'>
                        <img src={getPkmnImgByNmbr(pokemon.id)} alt={pokemon.name} />
                    </figure>
                    {
                        pokemon.name ?
                            <span>{capitalizeText(pokemon.name)}</span>
                            :
                            <span>generic name</span>
                    }
                </div>
            </div >

            :

            <div className='pokeCard-container'>
                <div className='pokeCard__number'>#{getPkmnNmbrByUri(url)}</div>
                <div className='pokeCard__img-name'>
                    <figure className='pokeCard__img-container'>
                        <img src={getPkmnImgByNmbr(url)} alt={name} />
                    </figure>
                    {
                        name ?
                            <span>{capitalizeText(name)}</span>
                            :
                            <span>generic name</span>
                    }
                </div>
            </div>


    )
}

export default PokeCard