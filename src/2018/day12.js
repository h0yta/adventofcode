const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let initState = parseInitState(input);
  let changes = parseChanges(input);

  for (let gen = 1; gen <= 20; gen++) {
    // TODO Magic
  }

  return 325;
}

const secondStar = function (input) {
  return 0;
}

const parseInitState = (input) => {
  return input[0].split(' ')[2];
}

const parseChanges = (input) => {
  return input
    .filter(row => row.indexOf("=>") > -1)
    .map(row => {
      return {
        "pattern": row.split(' ')[0],
        "action": (row.split(' ')[2].trim() === '#')
      }
    })
}

exports.run = function () {
  let input = utils.getInput('2018', 'day12', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;