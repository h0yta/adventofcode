const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return 0;
}

const secondStar = function (input) {
  return 0;
}

exports.run = function () {
  let input = utils.getInput('##YEAR##', 'day##DAY##', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
