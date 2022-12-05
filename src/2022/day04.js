const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let pairs = input.map(row => getPairSections(row));

  let result = pairs.filter(pair =>
    containsAll(pair['one'], pair['two']) || containsAll(pair['two'], pair['one']))

  return result.length;
}

const secondStar = (input) => {
  let pairs = input.map(row => getPairSections(row));

  let result = pairs.filter(pair =>
    containsSome(pair['one'], pair['two']) || containsSome(pair['two'], pair['one']))

  return result.length;
}

const getPairSections = (row) => {
  // 2-4,6-8
  let pairs = row.split(',')
    .map(section => section.split('-')
      .map(x => parseInt(x)));

  return {
    'one': createRange(pairs[0][0], pairs[0][1]),
    'two': createRange(pairs[1][0], pairs[1][1])
  }
}

const createRange = (start, end) => {
  let result = new Array();
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

const containsAll = (arr1, arr2) => {
  return arr2.every(x => arr1.includes(x));
}

const containsSome = (arr1, arr2) => {
  return arr2.some(x => arr1.includes(x));
}

exports.run = () => {
  let input = utils.getInput('2022', 'day04', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
