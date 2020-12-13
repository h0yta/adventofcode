const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let earliestTime = input.shift();
  let busToTake = findBuses(input).map(bus => {
    let next = bus - (earliestTime % bus);
    return { 'bus': bus, 'next': next }
  }).sort((a, b) => (a.next > b.next) ? 1 : ((b.next > a.next) ? -1 : 0))
    .shift();

  return busToTake.bus * busToTake.next;
}

const secondStar = function (input) {
  let index = 0;
  let buses = input
    .split(',')
    .map(bus => {
      return { 'id': bus, 'index': index++ }
    }).filter(bus => bus.id !== 'x')
    .map(bus => {
      return { 'id': parseInt(bus.id), 'index': bus.index };
    });

  let t = 0;
  let inc = 1;
  buses.forEach(bus => {
    while (!isMagic(bus, t)) {
      t += inc;
    }

    inc *= bus.id;
  });

  return t;
}

const isMagic = (bus, t) => {
  return ((t + bus.index) % bus.id) === 0;
}

const findBuses = (input) => {
  return input.flatMap(x => x.split(','))
    .filter(x => x !== 'x')
    .map(x => parseInt(x));
}

exports.run = function () {
  let input = utils.getInput('2020', 'day13', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input[0]));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
