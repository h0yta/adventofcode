const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let x = 0;
  let y = 0;
  let dir = 0;
  for (let turn = 0; turn < input.length; turn++) {
    let move = parseInstruction(input[turn]);
    if (move.dir === 'R') {
      dir++;
      dir = dir < 4 ? dir : dir - 4;
    } else {
      dir--;
      dir = dir > -1 ? dir : dir + 4;
    }

    if (dir === 0) {
      y += move.dist;
    } else if (dir === 1) {
      x += move.dist;
    } else if (dir === 2) {
      y -= move.dist;
    } else if (dir === 3) {
      x -= move.dist;
    }
  }

  return calculateDistance(x, y);
}

const secondStar = function (input) {
  let x = 0;
  let y = 0;
  let dir = 0;
  let visited = [];
  for (let turn = 0; turn < input.length; turn++) {
    let move = parseInstruction(input[turn]);
    if (move.dir === 'R') {
      dir++;
      dir = dir < 4 ? dir : dir - 4;
    } else {
      dir--;
      dir = dir > -1 ? dir : dir + 4;
    }

    for (let step = 1; step <= move.dist; step++) {
      if (dir === 0) {
        y++;;
      } else if (dir === 1) {
        x++;
      } else if (dir === 2) {
        y--;
      } else if (dir === 3) {
        x--;
      }

      if (visited.includes(createPos(x, y))) {
        return calculateDistance(x, y);
      }

      visited.push(createPos(x, y));
    }
  }
}

const parseInstruction = function (instruction) {
  let instrRegex = /^(\w)(\d+)/;
  let match = instrRegex.exec(instruction.trim());
  if (match === null) {
    console.log('Found no match for', instruction);
  } else {
    return {
      "dir": match[1].trim(),
      "dist": parseInt(match[2].trim())
    }
  }
}

const createPos = (x, y) => {
  return 'x' + x + 'y' + y;
}

const calculateDistance = (x, y) => {
  x = x >= 0 ? x : x * -1;
  y = y >= 0 ? y : y * -1;

  return x + y;
}

exports.run = function () {
  let input = utils.getInput('2016', 'day01', ',');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
