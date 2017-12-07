const utils = require("../util/fileUtil");
const runOne = function (input) {
  return 0;
};

const runTwo = function (input) {
  return 0;
};


exports.run = function () {
  let input = utils.getInput("day07", "\t").map(x => parseInt(x));
  console.log("Number of (first) redistribution cycles", runOne(input));
  console.log("Number of (first) redistribution cycles", runTwo(input));
};

exports.runOne = runOne;
exports.runTwo = runTwo;
