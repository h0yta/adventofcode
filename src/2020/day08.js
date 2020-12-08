const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let instructions = parseInstructions(input);
  return runInstructions(instructions).acc;
}

const secondStar = function (input) {
  let cursor = 0;
  while (cursor <= input.length) {
    let instructions = updateInstruction(parseInstructions(input), cursor);

    let result = runInstructions(instructions);
    if (result.offset === instructions.length) {
      return result.acc;
    }
    cursor++;
  }
}

const runInstructions = function (instructions) {
  let executedOffsets = new Array();
  let accumulator = 0;
  let offset = 0;

  while (true) {
    if (executedOffsets.includes(offset) || offset >= instructions.length) {
      break;
    }

    executedOffsets.push(offset)
    let nextInstruction = instructions[offset];
    nextInstruction.operation
    switch (nextInstruction.operation) {
      case 'nop':
        offset++;
        break;
      case 'acc':
        accumulator += nextInstruction.argument;
        offset++;
        break;
      case 'jmp':
        offset += nextInstruction.argument;
        break;
    }
  }

  return { 'acc': accumulator, 'offset': offset };
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

const parseInstructions = function (instructions) {
  return instructions.map(parseInstruction);
}

const parseInstruction = function (instruction) {
  let instrRegex = /^(\w\w\w)\s(.\d+)/;
  let match = instrRegex.exec(instruction);
  if (match === null) {
    console.log('Found no match for', rule);
  } else {
    return {
      "operation": match[1].trim(),
      "argument": parseInt(match[2].trim())
    }
  }
}

exports.run = function () {
  let input = utils.getInput('2020', 'day08', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
