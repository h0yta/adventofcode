const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let blackTiles = new Map();
  input.forEach(row => {
    let tilePosition = findTilePosition(row, 0, 0);
    let tileKey = tilePosition.x + '#' + tilePosition.y;
    if (blackTiles.has(tileKey)) {
      blackTiles.delete(tileKey);
    } else {
      blackTiles.set(tileKey, tilePosition);
    }
  });

  return blackTiles.size;
}

const secondStar = function (input) {
  let blackTiles = new Map();
  input.forEach(row => {
    let tile = findTilePosition(row, 0, 0);
    let tileKey = tile.x + '#' + tile.y;
    if (blackTiles.has(tileKey)) {
      blackTiles.delete(tileKey);
    } else {
      blackTiles.set(tileKey, tile);
    }
  });

  for (let day = 1; day <= 100; day++) {
    let tilesToFlip = findTilesToFlip(blackTiles);
    tilesToFlip.forEach(tile => {
      let tileKey = tile.x + '#' + tile.y;
      if (blackTiles.has(tileKey)) {
        blackTiles.delete(tileKey);
      } else {
        blackTiles.set(tileKey, tile);
      }
    });
  }

  return blackTiles.size;
}


const findTilesToFlip = (blackTiles) => {
  let tilesToFlip = new Array();
  let bounderies = getBounderies(blackTiles);
  for (let y = bounderies.minY - 2; y < bounderies.maxY + 2; y++) {
    for (let x = bounderies.minX - 2; x < bounderies.maxX + 2; x++) {
      let neighbours = findNeigbours(x, y);
      let numberOfBlackNeighbours = neighbours.filter(tile => {
        return blackTiles.has(tile.x + '#' + tile.y);
      }).length;

      if (blackTiles.has(x + '#' + y)) {
        if (numberOfBlackNeighbours === 0 || numberOfBlackNeighbours > 2) {
          tilesToFlip.push({ x, y });
        }
      } else {
        if (numberOfBlackNeighbours === 2) {
          tilesToFlip.push({ x, y });
        }
      }
    }
  }

  return tilesToFlip;
}

const findNeigbours = (x, y) => {
  let neighbours = new Array();
  neighbours.push(findTilePosition('1', x, y));
  neighbours.push(findTilePosition('2', x, y));
  neighbours.push(findTilePosition('3', x, y));
  neighbours.push(findTilePosition('4', x, y));
  neighbours.push(findTilePosition('5', x, y));
  neighbours.push(findTilePosition('6', x, y));
  return neighbours;
}

const getBounderies = (blackTiles) => {
  let minX = Math.min(...[...blackTiles.values()].map(pos => pos.x));
  let maxX = Math.max(...[...blackTiles.values()].map(pos => pos.x));
  let minY = Math.min(...[...blackTiles.values()].map(pos => pos.y));
  let maxY = Math.max(...[...blackTiles.values()].map(pos => pos.y));
  return { minX, maxX, minY, maxY };
}

const findTilePosition = (row, x, y) => {
  row = convertRow(row);
  let turns = row.split('');
  for (let turn = 0; turn < turns.length; turn++) {
    switch (turns[turn]) {
      case '1':
        if (!isRowEven(y)) {
          x += 1;
        }
        y -= 1;
        break;
      case '2':
        if (!isRowEven(y)) {
          x += 1;
        }
        y += 1;
        break;
      case '3':
        x += 1;
        break;
      case '4':
        if (isRowEven(y)) {
          x -= 1;
        }
        y -= 1;
        break;
      case '5':
        if (isRowEven(y)) {
          x -= 1;
        }
        y += 1;
        break;
      case '6':
        x -= 1;
        break;
    }
  }

  return { x, y };
}

const isRowEven = (row) => {
  if (row < 0) {
    return (row * -1) % 2 === 0;
  } else {
    return row % 2 === 0;
  }
}

const convertRow = (row) => {
  return row
    .replace(/ne/g, '1')
    .replace(/se/g, '2')
    .replace(/e/g, '3')
    .replace(/nw/g, '4')
    .replace(/sw/g, '5')
    .replace(/w/g, '6');
}

exports.run = function () {
  let input = utils.getInput('2020', 'day24', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
exports.findTilePosition = findTilePosition;
