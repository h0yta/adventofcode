const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input
    .reduce((pre, cur) => pre + (cur === '(' ? 1 : -1), 0);
}

const secondStar = function (input) {
  let floor = 0;
  for (let pos = 0; pos < input.length; pos++) {
    switch (input[pos]) {
      case '(':
        floor++;
        break;
      case ')':
        floor--;
        break;
    }

    if (floor === -1) {
      return pos + 1;
    }
  }
}

exports.run = function () {
  let input = utils.getInput('2015', 'day01', '');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;