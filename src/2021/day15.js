const utils = require('../util/fileUtil');

const possibleDirections = [[1, 0], [0, 1], [-1, 0], [0, -1]];

const firstStar = (input) => {
  input = input.map(row => row.split('').map(x => parseInt(x)));
  return traverseQueue(input);
}

const secondStar = (input) => {
  input = input.map(row => row.split('').map(x => parseInt(x)));
  input = multiplyInput(input);
  return traverseQueue(input);
}

const secondStarWithoutMultiply = (input) => {
  input = input.map(row => row.split('').map(x => parseInt(x)));

  return traverseQueue(input);
}

const traverseQueue = (input) => {
  let queue = [{ pos: [0, 0], cost: 0 }];
  const visited = new Set();
  while (queue.length) {
    const {
      pos: [y, x],
      cost,
    } = queue.shift();

    if (y === input.length - 1 && x === input[0].length - 1) {
      return cost
    };

    possibleDirections.map(([dy, dx]) => [dy + y, dx + x])
      .filter(([y, x]) => input[y]?.[x])
      .filter(pos => !visited.has(pos.join(';')))
      .forEach(pos => {
        visited.add(pos.join(';'));
        queue.push({ pos, cost: cost + input[pos[0]][pos[1]] });
      });
    queue.sort((a, b) => a.cost - b.cost);
  }
}

const multiplyInput = (input) => {
  let multipliedInput = new Array(input.length * 5)
    .fill(0)
    .map(() => new Array(input[0].length * 5));

  for (let y = 0; y < multipliedInput.length; y++) {
    for (let x = 0; x < multipliedInput[0].length; x++) {
      let multiplier = Math.floor(y / input.length) + Math.floor(x / input[0].length);
      let risk = input[(y % input.length)][(x % input[0].length)] + multiplier;
      risk = risk >= 10 ? risk - 9 : risk;
      multipliedInput[y][x] = risk;
    }
  }

  return multipliedInput;
}

exports.run = () => {
  let input = utils.getInput('2021', 'day15', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
