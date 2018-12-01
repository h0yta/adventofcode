const utils = require('../util/fileUtil');

const runOne = function (input) {
  return input.reduce((pre, cur) => parseInt(pre) + parseInt(cur));
}

const runTwo = function (input) {
  // TODO Which frequency is reached twice first?
  return 0;
}

exports.run = function () {
  let input = utils.getInput('2018', 'day01', '\n');
  console.log('Answer to (first) captcha', runOne(input));
  console.log('Answer to (second) captcha', runTwo(input));
}

exports.runOne = runOne;
exports.runTwo = runTwo;