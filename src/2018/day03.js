const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let grid = {};
  input.map(parseInput)
    .forEach(row => {
      for (let x = row.startX; x < row.startX + row.lengthX; x++) {
        for (let y = row.startY; y < row.startY + row.lengthY; y++) {
          if (grid[x + '#' + y]) {
            grid[x + '#' + y] = grid[x + '#' + y] + 1;
          } else {
            grid[x + '#' + y] = 1;
          }
        }
      }
    });

  let overlappingSquares = 0;
  for (elem in grid) {
    overlappingSquares += grid[elem] > 1 ? 1 : 0;
  }

  return overlappingSquares;
}

const secondStar = function (input) {
  let grid = {};
  let claims = [];
  let dup = [];
  input.map(parseInput)
    .forEach(row => {
      claims.push(row.claim);
      for (let x = row.startX; x < row.startX + row.lengthX; x++) {
        for (let y = row.startY; y < row.startY + row.lengthY; y++) {
          let posId = x + '#' + y;
          if (grid[posId]) {
            dup.push(grid[posId]);
            dup.push(row.claim);
          } else {
            grid[posId] = row.claim;
          }
        }
      }
    });

  return claims.filter(claim => dup.indexOf(claim) === -1).pop();
}

const parseInput = function (row) {
  // #1 @ 1,3: 4x4
  let myChildRegexp = /^#(.*)\s@\s(.*),(.*):\s(.*)x(.*)$/;
  let match = myChildRegexp.exec(row);
  if (match === null) {
    console.log('Found no match for', row);
  } else {
    return {
      "claim": parseInt(match[1].trim()),
      "startX": parseInt(match[2].trim()),
      "startY": parseInt(match[3].trim()),
      "lengthX": parseInt(match[4].trim()),
      "lengthY": parseInt(match[5].trim())
    }
  }
}

exports.run = function () {
  let input = utils.getInput('2018', 'day03', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
exports.parse = parseInput;