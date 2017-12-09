const utils = require("../util/fileUtil");
const runOne = function (input) {
  return go(input).score;
};

const runTwo = function (input) {
  return go(input).garbageCount;
};

const go = function (input) {
  let garbageMode = false;
  let skipnext = false;
  let level = 0;
  let score = 0;
  let garbageCount = 0;

  for (index = 0; index < input.length; index++) {
    if (skipnext) {
      skipnext = false;
    } else if (input[index] === '!') {
      skipnext = true;
    } else if (input[index] === '{' && !garbageMode) {
      level++;
    } else if (input[index] === '}' && !garbageMode) {
      score += level;
      level--;
    } else if (input[index] === '<' && !garbageMode) {
      garbageMode = true;
    } else if (input[index] === '>' && garbageMode) {
      garbageMode = false;
    } else if (garbageMode) {
      garbageCount++;
    }
  }

  return {
    'score': score,
    'garbageCount': garbageCount
  }
}

exports.run = function () {
  let input = utils.getInput('day09', '');
  console.log("Total (first) score is", runOne(input));
  console.log("Total (second) score is", runTwo(input));
};

exports.runOne = runOne;
exports.runTwo = runTwo;