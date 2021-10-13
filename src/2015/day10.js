const utils = require('../util/fileUtil');

const firstStar = function (input, turns) {
  for (let turn = 0; turn < turns; turn++) {
    input = lookAndSay(input);
  }
  return input.length;
}

const lookAndSay = (input) => {
  let groups = findGroups(input);
  return groups.map(group => group.length + group.charAt(0)).join('');
}

const findGroups = (input) => {
  let groups = [];
  let lastChar = '';
  let group = '';
  for (let i = 0; i < input.length; i++) {
    let currentChar = input.charAt(i);

    if (currentChar !== lastChar && group !== '') {
      groups.push(group);
      group = '';
    }

    group += currentChar;
    lastChar = currentChar;
  }

  groups.push(group);
  return groups;
}

const secondStar = function (input, turns) {
  for (let turn = 0; turn < turns; turn++) {
    input = lookAndSay(input);
  }
  return input.length;
}

exports.run = function () {
  let input = utils.getInput('2015', 'day10', '\n');
  console.log('Answer for first star', firstStar(input[0], 40));
  console.log('Answer for second star', secondStar(input[0], 50));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
