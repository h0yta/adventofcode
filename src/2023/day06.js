const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let times = parseInput(input[0]);
  let speeds = parseInput(input[1]);
  let alts = [];
  for (let i = 0; i < times.length; i++) {
    alts.push(findAlternatives(times[i], speeds[i]));
  }
  return alts.reduce((a, b) => a * b);
}

const secondStar = (input) => {
  let time = parseInt(parseInput(input[0]).join(''));
  let speed = parseInt(parseInput(input[1]).join(''));
  return findAlternatives(time, speed);
}

const findAlternatives = (time, speed) => {
  for (let d = 1; d <= time; d++) {
    if (d * (time - d) > speed) {
      return time - d * 2 + 1;
    }
  }
}

const parseInput = (row) => {
  return row.split(':')[1].trim().split(/\s+/).map(x => parseInt(x));
}

exports.run = () => {
  let input = utils.getInput('2023', 'day06', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
