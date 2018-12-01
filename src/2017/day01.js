const utils = require('../util/fileUtil');

const runOne = function (input) {
  let sum = 0;
  for (i = 0; i < input.length; i++) {
    let compare = (i + 1) % input.length;
    if (input[i] === input[compare]) {
      sum += parseInt(input[i]);
    }
  }

  return sum;
}

const runTwo = function (input) {
  let sum = 0;
  for (i = 0; i < input.length; i++) {
    let compare = (i + (input.length / 2)) % input.length;
    if (input[i] === input[compare]) {
      sum += parseInt(input[i]);
    }
  }

  return sum;
}

exports.run = function () {
  let input = utils.getInput('2017', 'day01', '');
  console.log('Answer to (first) captcha', runOne(input));
  console.log('Answer to (second) captcha', runTwo(input));
}

exports.runOne = runOne;
exports.runTwo = runTwo;