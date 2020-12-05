const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let someArray = input.map(row => row.split('').filter(x => x.trim() != ''));
  return traverse(someArray, 3, 1);
}

const secondStar = function (input) {
  let someArray = input.map(row => row.split('').filter(x => x.trim() != ''));
  return traverse(someArray, 1, 1)
    * traverse(someArray, 3, 1)
    * traverse(someArray, 5, 1)
    * traverse(someArray, 7, 1)
    * traverse(someArray, 1, 2);
}

const traverse = function (someArray, xJump, yJump) {
  let x = y = t = 0;
  while (y < someArray.length) {
    if (someArray[y][x] === '#') {
      t++;
    }

    x = (x + xJump) % someArray[0].length;
    y = y + yJump;
  }

  return t;
}

exports.run = function () {
  let input = utils.getInput('2020', 'day03', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;