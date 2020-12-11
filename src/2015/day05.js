const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input.filter(threeVows)
    .filter(duobleLetter)
    .filter(noUnallowedSubstrings)
    .length
}

const threeVows = function (string) {
  return string.split(/[a|e|i|o|u]/).length > 3;
}

const duobleLetter = function (string) {
  return string.split(/(.)\1/).length > 1;
}

const noUnallowedSubstrings = function (string) {
  return string.split(/(ab|cd|pq|xy)/).length <= 1;
}


const secondStar = function (input) {
  return 0;
}

exports.run = function () {
  let input = utils.getInput('2015', 'day05', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
