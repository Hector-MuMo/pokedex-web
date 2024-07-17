import { getPkmnNmbrByUri, completePkmnNmbr } from "./getPkmNmbr";

const getPkmnImgByNmbr = (value: number | string | undefined) => {
    let pkmnImg;

    if (typeof value === 'string') {
        const pkmnNumber = getPkmnNmbrByUri(value);
        pkmnImg = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/' + pkmnNumber + '.png'

        return pkmnImg;
    } else {
        const pkmnNumber = completePkmnNmbr(value);
        pkmnImg = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/' + pkmnNumber + '.png'

        return pkmnImg;
    }


}

export default getPkmnImgByNmbr;