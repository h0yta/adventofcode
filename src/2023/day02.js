const utils = require('../util/fileUtil');

const firstStar = (input) => {
  return input.map(parseGame)
    .filter(game => game.sets.every(isSetWithinLimits))
    .map(game => game.id)
    .reduce((a, b) => a + b);
}

const limits = { red: 12, green: 13, blue: 14 }
const isSetWithinLimits = (set) => {
  return set.every(turn => {
    return turn.no <= limits[turn.color];
  });
}

const secondStar = (input) => {
  return input.map(parseGame)
    .map(game => {
      return {
        blue: findMaximum(game.sets, 'blue'),
        red: findMaximum(game.sets, 'red'),
        green: findMaximum(game.sets, 'green')
      }
    })
    .map(game => game.blue * game.red * game.green)
    .reduce((a, b) => a + b);
}

const findMaximum = (sets, color) => {
  return Math.max(...sets
    .flatMap(set => {
      return set.filter(turn => turn.color === color)
        .map(turn => turn.no);
    }));
}

const parseGame = function (row) {
  let rowRegex = /^Game (\d+)\:(.+)$/;
  let match = rowRegex.exec(row.trim());
  if (match === null) {
    console.log('Found no match for', row);
  } else {
    return {
      id: parseInt(match[1].trim()),
      sets: match[2]
        .split(';')
        .map(set => {
          return set.trim().split(',')
            .map(turn => {
              let [no, color] = turn.trim().split(' ');
              return { color, no }
            })
        })
    }
  }
}

exports.run = () => {
  let input = utils.getInput('2023', 'day02', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
