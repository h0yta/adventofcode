const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let map = parseMap(input);
  map = move(map, 0, -1, 0, 0);
  return countEnergies(map);
}

const move = (map, py, px, y, x) => {
  let from = py + ':' + px;
  if (!map[y] || !map[y][x]
    || (map[y][x].energized && map[y][x].from.includes(from))) return map;

  map[y][x].energized = true;
  map[y][x].from.push(from);
  if (map[y][x].tile === '\\') {
    if (px < x) {
      map = move(map, y, x, y + 1, x);
    } else if (px > x) {
      map = move(map, y, x, y - 1, x);
    } else if (py < y) {
      map = move(map, y, x, y, x + 1);
    } else if (py > y) {
      map = move(map, y, x, y, x - 1);
    }
  } else if (map[y][x].tile === '/') {
    if (px < x) {
      map = move(map, y, x, y - 1, x);
    } else if (px > x) {
      map = move(map, y, x, y + 1, x);
    } else if (py < y) {
      map = move(map, y, x, y, x - 1);
    } else if (py > y) {
      map = move(map, y, x, y, x + 1);
    }
  } else if (map[y][x].tile === '|') {
    if (px !== x) {
      map = move(map, y, x, y - 1, x);
      map = move(map, y, x, y + 1, x);
    } else if (py < y) {
      map = move(map, y, x, y + 1, x);
    } else if (py > y) {
      map = move(map, y, x, y - 1, x);
    }
  } else if (map[y][x].tile === '-') {
    if (py !== y) {
      map = move(map, y, x, y, x - 1);
      map = move(map, y, x, y, x + 1);
    } else if (px < x) {
      map = move(map, y, x, y, x + 1);
    } else if (px > x) {
      map = move(map, y, x, y, x - 1);
    }
  } else if (map[y][x].tile === '.') {
    if (px < x) {
      map = move(map, y, x, y, x + 1);
    } else if (px > x) {
      map = move(map, y, x, y, x - 1);
    } else if (py < y) {
      map = move(map, y, x, y + 1, x);
    } else if (py > y) {
      map = move(map, y, x, y - 1, x);
    }
  }

  return map;
}

const countEnergies = (map) => {
  return map.map(row => row.filter(tile => tile.energized).length).reduce((a, b) => a + b, 0);
}

const secondStar = (input) => {
  let pasedInput = parseMap(input);

  let enirgies = [];
  // UP
  for (let x = 0; x < pasedInput[0].length; x++) {
    let map = parseMap(input);
    map = move(map, -1, x, 0, x);
    enirgies.push(countEnergies(map));
  }

  // DOWN
  let yMax = pasedInput.length;
  for (let x = 0; x < pasedInput[0].length; x++) {
    let map = parseMap(input);
    map = move(map, yMax, x, yMax - 1, x);
    enirgies.push(countEnergies(map));
  }

  // LEFT
  for (let y = 0; y < pasedInput.length; y++) {
    let map = parseMap(input);
    map = move(map, y, -1, y, 0);
    enirgies.push(countEnergies(map));
  }

  // RIGHT
  let xMax = pasedInput[0].length;
  for (let y = 0; y < pasedInput.length; y++) {
    let map = parseMap(input);
    map = move(map, y, xMax, y, xMax - 1);
    enirgies.push(countEnergies(map));
  }

  return Math.max(...enirgies);
}

const parseMap = (input) => {
  return input
    .map(row => row.split('')
      .map(tile => {
        return {
          energized: false,
          tile,
          from: []
        }
      }));
}

exports.run = () => {
  let input = utils.getInput('2023', 'day16', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
