const getPkmnNmbrByUri = (uri: string) => {

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

export default getPkmnNmbrByUri; 