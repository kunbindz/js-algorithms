function countVowels(str) {
    let count = 0
    const formattedStr = str.toLowerCase()

    for ( let i = 0; i < formattedStr.length ; i++ ) {
        const chart = formattedStr[i]
        if ( chart === 'u' || chart =='e' || chart === 'o' || chart === 'a' || chart === 'i') {
            count++
        }
    }
    return count
}

module.exports = countVowels;
