const utils = require('../util/fileUtil');

const firstStar = (input, turns) => {
  return solve(input, turns);
}

const secondStar = (input, turns) => {
  return solve(input, turns);
}

function solve(input, turns) {
  let template = input[0];
  let rules = input[1];

  let nextPairs = createNextPairs(rules);
  let pairCounts = runIterations(nextPairs, template, turns);
  let charCounts = calculateCharCounts(template, pairCounts);

  let countValues = Object.values(charCounts);
  return Math.max(...countValues) - Math.min(...countValues);
}

const createNextPairs = (rules) => {
  return rules.split('\n').reduce((acc, rule) => {
    const [left, right] = rule.split(' -> ');
    acc[left] = [left[0] + right, right + left[1]];
    return acc;
  }, {});
}

const constructPairCounts = (template) => {
  let pairCounts = {};
  for (let i = 0; i < template.length - 1; i++) {
    const pair = template.slice(i, i + 2);
    pairCounts[pair] = (pairCounts[pair] ?? 0) + 1;
  }
  return pairCounts;
}

const runIterations = (nextPairs, template, turns) => {
  let pairCounts = constructPairCounts(template);
  for (let step = 0; step < turns; step++) {
    let nextCounts = {};
    for (let pair in pairCounts) {
      for (let nextPair of nextPairs[pair]) {
        nextCounts[nextPair] = (nextCounts[nextPair] ?? 0) + pairCounts[pair];
      }
    }
    pairCounts = nextCounts;
  }

  return pairCounts;
}

const calculateCharCounts = (template, pairCounts) => {
  let charCounts = {
    [template[0]]: 1,
  };

  for (let pair in pairCounts) {
    charCounts[pair[1]] = (charCounts[pair[1]] ?? 0) + pairCounts[pair];
  }

  return charCounts;
}

exports.run = () => {
  let input = utils.getInput('2021', 'day14', '\n\n');
  console.log('Answer for first star', firstStar(input, 10));
  console.log('Answer for second star', secondStar(input, 40));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
