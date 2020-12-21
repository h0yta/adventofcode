const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let tiles = input.map(tile => parseTile(tile));
  let corners = findCorners(tiles);

  return corners.map(x => x.id).reduce((x, y) => x * y, 1);
}

const monsterLength = 15;
const secondStar = function (input) {
  let tiles = input.map(tile => parseTile(tile));
  let size = Math.sqrt(tiles.length);

  let puzzle = completePuzzle(tiles, size);

  let count = findMonsters(puzzle);
  return calculate(puzzle) - monsterLength * count;
}

const findMonsters = (puzzle) => {
  let standing = /^(.){18}#.#....##....##....###.#..#..#..#..#..#...$/;

  let image = new Array();
  for (let y = 0; y < puzzle.length; y++) {
    let rows = puzzle[y][0].data.length;
    for (let ty = 0; ty < rows; ty++) {
      let row = '';
      for (let x = 0; x < puzzle[y].length; x++) {
        row += puzzle[y][x].data[ty];
      }
      image.push(row);
    }
  }

  let count = 0;
  for (let y = 0; y < image.length - 2; y++) {
    for (let x = 0; x < image.length - 19; x++) {
      let go = image[y].slice(x, x + 20);
      go += image[y + 1].slice(x, x + 20);
      go += image[y + 2].slice(x, x + 20);
      if (standing.test(go)) {
        count++;
      }
    }
  }

  return count;
}

const calculate = (puzzle) => {
  let sum = 0;
  for (let y = 0; y < puzzle.length; y++) {
    for (let x = 0; x < puzzle[y].length; x++) {
      sum += puzzle[y][x].data.map(row => row.split('').filter(x => x === '#').length).reduce((x, y) => x + y, 0);
    }
  }
  return sum;
}

const findCorners = (tiles) => {
  return tiles.filter(tile => {
    let uMatch = findMatchingTiles(tiles, tile, 'uMax');
    let rMatch = findMatchingTiles(tiles, tile, 'rMax');
    let lMatch = findMatchingTiles(tiles, tile, 'lMax');
    let dMatch = findMatchingTiles(tiles, tile, 'dMax');
    tile.uMatch = uMatch.length;
    tile.rMatch = rMatch.length;
    tile.lMatch = lMatch.length;
    tile.dMatch = dMatch.length;
    return isCorner(uMatch, rMatch, lMatch, dMatch);
  });
}

const completePuzzle = (tiles, size) => {
  let corners = findCorners(tiles);
  let puzzle = new Array(size);
  for (let i = 0; i < size; i++) {
    puzzle[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      puzzle[i][j] = {};
      puzzle[i][j].data = new Array(10);
    }
  }

  let upperLeft = corners[0];

  while (upperLeft.lMatch !== 0 || upperLeft.uMatch !== 0) {
    turnRight(upperLeft);
  }
  puzzle[0][0] = upperLeft;
  for (let y = 0; y < size; y++) {
    if (y > 0) {
      last = puzzle[y - 1][0];
    }

    for (let x = 0; x < size; x++) {
      if (y === 0 && x === 0) {
        continue;
      }

      if (x === 0) {
        // Match against upper
        let match = findMatchingTiles(tiles, puzzle[y - 1][x], 'dMax')[0];
        while (puzzle[y - 1][x].dMax !== match.uMax) {
          turnRight(match);
        }

        if (match.lMatch !== 0) {
          flipV(match);
        }

        puzzle[y][x] = match;
      } else {
        // Match to the left
        let match = findMatchingTiles(tiles, puzzle[y][x - 1], 'rMax')[0];
        while (puzzle[y][x - 1].rMax !== match.lMax) {
          turnRight(match);
        }

        if (y === 0) {
          if (match.uMatch !== 0) {
            flipH(match);
          }
        } else {
          if (puzzle[y - 1][x].dMax !== match.uMax) {
            flipH(match);
          }
        }
        puzzle[y][x] = match;
      }
    }
  }

  return puzzle;
}

const turnPuzzleRight = (puzzle) => {
  let copy = [];
  for (let x = 0; x < puzzle.length; x++) {
    let row = '';
    for (let y = puzzle.length - 1; y >= 0; y--) {
      row += puzzle[y][x];
    }
    copy[x] = row;
  }
  return copy;
}

const flipPuzzleV = (puzzle) => {
  let copy = [];
  for (let x = 0; x < puzzle.length; x++) {
    copy[x] = puzzle[x].split('').reverse().join('');
  }
  return copy;
}

