const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let gamma = '';
  let epsilon = '';

  for (let i = 0; i < input[0].length; i++) {
    gamma = gamma + findMostCommonBitInPosition(input, i);
    epsilon = epsilon + findLeastCommonBitInPosition(input, i);
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

const secondStar = function (input) {
  let oxygenRating = calculateOxygenRating(input);
  let co2Rating = calculateCO2Rating(input);

  return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2);
}

const calculateOxygenRating = (input) => {
  let length = input[0].length;
  for (let i = 0; i < length; i++) {
    let mostCommon = findMostCommonBitInPosition(input, i);
    input = input.filter(x => x.charAt(i) === mostCommon);

    if (input.length === 1) {
      return input[0];
    }
  }
}

const calculateCO2Rating = (input) => {
  let length = input[0].length;
  for (let i = 0; i < length; i++) {
    let mostCommon = findLeastCommonBitInPosition(input, i);
    input = input.filter(x => x.charAt(i) === mostCommon);

    if (input.length === 1) {
      return input[0];
    }
  }
}

const findMostCommonBitInPosition = (input, pos) => {
  let zero = 0;
  let one = 0;
  for (let j = 0; j < input.length; j++) {
    if (input[j].charAt(pos) === '1') {
      one++
    } else {
      zero++;
    }
  }

  return one >= zero ? '1' : '0';
}

const findLeastCommonBitInPosition = (input, pos) => {
  let zero = 0;
  let one = 0;
  for (let j = 0; j < input.length; j++) {
    if (input[j].charAt(pos) === '1') {
      one++
    } else {
      zero++;
    }
  }

  return zero <= one ? '0' : '1';
}

exports.run = function () {
  let input = utils.getInput('2021', 'day03', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
