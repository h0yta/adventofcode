const utils = require('../util/fileUtil');

const firstStar = function (input) {
  for (i = 0; i < input.length; i++) {
    for (j = 0; j < input.length; j++) {
      if (i !== j && input[i] + input[j] == 2020) {
        return input[i] * input[j];
      }
    }
  }
}

const secondStar = function (input) {
  for (i = 0; i < input.length; i++) {
    for (j = 0; j < input.length; j++) {
      for (k = 0; k < input.length; k++) {
        if (input[i] + input[j] + input[k] == 2020) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }
}

exports.run = function () {
  let input = utils.getInput('2020', 'day01', '\n');
  console.log('Answer for first star', firstStar(input.map(x => parseInt(x))));
  console.log('Answer for second star', secondStar(input.map(x => parseInt(x))));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;