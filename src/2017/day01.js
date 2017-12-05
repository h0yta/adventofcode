const utils = require('../util/fileUtil');

const runOne = function () {
  let sum = 0;
  let array = utils.getInput('day01', '');
  for (i = 0; i < array.length; i++) {
    let compareOne = (i + 1) % array.length;
    if (array[i] === array[compareOne]) {
      sumOne += parseInt(array[i]);
    }

    let compareTwo = (i + (array.length / 2)) % array.length;
    if (array[i] === array[compareTwo]) {
      sumTwo += parseInt(array[i]);
    }
  }

  console.log('sum', sum);
  return sum;
}

const runTwo = function () {
  let sum = 0;
  let array = utils.getInput('day01', '');
  for (i = 0; i < array.length; i++) {
    let compareOne = (i + 1) % array.length;
    if (array[i] === array[compareOne]) {
      sumOne += parseInt(array[i]);
    }

    let compareTwo = (i + (array.length / 2)) % array.length;
    if (array[i] === array[compareTwo]) {
      sumTwo += parseInt(array[i]);
    }
  }

  console.log('sum', sum);
  return sum;
}

exports.run = function () {
  runOne();
  runTwo();
}

exports.runOne = runOne;
exports.runTwo = runTwo;