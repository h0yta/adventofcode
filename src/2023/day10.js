const utils = require('../util/fileUtil');

const firstStar = (input) => {
  input = input
    .map(row => row.split(''));
  let mappedInput = transformToPipes(input);

  return traverse(mappedInput.pipes, mappedInput.start, { y: -10, x: -10 })
    / 2;
}

const traverse = (pipes, start, last) => {
  let depth = 0;
  while (pipes[start.y][start.x].type != 'S' || depth === 0) {
    depth++;
    let alt = pipes[start.y][start.x].directions
      .filter(dir => dir.y !== last.y || dir.x !== last.x)
      .pop();

    last = start;
    start = alt;
  }
  return depth;
}

const secondStar = (input) => {
  input = input
    .map(row => row.split(''));
  let mappedInput = transformToPipes(input);
  let output = createOutput(mappedInput.pipes, mappedInput.start, { y: -10, x: -10 });

  for (let y = 0; y < output.length; y++) {
    let row = output[y].join('');
    let no = row.match(/^0+/);
    row = row.replace(/^0+/, new Array(no).fill(' ').join(''));
    no = row.match(/0+$/);
    row = row.replace(/0+$/, new Array(no).fill(' ').join(''));
    console.log(row)
  }
}

const createOutput = (pipes, start, last) => {
  let depth = 0;
  let output = Array(pipes.length + 1)
    .fill(0)
    .map(() => Array(pipes[0].length + 1).fill(0));

  while (pipes[start.y][start.x].type != 'S' || depth === 0) {
    depth++;
    output[start.y][start.x] = pipes[start.y][start.x].type !== '|' && pipes[start.y][start.x].type !== '-' ? 'X' : pipes[start.y][start.x].type;
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
  // | is a vertical pipe connecting north and south.
  // - is a horizontal pipe connecting east and west.
  // L is a 90-degree bend connecting north and east.
  // J is a 90-degree bend connecting north and west.
  // 7 is a 90-degree bend connecting south and west.
  // F is a 90-degree bend connecting south and east.
  // . is ground; there is no pipe in this tile.
  // S is the starting position of the animal; there is a pipe on this tile, but your sketch doesn't show what shape the pipe has.
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

const connectToPos = (pipe, pos) => {

}

exports.run = () => {
  let input = utils.getInput('2023', 'day10', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
