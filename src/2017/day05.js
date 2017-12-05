const utils = require("../util/fileUtil");

const runOne = function(input) {
  let jumps = 0;
  let index = 0;
  while (index < input.length) {
    let instruction = parseInt(input[index]);
    input[index] += 1;
    index += instruction;
    jumps++;
  }

  console.log("Number of jumps to quit maze (first) is", jumps);
  return jumps;
};

const runTwo = function(input) {
  let jumps = 0;
  let index = 0;
  while (index < input.length && index > -1) {
    let instruction = parseInt(input[index]);
    if (instruction >= 3) {
      input[index] -= 1;
    } else {
      input[index] += 1;
    }
    index += instruction;
    jumps++;
  }
  
  console.log("Number of jumps to quit maze (second) is", jumps);
  return jumps;
};

exports.run = function() {
  let input = utils.getInput("day05", "\n");
  runOne(input);
  runTwo(input);
};

exports.runOne = runOne;
exports.runTwo = runTwo;