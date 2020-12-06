const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input
    .map(x => x.replace(/\n/g, ''))
    .map(x => new Set(x.split('')).size)
    .reduce((x, y) => x + y, 0);
}

const secondStar = function (input) {
  return input
    .map(x => x.split('\n'))
    .map(x => x.map(y => y.split('')))
    .map(x => [].concat(...x).filter(e => x.every(a => a.includes(e))))
    .map(x => new Set(x).size)
    .reduce((x, y) => x + y, 0);
}

exports.run = function () {
  let input = utils.getInput('2020', 'day06', '\n\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
