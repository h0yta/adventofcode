const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let adapters = getSortedInput(input);
  let steps = new Array();
  for (let i = 0; i < adapters.length; i++) {
    if (adapters[i] - (adapters[i - 1] || 0) === 1) {
      steps.push(1);
    } else if (adapters[i] - (adapters[i - 1] || 0) === 3) {
      steps.push(3);
    }
  }

  return steps.filter(x => x === 1).length * steps.filter(x => x === 3).length;
}

const secondStar = function (input) {
  let adapters = getSortedInput(input);
  const stepCounter = { 0: 1 }
  for (let i = 0; i < adapters.length; i++) {
    let j = i + 1;
    while (adapters[j] <= adapters[i] + 3) {
      stepCounter[j] = (stepCounter[j] || 0) + stepCounter[i];
      j++;
    }
  }

  return stepCounter[input.length - 1];
}

const getSortedInput = (input) => {
  input.push(0);
  input.push(Math.max(...input) + 3);
  return input.map(x => parseInt(x)).sort((a, b) => a - b);
}

exports.run = function () {
  let input = utils.getInput('2020', 'day10', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
