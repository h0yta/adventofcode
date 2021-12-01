const utils = require('../util/fileUtil');

const firstStar = function (input) {
  input = input.map(x => parseInt(x));
  let result = 0;
  let latestValue = null;

  for (let i = 0; i < input.length; i++) {
    if (latestValue !== null && input[i] > latestValue) {
      result++;
    }
    latestValue = input[i];
  }

  return result;
}

const secondStar = function (input) {
  input = input.map(x => parseInt(x));
  let result = 0;
  let latestValue = null;

  for (let i = 0; i < input.length - 2; i++) {
    if (latestValue !== null && sumSlidingWindow(input, i) > latestValue) {
      result++;
    }
    latestValue = sumSlidingWindow(input, i);
  }

  return result;
}

const sumSlidingWindow = (array, start) => {
  return array[start] + array[start + 1] + array[start + 2];
}

exports.run = function () {
  let input = utils.getInput('2021', 'day01', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
