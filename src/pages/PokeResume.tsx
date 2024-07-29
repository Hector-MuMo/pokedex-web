import arrowBack from '../assets/icons/arrow_back.png';
import pokeball from '../assets/icons/pokeball.png';
import weigth from '../assets/icons/weight.png';
import straighten from '../assets/icons/straighten.png';
import { Link, useParams } from 'react-router-dom'
import usePokemon from '../hooks/usePokemon';
import { useEffect, useState } from 'react';
import capitalizeText from '../utils/capitalizeText';
import { completePkmnNmbr } from '../utils/getPkmNmbr';
import getPkmnImgByNmbr from '../utils/getPkmnImg';
import PokeStats from '../components/PokeStats';
import PokeTypes from '../components/PokeTypes';
import PokeMoves from '../components/PokeMoves';
import loader from '../assets/getting_ready.gif';
import '../styles/PokeResumeStyles/PokeResumeStyles.css';

const PokeResume = () => {
    const { id } = useParams();
    const { pokemon, getSpecificPokemon } = usePokemon('');
    const [primaryColor, setPrimaryColor] = useState('');
    const audio = new Audio(pokemon?.cries.latest ?? '');

    const getPokemon = () => {
        if (id) {
            getSpecificPokemon(id)
        }
    }

    const getPrimaryTypeColor = (color: string) => {
        setPrimaryColor(color)
    }

    useEffect(() => {
        getPokemon();
    }, [id]);

    useEffect(() => {
        //console.log(pokemon);
    }, [pokemon, primaryColor]);

    return (
        pokemon ?
            <div className='detail-container'>
                <div className='card' style={{ backgroundColor: primaryColor }}>

                    <div className='card__top'>
                        <Link to={'/'} className='card__return-icon'>
                            <img src={arrowBack} alt="arrow-back" />
                        </Link>
                        <div>
                            <h2 className='card__poke-name'>{capitalizeText(pokemon.name)}</h2>
                        </div>
                        <div>
                            <span className='card__poke-number'>{completePkmnNmbr(pokemon.id)}</span>
                        </div>
                    </div>

                    <div className='card__img-container'>
                        <figure className='card__poke-img'>
                            <img className='card__pokeball' src={pokeball} alt='pokeball' />
                            <img className='card__pokemon'
                                src={getPkmnImgByNmbr(pokemon.id)} alt={pokemon.name} onClick={() => audio.play()} />
                            <audio src={pokemon.cries.latest} autoPlay={true}></audio>
                        </figure>
                    </div>

                    <div className='card__details'>
                        <div className='card__types'>
                            <PokeTypes key={pokemon.id} types={pokemon.types} getPrimaryTypeColor={getPrimaryTypeColor} />
                        </div>

                        <h4 className='card__title' style={{ color: primaryColor }}>About</h4>

                        <div className='card__about-container'>
                            <div className='card__weight'>
                                <div className='card__weight-stat'>
                                    <div className='card__weight-img'>
                                        <img src={weigth} alt="weight" />
                                    </div>
                                    <span>{pokemon.weight} lb</span>
                                </div>
                                <span className='card__about-title'>Weigth</span>
                            </div>

                            <div className='card__line'></div>

                            <div className='card__height'>
                                <div className='card__height-stat'>
                                    <div className='card__height-img'>
                                        <img src={straighten} alt="height" />
                                    </div>
                                    <span>{pokemon.height} ft</span>
                                </div>
                                <span className='card__about-title'>Height</span>
                            </div>

                            <div className='card__line'></div>

                            <div className='card__moves'>
                                <div className='card__main-moves'>
                                    <PokeMoves moves={pokemon.moves} />
                                </div>
                                <span className='card__about-title'>Moves</span>
                            </div>
                        </div>

                        <p className='card__description'>Description</p>


                        <div className='card__stats-contianer'>
                            <h4 className='card__title' style={{ color: primaryColor }}>Base Stats</h4>

                            <div className='card__stats'>
                                <div className='card__stats-names' style={{ color: primaryColor }}>
                                    <span>HP</span>
                                    <span>ATK</span>
                                    <span>DEF</span>
                                    <span>SATK</span>
                                    <span>SDEF</span>
                                    <span>SPD</span>
                                </div>

                                <div className='card__line-bottom'></div>

                                <PokeStats stats={pokemon.stats} color={primaryColor} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            :

            <div className='detail-container'>
                <img className='loader' src={loader} alt='loader' />
            </div>
    )
}

export default PokeResume