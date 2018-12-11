const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let grid = Array(300)
    .fill(0)
    .map(() => Array(300).fill(0));

  for (let x = 0; x < 300; x++) {
    for (let y = 0; y < 300; y++) {
      grid[y][x] = calculateFuelLevel(x, y, input);
    }
  }

  let result = {
    'x': 0,
    'y': 0,
    'level': 0
  };
  for (let x = 0; x < 300 - 3; x++) {
    for (let y = 0; y < 300 - 3; y++) {
      let level = calculateGridLevel(grid, x, y);
      if (level > result.level) {
        result.x = x;
        result.y = y;
        result.level = level;
      }
    }
  }

  console.log(result);

}

const calculateFuelLevel = function (x, y, serial) {
  let rackId = x + 10;
  return Math.floor(((rackId * y + serial) * rackId) / 100 % 10) - 5;
}

const calculateGridLevel = function (grid, xStart, yStart) {
  let sum = 0;
  for (let x = xStart; x < xStart + 3; x++) {
    for (let y = yStart; y < yStart + 3; y++) {
      sum += grid[y][x];
    }
  }
  return sum;
}

const secondStar = function (input) {
  return 0;
}

exports.run = function () {
  let input = utils.getInput('2018', 'day11', '\n');
  console.log('Answer for first star', firstStar(input[0]));
  console.log('Answer for second star', secondStar(input[0]));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
exports.calculateFuelLevel = calculateFuelLevel;