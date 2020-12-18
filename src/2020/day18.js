const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input.map(row => evaluateRowPartOne(row))
    .reduce((x, y) => x + y, 0);
}

const evaluateRowPartOne = function (row) {
  while (true) {
    let par = /\(([^())]+)\)/.exec(row);
    if (par !== null) {
      let parSum = evaluateLeftToRight(par[1]);
      row = row.replace(/\(([^())]+)\)/, parSum)
    } else {
      return evaluateLeftToRight(row);
    }
  }
}

const secondStar = function (input) {
  return input.map(row => evaluateRowPartTwo(row))
    .reduce((x, y) => x + y, 0);
}

const evaluateRowPartTwo = function (row) {
  while (true) {
    let par = /\(([^())]+)\)/.exec(row);
    if (par !== null) {
      let parSum = evaluateParenthesesPartTwo(par[1]);
      row = row.replace(/\(([^())]+)\)/, parSum)
    } else {
      return evaluateParenthesesPartTwo(row);
    }
  }
}

const evaluateParenthesesPartTwo = function (row) {
  while (true) {
    let par = /(\d+ \+ \d+)/.exec(row);
    if (par !== null) {
      let parSum = evaluateLeftToRight(par[1]);
      row = row.replace(/(\d+ \+ \d+)/, parSum)
    } else {
      return evaluateLeftToRight(row);
    }
  }
}

const evaluateLeftToRight = function (row) {
  let sum = 0;
  let operator = '';
  console.log(row);
  row.split(' ')
    .forEach(part => {
      if (/\d+/.test(part)) {
        if (sum === 0) {
          sum = parseInt(part);
        } else {
          switch (operator) {
            case '+':
              sum += parseInt(part);
              break;
            case '*':
              sum *= parseInt(part);
              break;
          }
        }
      } else {
        operator = part;
      }
    })
  return sum;
}

exports.run = function () {
  let input = utils.getInput('2020', 'day18', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
exports.evaluateRowPartTwo = evaluateRowPartTwo;
