const utils = require('../util/fileUtil');

const firstStar = (input) => {
  input = parseInput(input);

  return solve('AAA', 'ZZZ', input.instructions, input.maps);
}

const secondStar = (input) => {
  input = parseInput(input);
  let starts = Object.keys(input.maps)
    .filter(map => map.endsWith('A'));

  return starts
    .map(start => solve(start, '..Z', input.instructions, input.maps))
    .reduce(lcm)
}

const solve = (start, end, instructions, maps) => {
  let turn = 0;
  let current = start;
  let finish = new RegExp(end);
  let max = Object.values(instructions).length;

  while (true) {
    let next = turn % max;

    if (instructions[next] === 'R') {
      current = maps[current].right;
    } else {
      current = maps[current].left;
    }

    turn++;
    if (current.match(finish)) return turn;
  }
}

const gcd = (a, b) => a ? gcd(b % a, a) : b;
const lcm = (a, b) => a * b / gcd(a, b);

const parseInput = (input) => {
  let instructions = input[0].split('');
  let maps = {};
  for (let row = 2; row < input.length; row++) {
    // GXT = (MQM, CHN)
    let rowRegex = /^(\w+) = \((\w+), (\w+)\)$/;
    let match = rowRegex.exec(input[row].trim());
    maps[match[1].trim()] = {
      left: match[2].trim(),
      right: match[3].trim(),
      count: 0
    }
  }

  return { instructions, maps }
}

exports.run = () => {
  let input = utils.getInput('2023', 'day08', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
