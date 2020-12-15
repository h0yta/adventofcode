const utils = require('../util/fileUtil');

const firstStar = function (input, turns) {
  return runGame(input, turns);
}

const secondStar = function (input, turns) {
  return runGame(input, turns);
}

const runGame = (input, turns) => {
  let score = {
    'turn': 1,
    'last': 0,
    'spoken': 0,
    'game': {}
  }

  input.map(x => parseInt(x)).forEach(x => {
    score.game[x] = score.turn;
    score.last = x;
    score.turn++;
  })

  for (; score.turn < turns; score.turn++) {
    let spoken = 0;
    if (score.game[score.spoken] !== undefined) {
      spoken = score.turn - score.game[score.spoken];
    }
    score.game[score.spoken] = score.turn;
    score.last = score.spoken;
    score.spoken = spoken;
  }

  return score.spoken;
}

exports.run = function () {
  let input = utils.getInput('2020', 'day15', ',');
  console.log('Answer for first star', firstStar(input, 2020));
  console.log('Answer for second star', secondStar(input, 30000000));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
