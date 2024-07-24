import { useEffect, useState } from 'react';
import { getPkmnHexColor } from '../utils/getPkmnColor';
import { getUniqueId } from '../utils/getPercentStat';

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

export default PokeTypes;