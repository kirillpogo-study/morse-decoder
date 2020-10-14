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
  '-----': '0'
}

function decode (expr) {
  const exprs = expr.split(/(.{10})/).filter(x => x)
  // filter is for empty array elements regex creates between chunks

  return exprs.map(expr => {
    if (expr.includes('*')) return ' '
    return removeZeroPads(expr)
      .split(/(.{2})/)
      .filter(x => x)
      .map(c => c === '10' ? c = '.' : c = '-')
      .join('')
  })
    .map(c => MORSE_TABLE[c] || ' ')
    .join('')
}

function removeZeroPads (ex) {
  return ex.toString().replace(/^(0*)/, '')
}

module.exports = {
  decode
}
