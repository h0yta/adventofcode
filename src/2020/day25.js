const utils = require('../util/fileUtil');

const firstStar = function (input) {
  input = input.map(x => parseInt(x));

  const cardPubKey = input[0];
  const cardLoopSize = getLoopSize(cardPubKey);

  const doorPubKey = input[1];
  const doorLoopSize = getLoopSize(doorPubKey);

  return solveEncrypion(cardPubKey, doorLoopSize);
}

const getLoopSize = (pubKey) => {
  let loopSize = 0
  let answer = 1
  while (answer !== pubKey) {
    answer = answer * 7
    answer = answer % 20201227
    loopSize += 1
  }

  return loopSize;
}

const solveEncrypion = (pubKey, loopSize) => {
  let encryption = 1
  for (let loop = 0; loop < loopSize; loop++) {
    encryption = encryption * pubKey
    encryption = encryption % 20201227
  }

  return encryption;
}

exports.run = function () {
  let input = utils.getInput('2020', 'day25', '\n');
  console.log('Answer for first star', firstStar(input));
}

exports.runOne = firstStar;