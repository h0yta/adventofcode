const utils = require('../util/fileUtil');

const firstStar = (input, steps) => {
  input = parseInput(input);
  let flashes = 0;
  for (let step = 1; step <= steps; step++) {
    input.forEach(row => row.forEach(x => { x.flashed = false; x.value++ }));
    flashes += flash(input);
  }

  return flashes;
}

const flash = (input) => {
  let flashed = input.flatMap(row => row.filter(x => x.value > 9));
  let flashedNo = flashed.length;
  if (flashedNo === 0) return 0;

  for (let i = 0; i < flashedNo; i++) {
    let oct = flashed[i];
    input[oct.y][oct.x].flashed = true;
    input[oct.y][oct.x].value = 0;
  }

  for (let i = 0; i < flashedNo; i++) {
    let oct = flashed[i];
    findAdjecent(input, oct.y, oct.x)
      .filter(adj => adj.flashed === false)
      .forEach(adj => {
        input[adj.y][adj.x].value++
      });
  }

  flashedNo += flash(input);
  return flashedNo;
}

const findAdjecent = (input, y, x) => {
  let adjecent = new Array();
  if (input[y - 1]) {
    adjecent.push(input[y - 1][x - 1]);
    adjecent.push(input[y - 1][x]);
    adjecent.push(input[y - 1][x + 1]);
  }

  adjecent.push(input[y][x - 1]);
  adjecent.push(input[y][x + 1]);

  if (input[y + 1]) {
    adjecent.push(input[y + 1][x - 1]);
    adjecent.push(input[y + 1][x]);
    adjecent.push(input[y + 1][x + 1]);
  }

  return adjecent.filter(x => x !== undefined);
}

const secondStar = (input) => {
  input = parseInput(input);
  const MAX = input.length * input[0].length;
  for (let step = 1; true; step++) {
    input.forEach(row => row.forEach(x => { x.flashed = false; x.value++ }));
    let flashes = flash(input);
    if (flashes === MAX) return step;
  }
}

const parseInput = (input) => {
  input = input.map(row => row.split('').map(x => parseInt(x)));
  let octopuses = new Array(input.length).fill(0).map(() => new Array(input[9].length).fill(0));
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[0].length; x++) {
      octopuses[y][x] = {
        y: y,
        x: x,
        value: input[y][x],
        flashed: false
      }
    }
  }

  return octopuses;
}

exports.run = () => {
  let input = utils.getInput('2021', 'day11', '\n');
  console.log('Answer for first star', firstStar(input, 100));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
