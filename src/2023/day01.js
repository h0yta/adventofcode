const utils = require('../util/fileUtil');

const firstStar = (input) => {
  return input.map(row => {
    let numbers = row.match(/\d/g);
    return parseInt(numbers[0] + numbers[numbers.length - 1]);
  }).reduce((a, b) => a + b);
}

const secondStar = (input) => {
  return input.map(row => {
    let numbers = replaceDigits(row)
      .match(/\d/g);
    return parseInt(numbers[0] + numbers[numbers.length - 1]);
  }).reduce((a, b) => a + b);
}

const wordToNumber = {
  one: "one1one",
  two: "two2two",
  three: "three3three",
  four: "four4four",
  five: "five5five",
  six: "six6six",
  seven: "seven7seven",
  eight: "eight8eight",
  nine: "nine9nine"
}

const replaceDigits = (row) => {
  Object.keys(wordToNumber).forEach(num => {
    row = row.replaceAll(num, wordToNumber[num]);
  });

  return row;
}

exports.run = () => {
  let input = utils.getInput('2023', 'day01', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
