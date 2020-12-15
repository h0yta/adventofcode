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
    'game': new Map()
  }

  input.map(x => parseInt(x)).forEach(x => {
    score.game.set(x, score.turn);
    score.last = x;
    score.turn++;
  })

  for (; score.turn < turns; score.turn++) {
    let spoken = 0;
    if (score.game.has(score.spoken)) {
      spoken = score.turn - score.game.get(score.spoken);
    }
    score.game.set(score.spoken, score.turn);
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
