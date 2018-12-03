const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return 0;
}

const secondStar = function (input) {
  return 0;
}

const parseInput = function (row) {
  // #1 @ 1,3: 4x4
  let myChildRegexp = /^#.*\s@\s(.*),(.*):\s(.*)x(.*)$/;
  let match = myChildRegexp.exec(row);
  if (match === null) {
    console.log('Found no match for', row);
  } else {
    return {
      "startX": match[1].trim(),
      "startY": match[2].trim(),
      "lengthX": match[3].trim(),
      "lengthY": match[4].trim()
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