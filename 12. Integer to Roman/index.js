/**
 * @param {number} num
 * @return {string}
 */

const ROMAN_PATTERNS = {
    0: [],
    1: [0],
    2: [0, 0],
    3: [0, 0, 0],
    4: [0, 1],
    5: [1],
    6: [1, 0],
    7: [1, 0, 0],
    8: [1, 0, 0, 0],
    9: [0, 2],
}

intToRoman = (num) => {
    let numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    result = ''

    for (i = 0; i < 4; i++) {
        romanDigit = ''
        ROMAN_PATTERNS[num % 10].forEach(e => { romanDigit += numerals[e] });
        result = romanDigit + result
        num = Math.floor(num / 10)
        numerals.splice(0, 2)
    }

    return result
}


console.log(intToRoman(1994))