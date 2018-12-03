const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let array = {};
  input.map(parseInput)
    .forEach(row => {
      for (let x = row.startX; x <= row.startX + row.lengthX; x++) {
        for (let y = row.startY; y <= row.startY + row.lengthY; y++) {
          if (array[x + '#' + y]) {
            array[x + '#' + y] = array[x + '#' + y] + 1;
          } else {
            array[x + '#' + y] = 1;
          }
        }
      }
    });

  console.log(array);
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
      "startX": parseInt(match[1].trim()),
      "startY": parseInt(match[2].trim()),
      "lengthX": parseInt(match[3].trim()),
      "lengthY": parseInt(match[4].trim())
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