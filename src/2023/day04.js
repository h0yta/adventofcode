const utils = require('../util/fileUtil');

const firstStar = (input) => {
  return 0;
}

const secondStar = (input) => {
  return 0;
}

exports.run = () => {
  let input = utils.getInput('2023', 'day04', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
