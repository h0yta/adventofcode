const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input
    .map(x => parseInt(x))
    .reduce((pre, cur) => pre + cur);
}

let frequences = [0];
let frequence = 0;
const secondStar = function (input) {
  for (i = 0; i < input.length; i++) {
    frequence += parseInt(input[i]);
    if (frequences.indexOf(frequence) >= 0) {
      return frequence;
    }
    frequences.push(frequence);
  }

  return secondStar(input);
}

const reset = function () {
  frequences = [0];
  frequence = 0;
}

exports.run = function () {
  let input = utils.getInput('2018', 'day01', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
exports.reset = reset;