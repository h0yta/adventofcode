const utils = require('../util/fileUtil');

const SCORES_STAR_ONE = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137
}

const firstStar = (input) => {
  return input
    .map(row => removeAllValidPairs(row))
    .map(row => calculateScoreForUnmatchedPair(row))
    .reduce((acc, cur) => acc += cur);
}

const SCORES_STAR_TWO = {
  ")": 1,
  "]": 2,
  "}": 3,
  ">": 4
}

const secondStar = (input) => {
  input = input
    .map(row => removeAllValidPairs(row))
    .map(row => findUnfinishedPairs(row))
    .filter(row => row !== null)
    .map(row => flipAndInvertChars(row))
    .map(row => calculateScoreForUnfinishedPairs(row))
    .sort((a, b) => a - b);
  return input[Math.floor(input.length / 2)];
}

const removeAllValidPairs = (input) => {
  while (true) {
    let oldLength = input.length
    input = removeValidPair(input);
    if (oldLength === input.length) {
      return input;
    }
  }
}

const removeValidPair = (input) => {
  return input
    .replace(/\(\)/g, '')
    .replace(/\[\]/g, '')
    .replace(/\{\}/g, '')
    .replace(/\<\>/g, '');
}

const calculateScoreForUnmatchedPair = (input) => {
  let ruleRegexp = /([\(\[\{\<])([\)\]\}\>])/;
  let match = ruleRegexp.exec(input);
  if (match === null) {
    return 0;
  } else {
    return SCORES_STAR_ONE[match[2]]
  }
}

const findUnfinishedPairs = (input) => {
  let ruleRegexp = /([\(\[\{\<])([\)\]\}\>])/;
  let match = ruleRegexp.exec(input);
  if (match === null) {
    return input;
  } else {
    return null;
  }
}

const flipAndInvertChars = (input) => {
  return input.split('')
    .reverse()
    .map(char => {
      switch (char) {
        case '(': return ')';
        case '[': return ']';
        case '{': return '}';
        case '<': return '>';
      }
    })
    .join('');
}

const calculateScoreForUnfinishedPairs = (input) => {
  let score = 0;

  for (let i = 0; i < input.length; i++) {
    score *= 5;
    score += SCORES_STAR_TWO[input[i]];
  }

  return score;
}

exports.run = () => {
  let input = utils.getInput('2021', 'day10', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
