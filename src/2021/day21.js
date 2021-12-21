const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let game = createGame(input);
  let die = 0;
  let rolls = 0;
  while (!game.winner) {
    let [rolledDie, rolled] = rollTrainingDice(die, 3);
    die = rolledDie;
    rolls += rolled.length;
    game.players[game.activePlayer].pos += rolled.reduce((acc, cur) => acc += cur, 0);
    game.players[game.activePlayer].pos = ((game.players[game.activePlayer].pos - 1) % 10) + 1;
    game.players[game.activePlayer].score += game.players[game.activePlayer].pos;

    if (game.players[game.activePlayer].score >= 1000) {
      game.winner = game.activePlayer;
    }

    game.activePlayer = game.activePlayer === 1 ? 2 : 1;
  }

  let losingScore = Object.values(game.players).filter(player => player.score < 1000)[0].score;
  return losingScore * rolls;
}

const secondStar = (input) => {
  let result = [0, 0];
  let pos1 = parseInput(input[0]).start;
  let pos2 = parseInput(input[1]).start;

  let currentPlayer = 1;
  let rolledQuantumDice = rollQuantumDice();
  for (let i = 0; i < rolledQuantumDice.length; i++) {
    let rolledDie = rolledQuantumDice[i];
    let scores = score(pos1, pos2, 0, 0, currentPlayer,
      rolledDie.value, rolledDie.multiplier);
    result[0] += scores[0];
    result[1] += scores[1];
  }

  return Math.max(...result);
}

const score = (pos1, pos2, score1, score2, currentPlayer, roll, multiplier) => {
  let result = [0, 0];

  if (currentPlayer === 1) {
    pos1 = ((pos1 + roll - 1) % 10) + 1;
    score1 += pos1;
    if (score1 >= 21) return [multiplier, 0]
  } else {
    pos2 = ((pos2 + roll - 1) % 10) + 1;
    score2 += pos2;
    if (score2 >= 21) return [0, multiplier]
  }

  currentPlayer = currentPlayer === 1 ? 2 : 1;
  let rolledQuantumDice = rollQuantumDice();
  for (let i = 0; i < rolledQuantumDice.length; i++) {
    let rolledDie = rolledQuantumDice[i];
    let scores = score(pos1, pos2, score1, score2, currentPlayer,
      rolledDie.value, multiplier * rolledDie.multiplier);
    result[0] += scores[0];
    result[1] += scores[1];
  }

  return result;
}

const rollTrainingDice = (dice, times) => {
  let rolled = new Array();
  for (let turn = 0; turn < times; turn++) {
    rolled.push(++dice);
    if (dice === 100) dice = 0;
  }
  return [dice, rolled];
}

const rollQuantumDice = () => {
  // 111 112 113 121 122 123 131 132 133 
  // 211 212 213 221 222 223 231 232 233
  // 311 312 313 321 322 323 331 332 333 
  // => 27

  // 3,
  // 4, 4, 4,
  // 5, 5, 5, 5, 5, 5,
  // 6, 6, 6, 6, 6, 6, 6,
  // 7, 7, 7, 7, 7, 7,
  // 8, 8, 8,
  // 9

  return [
    { value: 3, multiplier: 1 },
    { value: 4, multiplier: 3 },
    { value: 5, multiplier: 6 },
    { value: 6, multiplier: 7 },
    { value: 7, multiplier: 6 },
    { value: 8, multiplier: 3 },
    { value: 9, multiplier: 1 }
  ]
}

const createGame = (input) => {
  input = input.map(row => parseInput(row));
  let players = {};
  input.forEach(row => {
    players[row.player] = createPlayer(row.start, 0, 0);
  });
  return { activePlayer: 1, players }
}

const createPlayer = (pos, score, multiplier) => {
  return { pos, score, multiplier };
}

const parseInput = (input) => {
  let ruleRegexp = /^Player (\d) starting position: (\d)$/;
  let match = ruleRegexp.exec(input);
  if (match === null) {
    console.log('ERROR: no match!');
  } else {
    return {
      player: parseInt(match[1]),
      start: parseInt(match[2])
    }
  }
}

exports.run = () => {
  let input = utils.getInput('2021', 'day21', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
