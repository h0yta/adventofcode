const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let max = Math.max(...input);

  let fuelConsumtions = [...Array(max).keys()]
    .map(pos => {
      return input
        .map(x => Math.abs(x - pos))
        .reduce((acc, cur) => acc += cur);
    });

  return Math.min(...fuelConsumtions);
}

const secondStar = (input) => {
  let max = Math.max(...input);

  let fuelConsumtions = [...Array(max).keys()]
    .map(pos => {
      return input
        .map(x => {
          let n = Math.abs(x - pos);
          return (n * (n + 1)) / 2;
        })
        .reduce((acc, cur) => acc += cur);
    });

  return Math.min(...fuelConsumtions);
}

const firstStarMath = (input) => {
  let median = input[Math.floor(input.length / 2)];
  return input.reduce((acc, curr) => acc + Math.abs(median - curr), 0);

}

const secondStarMath = (input) => {
  let mean = Math.floor(input.reduce((acc, curr) => acc + curr) / input.length);
  const tri = (n) => (n * (n + 1)) / 2;
  return input.reduce((acc, curr) => acc + tri(Math.abs(mean - curr)));
}

exports.run = () => {
  let input = utils.getInput('2021', 'day07', ',')
    .map(x => parseInt(x))
    .sort((a, b) => a - b);
  console.log('Answer for first star', firstStarMath(input));
  console.log('Answer for second star', secondStarMath(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
