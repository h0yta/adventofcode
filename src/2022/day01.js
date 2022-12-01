const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let calories = createCaloriesArray(input);
  return Math.max(...calories);
}

const secondStar = (input) => {
  let calories = createCaloriesArray(input);
  return calories.slice(0, 3)
    .reduce((a, b) => a + b);
}

const createCaloriesArray = (input) => {
  return input
    .join(';')
    .split(';;')
    .map(x => x.split(';')
      .map(cal => parseInt(cal))
      .reduce((a, b) => a + b)
    ).sort((a, b) => b - a);
}

exports.run = () => {
  let input = utils.getInput('2022', 'day01', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
