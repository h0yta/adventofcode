const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let result = input
    .map(row => calculateScore(row))
    .reduce((a, b) => a + b);

  return result;
}

const secondStar = (input) => {
  let result = input
    .map(row => calculateSneakyScore(row))
    .reduce((a, b) => a + b);

  return result;
}

const calculateScore = (row) => {
  let [opponent, player] = row.split(' ');
  return calculateSignScore(player) + calculateGameScore(opponent, player);
}

const calculateSneakyScore = (row) => {
  let [opponent, outcome] = row.split(' ');
  let player = calculateSign(opponent, outcome);
  return calculateSignScore(player) + calculateGameScore(opponent, player);
}

const calculateSignScore = (sign) => {
  switch (sign) {
    case 'A': return 1;
    case 'X': return 1;
    case 'B': return 2;
    case 'Y': return 2;
    case 'C': return 3;
    case 'Z': return 3;
  }
}

const calculateGameScore = (opponent, player) => {
  switch (opponent + player) {
    case 'AX': return 3;
    case 'AY': return 6;
    case 'AZ': return 0;
    case 'BX': return 0;
    case 'BY': return 3;
    case 'BZ': return 6;
    case 'CX': return 6;
    case 'CY': return 0;
    case 'CZ': return 3;
  }
}

const calculateSign = (opponent, outcome) => {
  switch (opponent + outcome) {
    case 'AX': return 'Z';
    case 'AY': return 'X';
    case 'AZ': return 'Y';
    case 'BX': return 'X';
    case 'BY': return 'Y';
    case 'BZ': return 'Z';
    case 'CX': return 'Y';
    case 'CY': return 'Z';
    case 'CZ': return 'X';
  }
}

exports.run = () => {
  let input = utils.getInput('2022', 'day02', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
