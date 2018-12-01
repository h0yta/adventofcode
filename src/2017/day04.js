const utils = require('../util/fileUtil');

const runOne = function (input) {
  let uniqueInput = input.filter(line => {
    let words = line.split(' ')
      .map(word => word.trim())
    let uniqueWords = words.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    })

    return words.length === uniqueWords.length;
  });

  return uniqueInput.length;
}

const runTwo = function (input) {
  let uniqueInput = input.filter(line => {
    let words = line.split(' ')
      .map(word => word.trim().split('').sort().join(''));
    let uniqueWords = words.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    })

    return words.length === uniqueWords.length;
  });

  return uniqueInput.length;
}

exports.run = function () {
  let input = utils.getInput('2017', 'day04', '\n');
  console.log('Valid passphrases (first)', runOne(input));
  console.log('Valid passphrases (second)', runTwo(input));
}

exports.runOne = runOne;
exports.runTwo = runTwo;