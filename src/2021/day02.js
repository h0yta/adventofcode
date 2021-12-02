const utils = require('../util/fileUtil');

const firstStar = function (input) {
  input = input.map(parseInput);
  let position = 0;
  let depth = 0;

  for (let i = 0; i < input.length; i++) {
    switch (input[i].dir) {
      case 'forward':
        position += input[i].dist;
        break;
      case 'down':
        depth += input[i].dist;
        break;
      case 'up':
        depth -= input[i].dist;
    }
  }

  return position * depth;
}

const secondStar = function (input) {
  input = input.map(parseInput);
  let position = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < input.length; i++) {
    switch (input[i].dir) {
      case 'forward':
        position += input[i].dist;
        depth += (aim * input[i].dist);
        break;
      case 'down':
        aim += input[i].dist;
        break;
      case 'up':
        aim -= input[i].dist;
    }
  }

  return position * depth;
}

const parseInput = (input) => {
  let parts = input.split(' ');
  return {
    'dir': parts[0],
    'dist': parseInt(parts[1])
  }
}

exports.run = function () {
  let input = utils.getInput('2021', 'day02', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
