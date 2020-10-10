const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let transformedString = expr;
    let result = '';
    let stringItem;
    for (let i = 0; i < transformedString.length; i += 10) {
        stringItem = transformedString.slice(i, i + 10);
        if (stringItem === '**********') {
            result += ' ';
        } else {
            stringItem = stringItem.replace(/10/g, '.');
            stringItem = stringItem.replace(/11/g, '-');
            stringItem = stringItem.replace(/0/g, '');
            result += MORSE_TABLE[stringItem];
        }
    }
    return result;
}

module.exports = {
    decode
}