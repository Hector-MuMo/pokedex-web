const getOnlyPokemonId = (uri: string | undefined) => {
    if (typeof uri !== 'string') {
        console.error("Can't get rigth pokemon number")
        return '---'
    }

    const slicedUri = uri.split('/');
    const pkmnId = slicedUri[slicedUri.length - 2];

    return pkmnId;
}

const getPkmnNmbrByUri = (uri: string | undefined) => {

    if (typeof uri !== 'string') {
        console.error("Can't get rigth pokemon number")
        return '---'
    }

    const slicedUri = uri.split('/');
    let pkmnNmbr = slicedUri[slicedUri.length - 2];

    switch (pkmnNmbr.length) {
        case 1:
            return pkmnNmbr = '00' + pkmnNmbr;
        case 2:
            return pkmnNmbr = '0' + pkmnNmbr;
        default:
            return pkmnNmbr;
    }
}

const completePkmnNmbr = (value: number | undefined) => {
    if (typeof value !== 'number') {
        console.error("Can't complete pokemon number");
        return '---';
    }

    const numToString = value.toString();

    switch (numToString.length) {
        case 1:
            return '00' + numToString;
        case 2:
            return '0' + numToString;
        default:
            return numToString;
    }
}

export {
    getOnlyPokemonId,
    getPkmnNmbrByUri,
    completePkmnNmbr
}; 