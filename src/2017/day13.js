const utils = require("../util/fileUtil");

const runOne = function (input) {

  return 0;
};

const runTwo = function (input) {

  return 0;
};

exports.run = function () {
  let input = utils.getInput('day13', '\n');
  console.log("Number of programs (first)", runOne(input));
  console.log("Number of programs (second)", runTwo(input));
};

exports.runOne = runOne;
exports.runTwo = runTwo;