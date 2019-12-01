const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input;
}

const secondStar = function (input) {
  return input;
}

exports.run = function () {
  let input = utils.getInput('2019', 'day01', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;