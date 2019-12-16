const utils = require('../util/fileUtil');

const firstStar = function (input, width, height) {
  let answer;
  let minZeros = 10000;

  for (layer = 1; true; layer++) {
    let start = (width * height) * (layer - 1);
    let end = (width * height) * layer;
    if (end > input.length) {
      return answer;
    }

    let grid = input.slice(start, end);
    let zeros = grid.filter(x => x === 0).length;
    if (zeros < minZeros) {
      answer = grid.filter(x => x === 1).length * grid.filter(x => x === 2).length;
      minZeros = zeros;
    }
  }
}

const secondStar = function (input, width, height) {
  let image = new Array(width * height);
  image.fill(2, 0, width * height);
  for (layer = 1; true; layer++) {
    let start = (width * height) * (layer - 1);
    let end = (width * height) * layer;
    if (end > input.length) {
      break;
    }

    let grid = input.slice(start, end);

    for (index = 0; index <= grid.length; index++) {
      if (grid[index] != 2 && image[index] === 2) {
        image[index] = grid[index];
      }
    }
  }

  printImage(image, width);
  return 0;
}

const printImage = (image, width) => {
  for (layer = 1; true; layer++) {
    let start = width * (layer - 1);
    let end = width * layer;
    if (end > image.length) {
      return;
    }

    let row = image.slice(start, end)
      .map(x => {
        if (x === 1) {
          return '#';
        } else if (x === 0) {
          return ' ';
        } else {
          return x;
        }
      }).join('');

    console.log(row);
  }
}

exports.run = () => {
  let input = utils.getInput('2019', 'day08', '');

  console.log('Answer for first star', firstStar(input.map(x => parseInt(x)), 25, 6));
  console.log('Answer for second star', secondStar(input.map(x => parseInt(x)), 25, 6));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;