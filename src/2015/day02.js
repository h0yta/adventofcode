const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input
    .reduce((pre, cur) => {
      let [l, h, w] = cur.split('x')
        .map(Number)
        .sort((a, b) => a - b);
      return pre + (2 * l * h + 2 * l * w + 2 * h * w + l * h);
    }, 0);
}

const secondStar = function (input) {
  return input
    .reduce((pre, cur) => {
      let [l, h, w] = cur.split('x')
        .map(Number)
        .sort((a, b) => a - b);
      return pre + (l + l + h + h + (l * h * w));
    }, 0);
}

exports.run = function () {
  let input = utils.getInput('2015', 'day02', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;