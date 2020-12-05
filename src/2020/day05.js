const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let seats = getSeats(input);

  return Math.max(...seats);
}

const secondStar = function (input) {
  let seats = getSeats(input);

  for (let i = 0; i < seats.length; i++) {
    if (seats[i + 1] - seats[i] !== 1) {
      return seats[i] + 1;
    }
  }
}

const getSeats = function (input) {
  return input.map(bp => {
    let row = bp.substring(0, 7).replace(/B/g, '1').replace(/F/g, '0');
    let col = bp.substring(7, 10).replace(/R/g, '1').replace(/L/g, '0');
    return parseInt(row, 2) * 8 + parseInt(col, 2);
  }).sort((a, b) => { return a - b });
}

exports.run = function () {
  let input = utils.getInput('2020', 'day05', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;