const flipPuzzleH = (puzzle) => {
  let copy = [];
  for (let x = 0; x < puzzle.length; x++) {
    copy[puzzle.length - x - 1] = puzzle[x];
  }
  return copy;
}

const turnRight = (tile) => {
  let copy = [];
  for (let x = 0; x < tile.data.length; x++) {
    let row = '';
    for (let y = tile.data.length - 1; y >= 0; y--) {
      row += tile.data[y][x];
    }
    copy[x] = row;
  }
  tile.data = copy;
  let uMatch = tile.uMatch;
  let rMatch = tile.rMatch;
  let lMatch = tile.lMatch;
  let dMatch = tile.dMatch;
  tile.uMatch = lMatch;
  tile.rMatch = uMatch;
  tile.lMatch = dMatch;
  tile.dMatch = rMatch;

  let uMax = tile.uMax;
  let rMax = tile.rMax;
  let lMax = tile.lMax;
  let dMax = tile.dMax;
  tile.uMax = lMax;
  tile.rMax = uMax;
  tile.lMax = dMax;
  tile.dMax = rMax;
}

const flipV = (tile) => {
  let copy = [];
  for (let x = 0; x < tile.data.length; x++) {
    copy[x] = tile.data[x].split('').reverse().join('');
  }
  tile.data = copy;
  let rMatch = tile.rMatch;
  let lMatch = tile.lMatch;
  tile.rMatch = lMatch;
  tile.lMatch = rMatch;

  let rMax = tile.rMax;
  let lMax = tile.lMax;
  tile.rMax = lMax;
  tile.lMax = rMax;
}

const flipH = (tile) => {
  let copy = [];
  for (let x = 0; x < tile.data.length; x++) {
    copy[tile.data.length - x - 1] = tile.data[x];
  }
  tile.data = copy;
  let uMatch = tile.uMatch;
  let dMatch = tile.dMatch;
  tile.uMatch = dMatch;
  tile.dMatch = uMatch;

  let uMax = tile.uMax;
  let dMax = tile.dMax;
  tile.uMax = dMax;
  tile.dMax = uMax;
}

const printPuzzle = (puzzle) => {
  for (let y = 0; y < puzzle.length; y++) {
    let rows = puzzle[y][0].data.length;
    for (let ty = 0; ty < rows; ty++) {
      let row = '';
      for (let x = 0; x < puzzle[y].length; x++) {
        row += puzzle[y][x].data[ty];
      }
      console.log(row);
    }
  }
}

const findMatchingTiles = (tiles, tile, value) => {
  return tiles.filter(x => x.id !== tile.id
    && (x.uMax === tile[value]
      || x.rMax === tile[value]
      || x.lMax === tile[value]
      || x.dMax === tile[value]));
}

const isCorner = (uMatch, rMatch, lMatch, dMatch) => {
  return (uMatch.length + rMatch.length + lMatch.length + dMatch.length) === 2
}

const parseTile = (input) => {
  let tile = {
    l: '',
    r: ''
  };
  let rows = input.split('\n');
  let u = r = d = l = ''
  for (let i = 0; i < rows.length; i++) {
    let split = rows[i].split('');
    if (i === 0) {
      tile.id = getId(rows[i]);
    } else if (i === 1) {
      u = rows[i];
      l += split[0];
      r += split[split.length - 1];
    } else if (i === (rows.length - 1)) {
      d = rows[i];
      l += split[0];
      r += split[split.length - 1];
    } else {
      l += split[0];
      r += split[split.length - 1];
    }
  }

  tile.uMax = Math.max(toBin(u), toBinReverse(u));
  tile.rMax = Math.max(toBin(r), toBinReverse(r));
  tile.lMax = Math.max(toBin(l), toBinReverse(l));
  tile.dMax = Math.max(toBin(d), toBinReverse(d));
  let data = rows.splice(1, rows.length);

  data = data.splice(1, data.length);
  data = data.map(x => x.split('').splice(0, x.length - 1).join(''));
  data = data.map(x => x.split('').splice(1, x.length).join(''));
  data = data.splice(0, data.length - 1);
  tile.data = data;

  return tile;
}

const toBinReverse = (x) => {
  return toBin(x.split('').reverse().join(''));
}

const toBin = (x) => {
  return parseInt(x.replace(/#/g, 1).replace(/\./g, 0), 2);
}

const getId = (row) => {
  return /Tile (\d+):/.exec(row)[1];
}

exports.run = function () {
  let input = utils.getInput('2020', 'day20', '\n\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
