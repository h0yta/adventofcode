const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let result = run(input, 3);
  return result.x + ',' + result.y
}

const secondStar = function (input) {
  let result = {
    'level': 0
  };
  for (let size = 1; size <= 300; size++) {
    console.log(size + '/300');
    let roundResult = run(input, size);
    if (roundResult.level > result.level) {
      result = roundResult;
    }
  }

  return result.x + ',' + result.y + ',' + result.size;
}

const run = function (input, size) {
  let grid = Array(301)
    .fill(0)
    .map(() => Array(301).fill(0));

  for (let y = 1; y <= 300; y++) {
    for (let x = 1; x <= 300; x++) {
      grid[x][y] = calculateFuelLevel(y, x, input);
    }
  }

  let result = {
    'x': 0,
    'y': 0,
    'level': 0
  };

  for (let y = 1; y <= (300 - size); y++) {
    for (let x = 1; x <= (300 - size); x++) {
      let level = calculateGridLevel(grid, x, y, size);
      if (level > result.level) {
        result.x = y;
        result.y = x;
        result.level = level;
        result.size = size;
      }
    }
  }

  return result;
}

const calculateFuelLevel = function (x, y, serial) {
  let rackId = x + 10;
  return Math.floor(((rackId * y + serial) * rackId) / 100 % 10) - 5;
}

const calculateGridLevel = function (grid, xStart, yStart, size) {
  let sum = 0;
  for (let y = yStart; y < (yStart + size); y++) {
    for (let x = xStart; x < (xStart + size); x++) {
      sum += grid[x][y];
    }
  }
  return sum;
}

exports.run = function () {
  let input = utils.getInput('2018', 'day11', '\n');
  console.log('Answer for first star', firstStar(4455));
  console.log('Answer for second star', secondStar(4455));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
exports.calculateFuelLevel = calculateFuelLevel;
exports.calculateGridLevel = calculateGridLevel;