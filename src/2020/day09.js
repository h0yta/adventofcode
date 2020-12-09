const utils = require('../util/fileUtil');

const firstStar = function (input, inputStart) {
  input = input.map(x => parseInt(x));
  for (let i = inputStart; i < input.length; i++) {
    let start = i - inputStart;
    let end = start + inputStart;
    let preamble = input.slice(start, end);
    let magicnumber = input[i];

    if (!isInvalid(preamble, magicnumber)) {
      return magicnumber;
    }
  }
}

const secondStar = function (input, invalidNumber) {
  input = input.map(x => parseInt(x));
  for (let start = 0; start < input.length; start++) {

    let end = findContiguousRange(input, start, invalidNumber);
    if (end > 0) {
      let contiguousRange = input.slice(start, end);
      return Math.max(...contiguousRange) + Math.min(...contiguousRange);
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

const findContiguousRange = (input, start, invalidNumber) => {
  for (let end = start + 1; end < input.length; end++) {
    let sum = input.slice(start, end)
      .reduce((x, y) => x + y, 0);

    if (sum === invalidNumber) {
      return end;
    } else if (sum > invalidNumber) {
      return 0;
    }
  }
}

exports.run = function () {
  let input = utils.getInput('2020', 'day09', '\n');
  console.log('Answer for first star', firstStar(input, 25));
  console.log('Answer for second star', secondStar(input, 257342611));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
