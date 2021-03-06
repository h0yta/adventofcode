const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input.map(mass => Math.floor(mass / 3) - 2)
    .reduce((prev, curr) => prev + curr);
}

const secondStar = function (input) {
  return input.map(calculateFuel)
    .reduce((prev, curr) => prev + curr);
}

const calculateFuel = (mass) => {
  let fuel = Math.floor(mass / 3) - 2;

  if (fuel <= 0) {
    return 0;
  }

  return fuel + calculateFuel(fuel);
}

exports.run = function () {
  let input = utils.getInput('2019', 'day01', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;