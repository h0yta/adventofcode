const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let nonEngineParts = 0;
  for (let row = 0; row < input.length; row++) {
    let matches = input[row].match(/(\d+)/g);
    if (matches === null) continue;
    let index = 0;
    nonEngineParts += matches.map(match => {
      index += input[row].substring(index).indexOf(match);
      if (row >= 1) {
        let over = input[row - 1].substring(index - 1, index + match.length + 1);
        if (!/^[\.\d]+$/.test(over)) {
          index += match.length;
          return 0;
        }
      }

      if (index > 0) {
        let before = input[row].substring(index - 1, index);
        if (!/^[\.\d]+$/.test(before)) {
          index += match.length;
          return 0;
        }
      }

      if (index + match.length < input[row].length) {
        let after = input[row].substring(index + match.length, index + match.length + 1);
        if (!/^[\.\d]+$/.test(after)) {
          index += match.length;
          return 0;
        }
      }

      if (row + 1 < input.length) {
        let under = input[row + 1].substring(index - 1, index + match.length + 1);
        if (!/^[\.\d]+$/.test(under)) {
          index += match.length;
          return 0;
        }
      }

      index += match.length;
      return parseInt(match);
    }).reduce((a, b) => a + b);
  }

  let allNumbers = input
    .flatMap(row => row.match(/\d+/g))
    .filter(x => x !== null)
    .map(x => parseInt(x));
  let engineParts = allNumbers.reduce((a, b) => a + b);

  return engineParts - nonEngineParts;
}

const secondStar = (input) => {
  let nonEngineParts = 0;
  for (let row = 0; row < input.length; row++) {
    let matches = input[row].match(/(\*)/g);
    if (matches === null) continue;
    let index = 0;
    nonEngineParts += matches.map(match => {
      let engines = [];
      index += input[row].substring(index).indexOf(match);
      if (row >= 1) {
        let over = input[row - 1].substring(index - 1, index + match.length + 1);
        if (/\d+/.test(over)) {
          engines.push(...findNumbers(input, row - 1, index, index + match.length));
        }
      }

      if (index > 0) {
        let before = input[row].substring(index - 1, index);
        if (/\d+/.test(before)) {
          engines.push(...findNumbers(input, row, index, index));
        }
      }

      if (index + match.length < input[row].length) {
        let after = input[row].substring(index + match.length, index + match.length + 1);
        if (/\d+/.test(after)) {
          engines.push(...findNumbers(input, row, index + match.length, index + match.length));
        }
      }

      if (row + 1 < input.length) {
        let under = input[row + 1].substring(index - 1, index + match.length + 1);
        if (/\d+/.test(under)) {
          engines.push(...findNumbers(input, row + 1, index, index + match.length));
        }
      }

      index += match.length;
      if (engines.length === 2) {
        return engines.reduce((a, b) => a * b, 1);
      } else {
        return 0;
      }
    }).reduce((a, b) => a + b);
  }

  return nonEngineParts;
}

const findNumbers = (input, row, start, end) => {
  let newStart = findStart(input, row, start);
  let newEnd = findEnd(input, row, end);
  return input[row]
    .substring(newStart, newEnd)
    .match(/(\d+)/g)
    .map(x => parseInt(x));
}

const findStart = (input, row, start) => {
  if (/\d/.test(input[row].substring(start - 1, start))) {
    return findStart(input, row, start - 1);
  } else {
    return start;
  }
}

const findEnd = (input, row, end) => {
  if (/\d/.test(input[row].substring(end, end + 1))) {
    return findEnd(input, row, end + 1);
  } else {
    return end;
  }
}

exports.run = () => {
  let input = utils.getInput('2023', 'day03', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
