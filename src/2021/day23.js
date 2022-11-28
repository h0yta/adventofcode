const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let house = constructHouse(input);
  house.forEach(row => console.log(row.join('')));
  return 0;
}

const secondStar = (input) => {
  return 0;
}

const constructHouse = (input) => {
  return input.map(row => row.split(''));
}

exports.run = () => {
  let input = utils.getInput('2021', 'day23', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
