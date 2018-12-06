const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let cords = parseInput(input);
  let max = Math.max(...cords.map(c => (c.x > c.y ? c.x : c.y)));
  let grid = Array(max+1)
    .fill('.')
    .map(() => Array(max+1).fill('.'));
  let infiniteAreas = new Set();

  for (let x = 0; x <= max; x++) {
    for (let y = 0; y <= max; y++) {
      let distances = cords.map(cord => distance(cord.x, cord.y, x, y));
      let shortest = Math.min(...distances);

      if (distances.filter(dist => dist === shortest).length === 1) {
        let area = distances.indexOf(shortest);
        grid[y][x] = area;

        if (x === 0 || x === max || y === 0 || y === max) {
          infiniteAreas.add(area);
        }
      }
    }
  }

  let areaSizes = Array(cords.length).fill(0)
  for (let x = 0; x < max; x++) {
    for (let y = 0; y < max; y++) {
      let point = grid[y][x];
      if (!infiniteAreas.has(point)) {
        areaSizes[point]++
      }
    }
  }

  return Math.max(...areaSizes);
}

const allowedDistance = (process.env.NODE_ENV === 'test' ? 32 : 10000);
const secondStar = function (input) {
  let cords = parseInput(input);
  let max = Math.max(...cords.map(c => (c.x > c.y ? c.x : c.y)));
  
  let allowedAreas = 0;
  for (let x = 0; x <= max; x++) {
    for (let y = 0; y <= max; y++) {
      let distances = cords.map(cord => distance(cord.x, cord.y, x, y));
      let total = distances.reduce((p, c) => p + c, 0);

      if(total < allowedDistance) {
        allowedAreas++;
      }
    }
  }

  return allowedAreas;
}

const parseInput = function (input) {
  return input.map(row => {
    return {
      'x': parseInt(row.split(',')[0].trim()),
      'y': parseInt(row.split(',')[1].trim())
    }
  })
}

const distance = function (x1, y1, x2, y2) {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

exports.run = function () {
  let input = utils.getInput('2018', 'day06', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;