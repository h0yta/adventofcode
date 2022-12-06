const utils = require('../util/fileUtil');

const firstStar = (input) => {
  const LENGTH = 4;
  for (let i = LENGTH; i < input.length; i++) {
    let marker = new Set(input.slice(i - LENGTH, i));
    if (marker.size === LENGTH) {
      return i;
    }
  }
}

const secondStar = (input) => {
  const LENGTH = 14;
  for (let i = LENGTH; i < input.length; i++) {
    let marker = new Set(input.slice(i - LENGTH, i));
    if (marker.size === LENGTH) {
      return i;
    }
  }
}

exports.run = () => {
  let input = utils.getInput('2022', 'day06', '');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
