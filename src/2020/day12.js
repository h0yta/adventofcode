const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let pos = { 'x': 0, 'y': 0 };
  let dir = 90;

  let instructions = input.map(parseInput);

  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i];

    switch (instruction.direction) {
      case "N":
      case 'E':
      case 'S':
      case 'W':
        moveByInstruction(pos, instruction);
        break;
      case "L":
        dir = (dir - instruction.value) % 360;
        dir = (dir < 0 ? dir + 360 : dir)
        break;
      case "R":
        dir = (dir + instruction.value) % 360;
        break;
      case "F":
        moveByDirection(pos, dir, instruction.value);
        break;
    }
  }

  let distance = (pos.x < 0 ? pos.x * -1 : pos.x) + (pos.y < 0 ? pos.y * -1 : pos.y);
  return distance;
}

const secondStar = function (input) {
  let pos = { 'x': 0, 'y': 0 };
  let wp = { 'x': 10, 'y': 1 };

  let instructions = input.map(parseInput);

  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i];

    switch (instruction.direction) {
      case "N":
      case 'E':
      case 'S':
      case 'W':
        moveByInstruction(wp, instruction);
        break;
      case "L":
        switch (instruction.value) {
          case 90:
            turnLeft(wp.x, wp.y, wp);
            break;
          case 180:
            turnRight(wp.x, wp.y, wp);
            turnRight(wp.x, wp.y, wp);
            break;
          case 270:
            turnRight(wp.x, wp.y, wp);
            break;
        }
        break;
      case "R":
        switch (instruction.value) {
          case 90:
            turnRight(wp.x, wp.y, wp);
            break;
          case 180:
            turnLeft(wp.x, wp.y, wp);
            turnLeft(wp.x, wp.y, wp);
            break;
          case 270:
            turnLeft(wp.x, wp.y, wp);
            break;
        }
        break;
      case "F":
        moveTowardsWaypoint(pos, wp, instruction.value);
        break;
    }
  }

  let distance = (pos.x < 0 ? pos.x * -1 : pos.x) + (pos.y < 0 ? pos.y * -1 : pos.y);
  return distance;
}

const moveByInstruction = (pos, instruction) => {
  switch (instruction.direction) {
    case "N":
      pos.y += instruction.value;
      break;
    case "E":
      pos.x += instruction.value;
      break;
    case "S":
      pos.y -= instruction.value;
      break;
    case "W":
      pos.x -= instruction.value;
  }
}

const moveByDirection = (pos, direction, value) => {
  switch (direction) {
    case 0:
      pos.y += value;
      break;
    case 90:
      pos.x += value;
      break;
    case 180:
      pos.y -= value;
      break;
    case 270:
      pos.x -= value;
  }
}

const moveTowardsWaypoint = (pos, wp, value) => {
  pos.x += wp.x * value;
  pos.y += wp.y * value;
}

const turnRight = (oldX, oldY, wp) => {
  wp.x = oldY;
  wp.y = oldX * -1;
}

const turnLeft = (oldX, oldY, wp) => {
  wp.x = oldY * -1;
  wp.y = oldX;
}

const parseInput = (instruction) => {
  let instrRegex = /^(\w)(\d+)/;
  let match = instrRegex.exec(instruction);
  if (match === null) {
    console.log('Found no match for', rule);
  } else {
    return {
      "direction": match[1].trim(),
      "value": parseInt(match[2].trim())
    }
  }
}

exports.run = function () {
  let input = utils.getInput('2020', 'day12', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
