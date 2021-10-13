const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return 0;
}

const secondStar = function (input) {
  return 0;
}

const parseState = (input) => {
  input.filter(row => row.indexOf('value') === 0)
    .map()
}

exports.run = function () {
  let input = utils.getInput('2016', 'day10', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
