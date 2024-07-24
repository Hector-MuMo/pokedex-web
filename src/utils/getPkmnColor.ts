import { bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water } from "../constants/typesColor";

const getPkmnHexColor = (color: string) => {
    switch (color) {
        case 'bug':
            return bug;
        case 'dark':
            return dark;
        case 'dragon':
            return dragon;
        case 'electric':
            return electric;
        case 'fairy':
            return fairy;
        case 'fighting':
            return fighting;
        case 'fire':
            return fire;
        case 'flying':
            return flying;
        case 'ghost':
            return ghost;
        case 'normal':
            return normal;
        case 'grass':
            return grass;
        case 'ground':
            return ground;
        case 'ice':
            return ice;
        case 'poison':
            return poison;
        case 'psychic':
            return psychic;
        case 'rock':
            return rock;
        case 'steel':
            return steel;
        case 'water':
            return water;
        default:
            return '#fff';
    }
}


export {
    getPkmnHexColor
}