const utils = require("../util/fileUtil");
const runOne = function (input) {
  let oldResults = [];
  let counter = 0;

  while (noDup(oldResults, input)) {
    oldResults.push(input.join(''));

    let max = input.reduce((prev, curr) => curr > prev ? curr : prev);
    let maxIndex = input.indexOf(max);
    input[maxIndex] = 0;
    runAroundAndAddOne(input, max, ++maxIndex);

    counter++;
  }

  return counter;
};

const runTwo = function (input) {
  let oldResults = [];
  let counter = 0;

  while (noDup(oldResults, input)) {
    oldResults.push(input.join(''));

    let max = input.reduce((prev, curr) => curr > prev ? curr : prev);
    let maxIndex = input.indexOf(max);
    input[maxIndex] = 0;
    runAroundAndAddOne(input, max, ++maxIndex);

    counter++;
  }

  return counter - oldResults.indexOf(input.join(''));
};

const noDup = function (oldResults, input) {
  return oldResults.indexOf(input.join('')) === -1;
}

const runAroundAndAddOne = function (input, value, index) {
  if (value === 0) {
    return;
  }

  if (index < input.length) {
    input[index]++;
    runAroundAndAddOne(input, --value, ++index);
  } else {
    runAroundAndAddOne(input, value, 0);
  }
}

exports.run = function () {
  let input = utils.getInput("day06", "\t")
    .map(x => parseInt(x));
  console.log("Number of (first) redistribution cycles", runOne(input));
  console.log("Number of (first) redistribution cycles", runTwo(input));
};

exports.runOne = runOne;
exports.runTwo = runTwo;
