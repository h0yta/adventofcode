const utils = require('../util/fileUtil');

const firstStar = (input) => {
  input = input.map(row => parseRow(row));
  let lowpoints = new Array();
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      if (isLowpoint(input, x, y)) {
        lowpoints.push(input[y][x].value);
      }
    }
  }
  return lowpoints
    .reduce((acc, cur) => acc += (cur + 1), 0);
}

const secondStar = (input) => {
  input = input.map(row => parseRow(row));
  let basinSizes = new Array();
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      if (isLowpoint(input, x, y)) {
        let basinSize = findBasinSize(input, x, y);
        basinSizes.push(basinSize);
      }
    }
  }

  basinSizes.sort((a, b) => b - a);
  return basinSizes[0] * basinSizes[1] * basinSizes[2];
}

const isLowpoint = (input, x, y) => {
  if (y > 0 && input[y - 1][x].value <= input[y][x].value) {
    return false;
  } else if (y < input.length - 1 && input[y + 1][x].value <= input[y][x].value) {
    return false;
  } else if (x > 0 && input[y][x - 1].value <= input[y][x].value) {
    return false;
  } else if (x < input[y].length - 1 && input[y][x + 1].value <= input[y][x].value) {
    return false;
  }

  return true;
}

const findBasinSize = (input, x, y) => {
  if (input[y][x].value === 9 || input[y][x].basin) {
    return 0;
  }

  let basinSize = 1;
  input[y][x].basin = true;
  if (y > 0 && input[y - 1][x].value > input[y][x].value) {
    basinSize += findBasinSize(input, x, (y - 1));
  }

  if (y < input.length - 1 && input[y + 1][x].value > input[y][x].value) {
    basinSize += findBasinSize(input, x, (y + 1));;
  }

  if (x > 0 && input[y][x - 1].value > input[y][x].value) {
    basinSize += findBasinSize(input, (x - 1), y);
  }

  if (x < input[y].length - 1 && input[y][x + 1].value > input[y][x].value) {
    basinSize += findBasinSize(input, (x + 1), y);
  }

  return basinSize;
}

const parseRow = (row) => {
  return row.split('').map(x => {
    return {
      value: parseInt(x),
      basin: false
    }
  });
}

exports.run = () => {
  let input = utils.getInput('2021', 'day09', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
