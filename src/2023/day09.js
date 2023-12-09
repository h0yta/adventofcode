const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let readings = [];
  for (let seq = 0; seq < input.length; seq++) {
    let line = input[seq].split(/\s+/).map(x => parseInt(x));
    readings.push(extrapolate(line));
  }
  return readings
    .reduce((a, b) => a + b, 0);
}

const extrapolate = (line) => {
  let history = [];
  let historyPost = 0;

  history[historyPost] = line;
  while (!onlyContainsZeros(history[historyPost])) {
    history[historyPost + 1] = calculateDifference(history[historyPost]);
    historyPost++;
  }

  return history
    .map(arr => arr[arr.length - 1])
    .reverse()
    .reduce((a, b) => a + b, 0);
}

const secondStar = (input) => {
  let readings = [];
  for (let seq = 0; seq < input.length; seq++) {
    let line = input[seq].split(/\s+/).map(x => parseInt(x));
    readings.push(extrapolateBackwards(line));
  }
  return readings
    .reduce((a, b) => a + b, 0);
}

const extrapolateBackwards = (line) => {
  let history = [];
  let historyPost = 0;

  history[historyPost] = line;
  while (!onlyContainsZeros(history[historyPost])) {
    history[historyPost + 1] = calculateDifference(history[historyPost]);
    historyPost++;
  }

  return history
    .map(arr => arr[0])
    .reverse()
    .reduce((a, b) => b - a, 0);
}

const onlyContainsZeros = (array) => {
  return array
    .map(x => Math.abs(x))
    .reduce((a, b) => a + b, 0) === 0;
}

function calculateDifference(array) {
  let history = [];
  for (let i = 1; i < array.length; i++) {
    history.push(array[i] - array[i - 1]);
  }
  return history;
}

exports.run = () => {
  let input = utils.getInput('2023', 'day09', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
