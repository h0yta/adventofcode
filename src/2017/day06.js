const utils = require("../util/fileUtil");

const runOne = function (input) {
  return 0;
};

const runTwo = function (input) {
  return 0;
};

exports.run = function () {
  let input = utils.getInput("day06", "\n");
  console.log("Text", runOne(input));
  console.log("Text", runTwo(input));
};

exports.runOne = runOne;
exports.runTwo = runTwo;