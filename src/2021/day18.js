const utils = require('../util/fileUtil');
const debug = false;
const firstStar = (input) => {
  let summed = sum(input);
  return calculateMagnitude(summed);
}

const secondStar = (input) => {
  let sums = new Array();
  for (let first = 0; first < input.length; first++) {
    for (let second = 0; second < input.length; second++) {
      if (first === second) continue;
      let newInput = [input[first], input[second]];
      let summed = sum(newInput);
      sums.push({ first: input[first], second: input[second], sum: summed, magnitude: calculateMagnitude(summed) });
    }
  }

  let max = sums.reduce((acc, cur) => acc.magnitude > cur.magnitude ? acc : cur, { magnitude: 0 });
  return max.magnitude;
}

const sum = (input) => {
  let result = input[0];
  for (let i = 1; i < input.length; i++) {
    if (debug) console.log(result)
    if (debug) console.log('+', input[i])
    result = '[' + result + ',' + input[i] + ']';
    result = explodeAndSplit(result);
    if (debug) console.log('=', result)
    if (debug) console.log('')
  }
  return result;
}

const explodeAndSplit = (result) => {
  while (true) {
    let newResult = explode(result);
    newResult = split(newResult);
    if (newResult === result) {
      return result;
    }
    result = newResult;
  }
}

const explode = (input) => {
  // [[[[[9,8],1],2],3],4]
  let index = findIndexOfFifth(input);
  if (index === null) return input;

  let left = input.substring(0, index);
  let right = input.substring(index, input.length);
  if (debug) console.log('IN1', input)
  if (debug) console.log('IN2', left, '->', right)
  let explodeRegex = /(\[\d+,\d+\]).*/;
  let match = explodeRegex.exec(right);
  if (match === null) {
    return input;
  } else {
    let pair = match[1].replace(/[\[|\]]/g, '').split(',').map(x => parseInt(x));

    left = replaceLeft(left, pair[0]);
    right = right.replace(match[1], '');
    right = replaceRight(right, pair[1]);
    if (debug) console.log(pair, ':', left + '0' + right)
    if (debug) console.log('------')
    input = left + '0' + right;
    return explode(input);
  }

}

const replaceLeft = (input, add) => {
  let explodeRegex = /(.*[\[|,])(\d+)([,|\[|\]]*)$/;
  let match = explodeRegex.exec(input);
  if (match === null) {
    return input;
  } else {
    if (debug) console.log('FOUND LAST NUMBER IN', input, '->', match[2])
    let num = parseInt(match[2]) + add;
    return match[1] + num + match[3];
  }
}

const replaceRight = (input, add) => {
  let explodeRegex = /^([\]|,|\[]*)(\d+)(.*)/;
  let match = explodeRegex.exec(input);
  if (match === null) {
    return input;
  } else {
    if (debug) console.log('FOUND FIRST NUMBER IN', input, '->', match[2])
    let num = parseInt(match[2]) + add;
    return match[1] + num + match[3];
  }
}

const findIndexOfFifth = (input) => {
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === '[') counter++;
    else if (input.charAt(i) === ']') counter--;

    if (counter === 5) return i;
  }
  return null;
}

const split = (input) => {
  let ruleRegexp = /(\d\d)/;
  let match = ruleRegexp.exec(input);
  if (match === null) {
    return input;

  } else {
    let num = match[1];
    let left = Math.floor(num / 2);
    let right = Math.ceil(num / 2);
    let replace = '[' + left + ',' + right + ']';
    input = input.replace(num, replace);
    return input;
  }
}

const calculateMagnitude = (input) => {
  let ruleRegexp = /(\[\d+,\d+\])/;
  let match = ruleRegexp.exec(input);
  if (match === null) {
    return parseInt(input);
  } else {
    input = input.replace(match[1], sumMagnitude(match[1]));
    return calculateMagnitude(input);
  }
}

const sumMagnitude = (pair) => {
  let [left, right] = pair.replace('[', '').replace(']', '').split(',');
  return 3 * parseInt(left) + 2 * parseInt(right);
}

exports.run = () => {
  let input = utils.getInput('2021', 'day18.txt', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
exports.calculateMagnitude = calculateMagnitude;
exports.sum = sum;
exports.explode = explode;
exports.split = split;
exports.findIndexOfFifth = findIndexOfFifth;
