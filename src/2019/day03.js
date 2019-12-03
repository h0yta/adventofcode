const utils = require('../util/fileUtil');

let x;
let y;
let path = new Array();
let encounters = new Array();
const firstStar = function (input) {
  path = new Array();
  input.forEach(wire => {
    x = 0;
    y = 0;
    encounters = new Array();
    let instructions = wire.split(",");
    instructions.forEach(instruction => {
      movePosition(instruction);
    });
  });

  return Math.min(...encounters)
}

const secondStar = function (input) {
  return 0;
}

const movePosition = (instruction) => {
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

    let key = createPositionKey(x, y);
    if (path.includes(key)) {
      
      let distanceFromOrigo = Math.abs(x) + Math.abs(y);
      encounters.push(distanceFromOrigo);
    } else {
      path.push(key);
    }
  }
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