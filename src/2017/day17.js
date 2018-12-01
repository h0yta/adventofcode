const utils = require("../util/fileUtil");
let rounds = 2018;

const runOne = function (steps) {
  let spinlock = [0];
  let pos = 0;
  for (i = 1; i < 2018; i++) {
    pos = ((pos + steps) % spinlock.length) + 1;
    spinlock.splice(pos, 0, i);
  }
  return spinlock[pos + 1];
};

const runTwo = function (steps) {
  let pos = 0;
  let value = 0;
  for (i = 1; i < 50000000; i++) {
    pos = ((pos + steps) % i) + 1;
    if (pos === 1) {
      value = i;
    }
  }
  return value;
};

exports.run = function () {
  let input = 367;

  console.log("The value after 2017 (first)", runOne(input));
  console.log("The value after 2017 (second)", runTwo(input));
};

exports.runOne = runOne;
exports.runTwo = runTwo;