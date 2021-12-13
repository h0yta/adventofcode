const utils = require('../util/fileUtil');

const firstStar = (input) => {
  input = parseInput(input);
  input.dots = fold(input.dots, input.foldInstructions[0]);

  return input.dots.flatMap(row => row.filter(x => x === '#')).length;
}

const secondStar = (input) => {
  input = parseInput(input);
  for (let i = 0; i < input.foldInstructions.length; i++) {
    input.dots = fold(input.dots, input.foldInstructions[i]);
  }

  input.dots.forEach(row => console.log(row.join('')))
  return 'EBLUBRFH';
}

const fold = (dots, instruction) => {
  let yMax = instruction.dir === 'y' ? instruction.pos : dots.length;
  let xMax = instruction.dir === 'x' ? instruction.pos : dots[0].length;
  let foldedDots = new Array(yMax).fill(' ').map(x => new Array(xMax).fill(' '));

  for (let y = 0; y < dots.length; y++) {
    if (instruction.dir === 'y' && y === yMax) continue;
    for (let x = 0; x < dots[0].length; x++) {
      if (instruction.dir === 'x' && x === xMax) continue;
      if (dots[y][x] === '#') {
        let newY = (y > yMax ? yMax - (y - yMax) : y);
        let newX = (x > xMax ? xMax - (x - xMax) : x);
        foldedDots[newY][newX] = dots[y][x];
      }
    }
  }

  return foldedDots;
}

const parseInput = (input) => {
  let xMax = getXMax(input);
  let yMax = getYMax(input);

  let dots = new Array(yMax).fill(' ').map(x => new Array(xMax).fill(' '));
  let foldInstructions = new Array();
  for (let i = 0; i < input.length; i++) {
    let row = input[i];
    if (isDot(row)) {
      let x, y;
      [x, y] = row.split(',');
      dots[y][x] = '#';
    } else if (isFoldInstructions(row)) {
      let dir, pos;
      [dir, pos] = row.replace('fold along', '').trim().split('=');
      foldInstructions.push({ dir, pos: parseInt(pos) });
    }
  }

  return { dots, foldInstructions };
}

const getXMax = (input) => {
  return Math.max(...input.filter(row => isDot(row))
    .map(row => row.split(',')[0])) + 1;
}

const getYMax = (input) => {
  return Math.max(...input.filter(row => isDot(row))
    .map(row => row.split(',')[1])) + 1;
}

const isDot = (row) => {
  return row.split(',').length === 2;
}

const isFoldInstructions = (row) => {
  return row.indexOf('fold along') === 0;
}

exports.run = () => {
  let input = utils.getInput('2021', 'day13', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
