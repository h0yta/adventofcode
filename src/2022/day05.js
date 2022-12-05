const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let stacks = getStacks(input);
  let instructions = getInstructions(input);

  for (let inst = 0; inst < instructions.length; inst++) {
    let instruction = instructions[inst];
    for (let crateNo = 1; crateNo <= instruction['no']; crateNo++) {
      let crate = stacks[instruction['from']].pop();
      stacks[instruction['to']].push(crate);
    }
  }

  return Object.values(stacks)
    .map(stack => stack.pop())
    .join('');
}

const secondStar = (input) => {
  let stacks = getStacks(input);
  let instructions = getInstructions(input);

  for (let inst = 0; inst < instructions.length; inst++) {
    let instruction = instructions[inst];
    let crates = stacks[instruction['from']].slice(-1 * instruction['no']);
    stacks[instruction['from']].splice(stacks[instruction['from']].length - instruction['no'], instruction['no']);
    stacks[instruction['to']] = stacks[instruction['to']].concat(crates);
  }

  return Object.values(stacks)
    .map(stack => stack.pop())
    .join('');
}

const getStacks = (input) => {
  let stacks = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i + 1].trim() === '') {
      break;
    }

    let hej = input[i].split('');
    for (let j = 1; j < hej.length; j += 4) {
      if (hej[j].trim() != '') {
        let stack = Math.ceil(j / 4);
        if (stacks[stack]) {
          stacks[stack].splice(0, 0, hej[j].trim())
        } else {
          stacks[stack] = new Array();
          stacks[stack].push(hej[j].trim())
        }
      }
    }
  }

  return stacks;
}

const getInstructions = (input) => {
  let instructions = new Array();
  let skip = true;
  for (let i = 0; i < input.length; i++) {
    if (!skip) {
      // move 1 from 2 to 1
      let hej = input[i].split(' ');
      instructions.push({
        'no': parseInt(hej[1]),
        'from': hej[3],
        'to': hej[5]
      })
    }

    if (input[i].trim() === '') {
      skip = false;
      continue;
    }
  }

  return instructions;
}

exports.run = () => {
  let input = utils.getInput('2022', 'day05', '\r\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
