const getUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

const getPercentStat = (stat: number) => {
    const percent = (stat / 255) * 100;

    return percent.toString();
}


export { getPercentStat, getUniqueId };