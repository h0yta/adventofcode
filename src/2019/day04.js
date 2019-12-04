const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let matches = 0;
  for (password = input[0]; password <= input[1]; password++) {
    if (hasAtleastTwoAdjecentDigits(password) && isIncreasing(password)) {
      matches++;
    }
  }

  return matches;
}

const secondStar = (input) => {
  let matches = 0;
  for (password = input[0]; password <= input[1]; password++) {
    if (hasExactlyTwoAdjecentDigits(password) && isIncreasing(password)) {
      matches++;
    }
  }

  return matches;
}

let doubleDigitRegex = RegExp('(\\d)\\1');
const hasAtleastTwoAdjecentDigits = (code) => {
  return doubleDigitRegex.test(code.toString());
}

const hasExactlyTwoAdjecentDigits = (code) => {
  let matches = code.toString().match(/(\d)\1+/g);
  return matches != null && matches
    .filter(m => m.split('').length === 2)
    .length > 0;
}

const isIncreasing = (code) => {
  let sorted = parseInt(code.toString().split('').sort().join(''));
  return code === sorted
}

exports.run = () => {
  let input = utils.getInput('2019', 'day04', '-');

  console.log('Answer for first star', firstStar(input.map(x => parseInt(x))));
  console.log('Answer for second star', secondStar(input.map(x => parseInt(x))));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
exports.hasAtleastTwoAdjecentDigits = hasAtleastTwoAdjecentDigits;
exports.hasExactlyTwoAdjecentDigits = hasExactlyTwoAdjecentDigits;
exports.isIncreasing = isIncreasing;