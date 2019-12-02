const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let i = 0;
  while (true) {
    let func = parseInt(input[i]);
    let firstPos = input[i + 1];
    let secondPos = input[i + 2];
    let finalPos = input[i + 3];

    if (func === 1) {
      input[finalPos] = input[firstPos] + input[secondPos];
    } else if (func === 2) {
      input[finalPos] = input[firstPos] * input[secondPos];
    } else if (func === 99) {
      return input[0];
    }

    i = i + 4;
  }
}

const secondStar = function (input) {
  return 0;
}

exports.run = function () {
  let input = utils.getInput('2019', 'day02', ',');
  input[1] = 12;
  input[2] = 2;
  console.log('Answer for first star', firstStar(input.map(x => BigInt(x))));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;