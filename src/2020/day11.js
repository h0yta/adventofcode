const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let seats = input.map(row => row.split(''));

  while (true) {
    let copy = utils.copyArray(seats);
    let changes = 0;
    for (let row = 0; row < seats.length; row++) {
      for (let seat = 0; seat < seats[row].length; seat++) {
        if (emptySeatWithNoAdjecent(copy, row, seat)) {
          seats[row][seat] = '#';
          changes++;
        } else if (occupiedSeatFourOrMoreAdjecent(copy, row, seat)) {
          seats[row][seat] = 'L';
          changes++;
        }
      }
    }

    if (changes === 0) break;
  }

  return seats.map(row => row.filter(seat => seat === '#').length)
    .reduce((x, y) => x + y, 0);
}

const secondStar = function (input) {
  let seats = input.map(row => row.split(''));

  while (true) {
    let copy = utils.copyArray(seats);
    let changes = 0;
    for (let row = 0; row < seats.length; row++) {
      for (let seat = 0; seat < seats[row].length; seat++) {
        if (emptySeatWithNoAdjecentThatCanBeSeen(copy, row, seat)) {
          seats[row][seat] = '#';
          changes++;
        } else if (occupiedSeatFiveOrMoreAdjecentThatCanBeSeen(copy, row, seat)) {
          seats[row][seat] = 'L';
          changes++;
        }
      }
    }

    if (changes === 0) break;
  }

  return seats.map(row => row.filter(seat => seat === '#').length)
    .reduce((x, y) => x + y, 0);
}

const emptySeatWithNoAdjecent = (seats, row, seat) => {
  return seats[row][seat] === 'L'
    && findAdjecent(seats, row, seat).filter(x => x === '#').length === 0;
}

const occupiedSeatFourOrMoreAdjecent = (seats, row, seat) => {
  return seats[row][seat] === '#'
    && findAdjecent(seats, row, seat).filter(x => x === '#').length >= 4;
}

const emptySeatWithNoAdjecentThatCanBeSeen = (seats, row, seat) => {
  return seats[row][seat] === 'L'
    && findAdjecentThatCanBeSeen(seats, row, seat).filter(x => x === '#').length === 0;
}

const occupiedSeatFiveOrMoreAdjecentThatCanBeSeen = (seats, row, seat) => {
  return seats[row][seat] === '#'
    && findAdjecentThatCanBeSeen(seats, row, seat).filter(x => x === '#').length >= 5;
}

const printSeats = (seats) => {
  console.log(seats.map(x => x.join('')).join('\n'));
  console.log('')
}

const findAdjecent = (seats, row, seat) => {
  let adjecent = new Array();
  adjecent.push(seats[row - 1] && seats[row - 1][seat - 1] ? seats[row - 1][seat - 1] : '.');
  adjecent.push(seats[row - 1] ? seats[row - 1][seat] : '.');
  adjecent.push(seats[row - 1] && seats[row - 1][seat + 1] ? seats[row - 1][seat + 1] : '.');

  adjecent.push(seats[row][seat + 1] ? seats[row][seat + 1] : '.');

  adjecent.push(seats[row + 1] && seats[row + 1][seat + 1] ? seats[row + 1][seat + 1] : '.');
  adjecent.push(seats[row + 1] ? seats[row + 1][seat] : '.');
  adjecent.push(seats[row + 1] && seats[row + 1][seat - 1] ? seats[row + 1][seat - 1] : '.');

  adjecent.push(seats[row][seat - 1] ? seats[row][seat - 1] : '.');

  return adjecent;
}

const findAdjecentThatCanBeSeen = (seats, row, seat) => {
  let adjecent = new Array();

  adjecent.push(findUpLeft(seats, row, seat));
  adjecent.push(findUp(seats, row, seat));
  adjecent.push(findUpRight(seats, row, seat));

  adjecent.push(findRight(seats, row, seat));

  adjecent.push(findDownRight(seats, row, seat));
  adjecent.push(findDown(seats, row, seat));
  adjecent.push(findDownLeft(seats, row, seat));

  adjecent.push(findLeft(seats, row, seat));

  return adjecent;
}

const findUpLeft = (seats, row, seat) => {
  let offset = 1;

  while (true) {
    if (!seats[row - offset] || !seats[row - offset][seat - offset]) {
      return '.'
    } else if (seats[row - offset][seat - offset] === '.') {
      offset++;
    } else {
      return seats[row - offset][seat - offset];
    }
  }
}

const findUp = (seats, row, seat) => {
  let offset = 1;

  while (true) {
    if (!seats[row - offset]) {
      return '.'
    } else if (seats[row - offset][seat] === '.') {
      offset++;
    } else {
      return seats[row - offset][seat];
    }
  }
}

const findUpRight = (seats, row, seat) => {
  let offset = 1;

  while (true) {
    if (!seats[row - offset] || !seats[row - offset][seat + offset]) {
      return '.'
    } else if (seats[row - offset][seat + offset] === '.') {
      offset++;
    } else {
      return seats[row - offset][seat + offset];
    }
  }
}

const findRight = (seats, row, seat) => {
  let offset = 1;

  while (true) {
    if (!seats[row][seat + offset]) {
      return '.'
    } else if (seats[row][seat + offset] === '.') {
      offset++;
    } else {
      return seats[row][seat + offset];
    }
  }
}

const findDownRight = (seats, row, seat) => {
  let offset = 1;

  while (true) {
    if (!seats[row + offset] || !seats[row + offset][seat + offset]) {
      return '.'
    } else if (seats[row + offset][seat + offset] === '.') {
      offset++;
    } else {
      return seats[row + offset][seat + offset];
    }
  }
}

const findDown = (seats, row, seat) => {
  let offset = 1;

  while (true) {
    if (!seats[row + offset]) {
      return '.'
    } else if (seats[row + offset][seat] === '.') {
      offset++;
    } else {
      return seats[row + offset][seat];
    }
  }
}

const findDownLeft = (seats, row, seat) => {
  let offset = 1;

  while (true) {
    if (!seats[row + offset] || !seats[row + offset][seat - offset]) {
      return '.'
    } else if (seats[row + offset][seat - offset] === '.') {
      offset++;
    } else {
      return seats[row + offset][seat - offset];
    }
  }
}

const findLeft = (seats, row, seat) => {
  let offset = 1;

  while (true) {
    if (!seats[row][seat - offset]) {
      return '.'
    } else if (seats[row][seat - offset] === '.') {
      offset++;
    } else {
      return seats[row][seat - offset];
    }
  }
}

exports.run = function () {
  let input = utils.getInput('2020', 'day11', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
