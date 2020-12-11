const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let codeCharacters = input.map(x => x.split('').length)
    .reduce((x, y) => x + y, 0);
  let textCharacters = input.map(x => x.split('').slice(1, x.length).slice(0, x.length - 2).join(''))
    .map(x => x.replace(/\\x[0-9a-f]{2}/g, '.'))
    .map(x => x.replace(/\\\\/g, '.'))
    .map(x => x.replace(/\\/g, ''))
    .map(x => x.split('').length)
    .reduce((x, y) => x + y, 0);

  return codeCharacters - textCharacters;
}

const secondStar = function (input) {
  let codeCharacters = input.map(x => x.split('').length)
    .reduce((x, y) => x + y, 0);
  let encodedCharacters = input
    .map(x => x.split(''))
    .map(x => x.map(escape))
    .map(x => x.join(''))
    .map(x => '"' + x + '"')
    .map(x => x.split('').length)
    .reduce((x, y) => x + y, 0);

  return encodedCharacters - codeCharacters;
}

const escape = (character) => {
  if (isNumber(character) || isLetter(character.toUpperCase())) {
    return character;
  } else {
    return '\\' + character;
  }
}

const isNumber = (x) => {
  return x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57;
}

const isLetter = (x) => {
  return x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90;
}

exports.run = function () {
  let input = utils.getInput('2015', 'day08', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
