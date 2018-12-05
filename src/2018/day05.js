const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return react(input);
}

const secondStar = function (input) {
  var tmpSet = new Set(input.map(x => x.toLowerCase()));
  return Array.from(tmpSet)
    .map(x => {
      let filteredInput = input.filter(u => u !== x && u !== x.toUpperCase());
      return react(filteredInput);
    })
    .reduce((p, c) => p < c ? p : c);
}

const react = function (input) {
  let polymer = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i + 1] && input[i].toLowerCase() === input[i + 1].toLowerCase()
      && input[i] !== input[i + 1]) {
      i++;
    } else {
      polymer += input[i];
    }
  }

  if (input.length === polymer.length) {
    return polymer.length;
  }

  return firstStar(polymer.split(''));
}

exports.run = function () {
  let input = utils.getInput('2018', 'day05', '');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;