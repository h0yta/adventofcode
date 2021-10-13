const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let wordlength = input[0].length;
  let word = [];
  for (let i = 0; i < wordlength; i++) {
    let letters = input.map(x => x.charAt(i)).join('');
    word.push(findMostOccuringLetter(letters));
  }
  return word.join('');
}

const secondStar = function (input) {
  let wordlength = input[0].length;
  let word = [];
  for (let i = 0; i < wordlength; i++) {
    let letters = input.map(x => x.charAt(i)).join('');
    word.push(findLeastOccuringLetter(letters));
  }
  return word.join('');
}

const findMostOccuringLetter = (string) => {
  return string.split('').map(letter => {
    return {
      letter: letter,
      count: string.split(letter).length - 1
    }
  }).filter(letterCount => letterCount.count > 0)
    .sort((a, b) => {
      if (a.count !== b.count) {
        return b.count - a.count;
      } else {
        return b.letter.charAt(0) - a.letter.charAt(0);
      }
    })[0].letter;
}

const findLeastOccuringLetter = (string) => {
  return string.split('').map(letter => {
    return {
      letter: letter,
      count: string.split(letter).length - 1
    }
  }).filter(letterCount => letterCount.count > 0)
    .sort((a, b) => {
      if (a.count !== b.count) {
        return a.count - b.count;
      } else {
        return a.letter.charAt(0) - b.letter.charAt(0);
      }
    })[0].letter;
}

exports.run = function () {
  let input = utils.getInput('2016', 'day06', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
