const capitalizeText = (text: string) => {
    if (typeof text !== 'string') {
        console.error('Must use string type to capitalize text');
        return text;
    }

    const firstLetter = text.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;

    return capitalizedWord;

}

export default capitalizeText