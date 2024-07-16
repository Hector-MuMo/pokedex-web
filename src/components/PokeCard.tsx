import '../styles/PokeCard/PokeCardStyles.css';
import capitalizeText from '../utils/capitalizeText';
import getPkmnImgByNmbr from '../utils/getPkmnImg';
import getPkmnNmbrByUri from '../utils/getPkmNmbr';

interface PokeCardProps {
    name: string,
    url: string
}

const PokeCard = ({ name, url }: PokeCardProps) => {

    return (
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