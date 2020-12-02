const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input.filter(row => {
    let password = row.split(':')[1].trim();
    let character = row.split(':')[0].split(' ')[1].trim();
    let min = row.split(':')[0].split(' ')[0].split('-')[0];
    let max = row.split(':')[0].split(' ')[0].split('-')[1];

    let pattern = new RegExp(character, 'g');
    let result = password.match(pattern);

    return result != null && result.length >= min && result.length <= max;
  }).length;
}

const secondStar = function (input) {
  return input.filter(row => {
    let password = row.split(':')[1].trim();
    let character = row.split(':')[0].split(' ')[1].trim();
    let pos1 = parseInt(row.split(':')[0].split(' ')[0].split('-')[0]);
    let char1 = password.charAt(pos1 - 1);
    let pos2 = parseInt(row.split(':')[0].split(' ')[0].split('-')[1]);
    let char2 = password.charAt(pos2 - 1);

    return char1 === character ^ char2 === character;
  }).length;
}

exports.run = function () {
  let input = utils.getInput('2020', 'day02', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;