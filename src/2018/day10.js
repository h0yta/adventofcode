const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return 0;
}

const secondStar = function (input) {
  return 0;
}

const parseInput = function (row) {
  //position=< 40724,  50811> velocity=<-4, -5>

  return input.match(/(\d+) players; last marble is worth (\d+) points/);

}

exports.run = function () {
  let input = utils.getInput('2018', 'day10', ' ');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;