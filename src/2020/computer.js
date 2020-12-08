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

const parseInstructions = function (instructions) {
  return instructions.map(parseInstruction);
}

const parseInstruction = function (instruction) {
  let instrRegex = /^(nop|acc|jmp)\s([+-]\d+)/;
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

exports.parse = parseInstructions;
exports.run = runInstructions;
