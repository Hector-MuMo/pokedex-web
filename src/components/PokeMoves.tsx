import { getUniqueId } from "../utils/getPercentStat"

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

export default PokeMoves;