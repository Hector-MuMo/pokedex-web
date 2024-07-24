import { getPercentStat, getUniqueId } from "../utils/getPercentStat"

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

export default PokeStats;