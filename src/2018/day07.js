const utils = require('../util/fileUtil');

const firstStar = function (input) {
  
  input.map(parseInput).forEach(row => {
    
  });
}

const secondStar = function (input) {
  return 0;
}

const parseInput = function (row) {
  return {
    'step': row.split(' ')[1].trim(),
    'beforeStep': row.split(' ')[7].trim()
  }
}

exports.run = function () {
  let input = utils.getInput('2018', 'day07', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;