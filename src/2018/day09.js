const utils = require('../util/fileUtil');

const firstStar = function (input) {
  [input, noPlayers, lastMarble] = parseInput(input);
  return runGameArray(parseInt(noPlayers), parseInt(lastMarble));
}

const runGameArray = function (noPlayers, lastMarble) {
  let players = new Array(noPlayers).fill(0);
  for (let circle = [0], marble = 1, currentMarble = 1, player = 0; marble <= lastMarble; marble++ , player++) {
    player = player % noPlayers;
    let index = ((currentMarble + 1) % circle.length) + 1;

    if (marble % 23 === 0) {
      index = ((currentMarble + circle.length - 7) % circle.length);
      players[player] += marble;
      players[player] += circle[index];
      circle.splice(index, 1);
    } else {
      circle.splice(index, 0, marble);
    }

    currentMarble = index;
  }

  return Math.max(...players);
}

const secondStar = function (input) {
  [input, noPlayers, lastMarble] = parseInput(input);
  return runGameLinkedList(parseInt(noPlayers), parseInt(lastMarble) * 100);
}

const runGameLinkedList = function (noPlayers, lastMarble) {
  let players = new Array(noPlayers).fill(0);
  let currentMarble = {
    index: 0,
  };
  currentMarble.next = currentMarble;
  currentMarble.prev = currentMarble;

  for (let marble = 1, player = 0; marble <= lastMarble; marble++ , player++) {
    player = player % noPlayers;

    if (marble % 23 === 0) {
      players[player] += marble;
      currentMarble = currentMarble.prev.prev.prev.prev.prev.prev;
      players[player] += currentMarble.prev.index;
      currentMarble.prev.prev.next = currentMarble;
      currentMarble.prev = currentMarble.prev.prev;
    } else {
      currentMarble = addNext(marble, currentMarble.next);
    }
  }

  return Math.max(...players);
}

const addNext = function (index, marble) {
  const next = {
    index,
    prev: marble,
    next: marble.next,
  }

  marble.next.prev = next;
  marble.next = next;
  return next;
}

const parseInput = function (input) {
  return input.match(/(\d+) players; last marble is worth (\d+) points/);
}

exports.run = function () {
  let input = utils.getInput('2018', 'day09', '\n');
  console.log('Answer for first star', firstStar(input[0]));
  console.log('Answer for second star', secondStar(input[0]));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;