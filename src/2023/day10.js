const utils = require('../util/fileUtil');

const firstStar = (input) => {
  input = input
    .map(row => row.split(''));
  let mappedInput = transformToPipes(input);

  return findPipesLength(mappedInput.pipes, mappedInput.start, { y: -10, x: -10 })
    / 2;
}

const findPipesLength = (pipes, start, last) => {
  let length = 0;
  while (pipes[start.y][start.x].type != 'S' || length === 0) {
    length++;
    let alt = pipes[start.y][start.x].directions
      .filter(dir => dir.y !== last.y || dir.x !== last.x)
      .pop();

    last = start;
    start = alt;
  }
  return length;
}

const secondStar = (input) => {
  input = input
    .map(row => row.split(''));
  let mappedInput = transformToPipes(input);
  let map = createPipeMap(mappedInput.pipes, mappedInput.start, { y: -10, x: -10 });

  for (let y = 0; y < map.length; y++) {
    let hits = 0;
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === '|' || map[y][x] === 'L' || map[y][x] === 'J') {
        hits++;
      }

      if (hits % 2 === 1 && map[y][x] === '.') {
        map[y][x] = '*';
      }
    }
  }

  return map
    .map(row => row.filter(col => col === '*').length)
    .reduce((a, b) => a + b);
}

const createPipeMap = (pipes, start, last) => {
  let depth = 0;
  let output = Array(pipes.length + 1)
    .fill('.')
    .map(() => Array(pipes[0].length + 1).fill('.'));

  while (pipes[start.y][start.x].type != 'S' || depth === 0) {
    depth++;
    output[start.y][start.x] = pipes[start.y][start.x].type;
    let alt = pipes[start.y][start.x].directions
      .filter(dir => dir.y !== last.y || dir.x !== last.x)
      .pop();

    last = start;
    start = alt;
  }
  return output;
}

const transformToPipes = (input) => {
  let pipes = [];
  for (let y = 0; y < input.length; y++) {
    let pipeRow = [];
    pipes[y] = pipeRow;
    for (let x = 0; x < input[y].length; x++) {
      let pipe = { y, x };
      pipe.type = input[y][x];
      pipe.directions = getDirections(y, x, input[y][x]);
      pipeRow[x] = pipe;
    }
  }
  return setStartPossibilities(pipes);
}

const getDirections = (y, x, type) => {
  if (type === '|') {
    return [{ y: y - 1, x }, { y: y + 1, x }];
  } else if (type === '-') {
    return [{ y, x: x - 1 }, { y, x: x + 1 }];
  } else if (type === 'L') {
    return [{ y: y - 1, x }, { y, x: x + 1 }];
  } else if (type === 'J') {
    return [{ y: y - 1, x }, { y, x: x - 1 }];
  } else if (type === '7') {
    return [{ y: y + 1, x }, { y, x: x - 1 }];
  } else if (type === 'F') {
    return [{ y: y + 1, x }, { y, x: x + 1 }];
  } else {
    return [];
  }
}

const setStartPossibilities = (pipes) => {
  let start = findStartPos(pipes);
  let dirs = pipes
    .flatMap(pipe => pipe)
    .filter(pipe => pipe.directions.some(dir => dir.y === start.y && dir.x === start.x))
    .map(pipe => { return { y: pipe.y, x: pipe.x } });
  pipes[start.y][start.x].directions = dirs;
  return { start, pipes };
}

const findStartPos = (pipes) => {
  return pipes
    .flatMap(pipe => pipe)
    .filter(pipe => pipe.type === 'S')
    .pop();
}

exports.run = () => {
  let input = utils.getInput('2023', 'day10', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
