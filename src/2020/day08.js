const utils = require('../util/fileUtil');
const computer = require('./computer');

const firstStar = function (input) {
  let instructions = computer.parse(input);
  return computer.run(instructions).acc;
}

const secondStar = function (input) {
  let cursor = 0;
  let inputInstructions = computer.parse(input);
  while (cursor <= input.length) {
    let instructions = updateInstruction(utils.copy(inputInstructions), cursor);

    let result = computer.run(instructions);
    if (result.offset === instructions.length) {
      return result.acc;
    }
    cursor++;
  }
}

const updateInstruction = function (instructions, instructionToChange) {
  let currentInstruction = 0;
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].operation === 'nop' || instructions[i].operation === 'jmp') {
      if (currentInstruction === instructionToChange) {
        if (instructions[i].operation === 'nop') {
          instructions[i].operation = 'jmp';
        } else if (instructions[i].operation === 'jmp') {
          instructions[i].operation = 'nop';
        }
        break;
      } else {
        currentInstruction++;
      }
    }
  }
  return instructions;
}

exports.run = function () {
  let input = utils.getInput('2020', 'day08', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
