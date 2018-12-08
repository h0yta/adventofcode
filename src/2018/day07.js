const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let instructions = input.map(parseInput);
  return createString(instructions);
}

const createString = function (instructions) {
  if (instructions.length === 1) {
    return instructions[0].step + instructions[0].beforeStep;
  }

  let leftSteps = [];
  for (let i = 0; i < instructions.length; i++) {
    leftSteps.push(instructions[i].step);
  }

  let rightSteps = [];
  for (let i = 0; i < instructions.length; i++) {
    rightSteps.push(instructions[i].beforeStep);
  }

  let startPoints = leftSteps
    .filter(step => !rightSteps.includes(step))
    .filter((v, i, a) => a.indexOf(v) == i)
    .sort();

  return startPoints[0] + createString(instructions.filter(step => step.step !== startPoints[0]));
}

let workers;
let stepDuration;
const secondStar = function (input) {
  workers = (process.env.NODE_ENV === 'test' ? 1 : 5);
  stepDuration = (process.env.NODE_ENV === 'test' ? 0 : 60);

  return 0;
}

const parseInput = function (row) {
  return {
    'step': row.split(' ')[1].trim(),
    'beforeStep': row.split(' ')[7].trim()
  }
}

const points = function (s) {
  return s.charCodeAt(0) - 64 + stepDuration;
}

exports.run = function () {
  let input = utils.getInput('2018', 'day07', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;