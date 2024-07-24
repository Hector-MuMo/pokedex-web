import arrowBack from '../assets/icons/arrow_back.png';
import pokeball from '../assets/icons/pokeball.png';
import weigth from '../assets/icons/weight.png';
import straighten from '../assets/icons/straighten.png';
import { Link, useParams } from 'react-router-dom'
import '../styles/PokeResumeStyles/PokeResumeStyles.css';
import usePokemon from '../hooks/usePokemon';
import { useEffect, useState } from 'react';
import capitalizeText from '../utils/capitalizeText';
import { completePkmnNmbr } from '../utils/getPkmNmbr';
import getPkmnImgByNmbr from '../utils/getPkmnImg';
import { getPkmnHexColor } from '../utils/getPkmnColor';
import { getPercentStat, getUniqueId } from '../utils/getPercentStat';

interface PokeTypesProps {
    types: [
        {
            type: {
                name: string,
                ur: string
            }
        }
    ],
    getPrimaryTypeColor: (color: string) => void
}

const PokeTypes = ({ types, getPrimaryTypeColor }: PokeTypesProps) => {
    const [colorType, setColorType] = useState<string>('');

    const getFirstType = () => {
        const firstType = types[0].type.name;
        const mainColor = getPkmnHexColor(firstType);
        setColorType(mainColor);
    }

    const list = types ?
        types.map((item) => {
            return <span key={getUniqueId()} className='card__specific-type' style={{ backgroundColor: getPkmnHexColor(item.type.name) }}>{item.type.name}</span>
        }
        )
        :
        <span className='card__specific-type'>poke type</span>

    useEffect(() => {
        getPrimaryTypeColor(colorType)
    }, [colorType])

    useEffect(() => {
        getFirstType();
    }, [types]);

    return (
        list
    )
}

interface PokeMovesProps {
    moves: [
        {
            move: {
                name: string,
                url: string
            }
        }
    ]
}

const PokeMoves = ({ moves }: PokeMovesProps) => {

    const list = moves ? moves.slice(0, 4).map((item) => <span key={getUniqueId()} className=''>{item.move.name}</span>)
        : <span>No moves abailable</span>

    return (
        list
    )
}

interface PokeStatsProps {
    stats: [
        {
            base_stat: number
            effort: number
            stat: {
                name: string
                url: string
            }
        }
    ],
    color: string
}

const PokeStats = ({ stats, color }: PokeStatsProps) => {

    const statsList = stats.map(item => <span key={getUniqueId()} >{item.base_stat}</span>);

    const lineList = stats.map(item =>
        <div key={getUniqueId()} className='card__stat-line ' style={{ backgroundColor: `${color}50` }}>
            <div className='card__inside-stat-line' style={{ backgroundColor: color, width: `${getPercentStat(item.base_stat)}%` }}></div>
        </div>);

    return (
        <>
            <div className='card__stats-nums'>
                {statsList}
            </div>

            <div className='card__stats-lines'>
                {lineList}
            </div>
        </>
    )
}


const PokeResume = () => {
    const { id } = useParams();
    const { pokemon, getSpecificPokemon } = usePokemon('');
    const [primaryColor, setPrimaryColor] = useState('');
    const { characteristics, getPokemonCharacteristics } = usePokemon('');

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
        getPokemonCharacteristics(id)
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
                                src={getPkmnImgByNmbr(pokemon.id)} alt={pokemon.name} />
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
                <span>Loader</span>
            </div>
    )
}

export default PokeResume