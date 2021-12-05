const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let lines = input.map(parseInput)
    .filter(line => line.x1 === line.x2 || line.y1 === line.y2);
  let grid = createGrid(lines);
  return grid.flatMap(x => x.filter(y => y >= 2)).length;
}

const secondStar = function (input) {
  let lines = input.map(parseInput);
  let grid = createGrid(lines);
  return grid.flatMap(x => x.filter(y => y >= 2)).length;
}

const createGrid = (lines) => {
  let bounderies = getBounderies(lines);
  let grid = Array(bounderies.y).fill().map(() => Array(bounderies.x).fill(0));

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let y = line.y1;
    let x = line.x1

    let distance = getDistance(line);
    for (let counter = 0; counter <= distance; counter++) {
      grid[y][x]++;

      if (line.y1 < line.y2) y++
      else if (line.y1 > line.y2) y--

      if (line.x1 < line.x2) x++
      else if (line.x1 > line.x2) x--;
    }
  }

  return grid;
}

const getBounderies = (lines) => {
  let yMax = Math.max(...lines
    .map(line => Math.max(line.y1, line.y2))) + 1;
  let xMax = Math.max(...lines
    .map(line => Math.max(line.y1, line.y2))) + 1;

  return { x: xMax, y: yMax }
}

const getDistance = (line) => {
  return Math.max(
    Math.abs(line.y2 - line.y1),
    Math.abs(line.x2 - line.x1));
}

const parseInput = (input) => {
  // 873,173 -> 206,840
  let point = input.split('->').map(pair => {
    let splirPair = pair.trim().split(',');
    return {
      x: parseInt(splirPair[0]),
      y: parseInt(splirPair[1])
    }
  });

  return {
    x1: point[0].x,
    y1: point[0].y,
    x2: point[1].x,
    y2: point[1].y
  }
}

exports.run = function () {
  let input = utils.getInput('2021', 'day05', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
