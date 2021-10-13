const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input.map(row => {
    return row.trim().split(/\s+/).map(x => parseInt(x.trim())).sort((a, b) => a - b);
  }).filter(sides => {
    return (sides[0] + sides[1]) > sides[2];
  }).length;
}

const secondStar = function (input) {
  input = input.map(row => {
    return row.trim().split(/\s+/)
      .map(x => parseInt(x.trim()));
  })

  let ordered = [];
  for (let i = 0; i < input.length; i = i + 3) {
    for (let j = 0; j < 3; j++) {
      let colArray = [];
      colArray.push(input[i][j]);
      colArray.push(input[i + 1][j]);
      colArray.push(input[i + 2][j]);
      colArray = colArray.sort((a, b) => a - b)
      ordered.push(colArray);
    }
  }

  return ordered.sort((a, b) => a - b)
    .filter(sides => {
      return (sides[0] + sides[1]) > sides[2];
    }).length;
}

exports.run = function () {
  let input = utils.getInput('2016', 'day03', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
