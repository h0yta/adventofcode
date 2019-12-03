const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let x = 0;
  let y = 0;
  let path = new Array();
  let instructions = input[0].split(",");
  instructions.map(instruction => {
    let direction = instruction.substring(0, 1);
    let distance = instruction.substring(1, instruction.length);

    for (i = 0; i < distance; i++) {
      switch (direction) {
        case 'R':
          x++;
          break;
        case 'U':
          y++;
          break;
        case 'L':
          x--;
          break;
        case 'D':
          y--;
          break;
      }

      path[createPositionKey(x, y)] = true;
    }
  });

  x = 0;
  y = 0;
  let encounters = new Array();
  instructions = input[1].split(",");
  instructions.map(instruction => {
    let direction = instruction.substring(0, 1);
    let distance = instruction.substring(1, instruction.length);

    for (i = 0; i < distance; i++) {
      switch (direction) {
        case 'R':
          x++;
          break;
        case 'U':
          y++;
          break;
        case 'L':
          x--;
          break;
        case 'D':
          y--;
          break;
      }

      if (path[createPositionKey(x, y)]) {
        let distanceFromOrigo = Math.abs(x) + Math.abs(y);
        encounters.push(distanceFromOrigo);
      }
    }
  });

  return Math.min(...encounters);
}

const secondStar = function (input) {
  let x = 0;
  let y = 0;
  let step = 0;
  let path = new Array();
  let instructions = input[0].split(",");
  instructions.map(instruction => {
    let direction = instruction.substring(0, 1);
    let distance = instruction.substring(1, instruction.length);

    for (i = 0; i < distance; i++) {
      step++;
      switch (direction) {
        case 'R':
          x++;
          break;
        case 'U':
          y++;
          break;
        case 'L':
          x--;
          break;
        case 'D':
          y--;
          break;
      }

      path[createPositionKey(x, y)] = step;
    }
  });

  x = 0;
  y = 0;
  step = 0;
  let steps = new Array();
  instructions = input[1].split(",");
  instructions.map(instruction => {
    let direction = instruction.substring(0, 1);
    let distance = instruction.substring(1, instruction.length);

    for (i = 0; i < distance; i++) {
      step++;
      switch (direction) {
        case 'R':
          x++;
          break;
        case 'U':
          y++;
          break;
        case 'L':
          x--;
          break;
        case 'D':
          y--;
          break;
      }

      if (path[createPositionKey(x, y)]) {
        let myStep = path[createPositionKey(x, y)] + step;
        steps.push(myStep);
      }
    }
  });

  return Math.min(...steps);
}

const createPositionKey = (x, y) => {
  return x + '#' + y;
}

exports.run = function () {
  let input = utils.getInput('2019', 'day03', '\n');

  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;