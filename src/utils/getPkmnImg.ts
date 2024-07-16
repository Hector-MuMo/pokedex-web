import getPkmnNmbrByUri from "./getPkmNmbr";

const getPkmnImgByNmbr = (url: string) => {
    const pkmnNumber = getPkmnNmbrByUri(url);
    const pkmnImg = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/' + pkmnNumber + '.png'

    return pkmnImg;
}

export default getPkmnImgByNmbr;