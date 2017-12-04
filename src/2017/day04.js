const utils = require('../util/fileUtil');

const runOne = function () {
  let input = utils.getInput('day04', '\n');
  let uniqueInput = input.filter(line => {
    let words = line.split(' ')
      .map(word => word.trim())
    let uniqueWords = words.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    })

    return words.length === uniqueWords.length;
  });

  console.log('Valid passphrases (first)', uniqueInput.length);
}

const runTwo = function () {
  let input = utils.getInput('day04', '\n');
  let uniqueInput = input.filter(line => {
    let words = line.split(' ')
      .map(word => word.trim().split('').sort().join(''));
    let uniqueWords = words.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    })

    return words.length === uniqueWords.length;
  });

  console.log('Valid passphrases (second)', uniqueInput.length);
}

exports.run = function () {
  runOne();
  runTwo();
}