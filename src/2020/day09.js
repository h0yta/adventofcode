const utils = require('../util/fileUtil');

const firstStar = function (input, inputStart) {
  input = input.map(x => parseInt(x));
  for (let i = inputStart; i < input.length; i++) {
    let start = i - inputStart;
    let end = start + inputStart;
    let preamble = input.slice(start, end);
    let number = input[i];

    if (!isInvalid(preamble, number)) {
      return number;
    }
  }
}

const secondStar = function (input, invalidNumber) {
  input = input.map(x => parseInt(x));
  let start = 0;
  let end = 1;
  while (end < input.length) {
    let sum = input.slice(start, end).reduce((x, y) => x + y, 0);

    if (sum === invalidNumber) {
      console.log('#', start, end, (end - start))
      return Math.max(...input.slice(start, end)) + Math.min(...input.slice(start, end));
    } else if (sum > invalidNumber) {
      start++;
    } else if (sum < invalidNumber) {
      end++;
    }
  }
}

const isInvalid = (preamble, magicNumber) => {
  for (let i = 0; i < preamble.length; i++) {
    for (let j = 0; j < preamble.length; j++) {
      if (i === j) {
        continue;
      }

      if (preamble[i] + preamble[j] === magicNumber) {
        return true;
      }
    }
  }

  return false;
}

exports.run = function () {
  let input = utils.getInput('2020', 'day09', '\n');
  console.log('Answer for first star', firstStar(input, 25));
  console.log('Answer for second star', secondStar(input, 257342611));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
