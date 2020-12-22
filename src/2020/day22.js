const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let player1 = input[0]
    .split('\n')
    .slice(1, input[0].length)
    .map(x => parseInt(x));
  let player2 = input[1]
    .split('\n')
    .slice(1, input[1].length)
    .map(x => parseInt(x));

  playComabt(player1, player2);

  if (player1.length > 0) {
    return calculateScore(player1);
  } else {
    return calculateScore(player2);
  }
}

const secondStar = function (input) {
  let player1 = input[0]
    .split('\n')
    .slice(1, input[0].length)
    .map(x => parseInt(x));
  let player2 = input[1]
    .split('\n')
    .slice(1, input[1].length)
    .map(x => parseInt(x));

  playRecursiveComabt(player1, player2, 1);

  if (player1.length > 0) {
    return calculateScore(player1);
  } else {
    return calculateScore(player2);
  }
}

const playComabt = (player1, player2) => {
  // Play combat
  while (player1.length > 0 && player2.length > 0) {
    let p1 = player1.shift();
    let p2 = player2.shift();
    if (p1 > p2) {
      player1.push(p1);
      player1.push(p2);
    } else {
      player2.push(p2);
      player2.push(p1);
    }
  }
}

const playRecursiveComabt = (player1, player2, game) => {
  // Play combat
  let playedCombinations = new Map();
  let count = 1;
  while (player1.length > 0 && player2.length > 0) {
    //console.log('R', game, count++, player1, player2)
    if (playedCombinations.has(createKey(player1, player2))) {
      return true;
    } else {
      playedCombinations.set(createKey(player1, player2), true);
    }

    let p1 = player1.shift();
    let p2 = player2.shift();
    if (player1.length >= p1 && player2.length >= p2) {
      if (playRecursiveComabt(
        player1.slice(0, p1),
        player2.slice(0, p2),
        game + 1)) {

        player1.push(p1);
        player1.push(p2);
      } else {
        player2.push(p2);
        player2.push(p1);
      }
    } else if (p1 > p2) {
      player1.push(p1);
      player1.push(p2);
    } else {
      player2.push(p2);
      player2.push(p1);
    }
  }

  return player1.length > 0;
}

const calculateScore = (deck) => {
  let sum = 0;
  for (i = 1; deck.length > 0; i++) {
    sum += i * deck.pop();
  }
  return sum;
}

const createKey = (player1, player2) => {
  return player1.join('') + '#' + player2.join('');
}

exports.run = function () {
  let input = utils.getInput('2020', 'day22', '\n\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
