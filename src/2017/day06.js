const utils = require("../util/fileUtil");
const runOne = function (input) {
  let oldResults = [];

  while (noDup(oldResults, input)) {
    oldResults.push(input.join(''));

    let max = input.reduce((prev, curr) => curr > prev ? curr : prev);
    let maxIndex = input.indexOf(max);
    input[maxIndex] = 0;
    runAroundAndAddOne(input, max, ++maxIndex);
  }

  return oldResults.length;
};

const runTwo = function (input) {
  let oldResults = [];

  while (noDup(oldResults, input)) {
    oldResults.push(input.join(''));

    let max = input.reduce((prev, curr) => curr > prev ? curr : prev);
    let maxIndex = input.indexOf(max);
    input[maxIndex] = 0;
    runAroundAndAddOne(input, max, ++maxIndex);
  }

  return oldResults.length - oldResults.indexOf(input.join(''));
};

const noDup = function (oldResults, input) {
  return oldResults.indexOf(input.join('')) === -1;
}

const runAroundAndAddOne = function (input, value, index) {
  if (value === 0) {
    return;
  }

  input[index % input.length]++;
  runAroundAndAddOne(input, --value, ++index);
}

exports.run = function () {
  let input = utils.getInput('2017', "day06", "\t").map(x => parseInt(x));
  console.log("Number of (first) redistribution cycles", runOne(input));
  console.log("Number of (first) redistribution cycles", runTwo(input));
};

exports.runOne = runOne;
exports.runTwo = runTwo;
