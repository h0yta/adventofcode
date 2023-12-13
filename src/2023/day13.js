const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let patterns = parsePatterns(input);
  return patterns.map(pattern => {
    let row = findFirstReflectionRow(pattern, 0);
    let col = findFirstReflectionRow(flip(pattern), 0);
    return row > 0 ? row * 100 : col;
  }).reduce((a, b) => a + b);
}

const secondStar = (input) => {
  let patterns = parsePatterns(input);
  return patterns.map(pattern => {
    let row = findFirstReflectionRow(pattern, 1);
    let col = findFirstReflectionRow(flip(pattern), 1);
    return row > 0 ? row * 100 : col;
  }).reduce((a, b) => a + b);
}

const findFirstReflectionRow = (pattern, smudge) => {
  for (let i = 0; i < pattern.length - 1; i++) {
    if (allArrayMatch(pattern, i, smudge)) {
      return i + 1;
    }
  }
  return 0;
}

const arrayLengthMatch = (a, b) => {
  return a.length === b.length ? a.length - a.filter((e, i) => e === b[i]).length : Number.MAX_SAFE_INTEGER;
}

const allArrayMatch = (pattern, s, smudge) => {
  let diff = smudge;
  for (let i = 0; pattern[s - i] && pattern[s + i + 1]; i++) {
    diff -= arrayLengthMatch(pattern[s - i], pattern[s + i + 1]);
    if (diff < 0) {
      return false;
    }
  }
  return diff === 0;
}

const flip = (pattern) => {
  let copy = new Array(pattern[0].length)
    .fill('').map(() => new Array());
  for (let y = 0; y < pattern.length; y++) {
    for (let x = 0; x < pattern[y].length; x++) {
      copy[x][y] = pattern[y][x];
    }
  }

  return copy;
}

const parsePatterns = (input) => {
  let parsed = [];
  let tmp = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '') {
      parsed.push(tmp);
      tmp = [];
    } else {
      tmp.push(input[i].split(''));
    }
  }
  parsed.push(tmp);
  return parsed;
}

exports.run = () => {
  let input = utils.getInput('2023', 'day13', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
