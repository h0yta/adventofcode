const utils = require("../util/fileUtil");

let dividerAB = 2147483647;

const runOne = function (startA, startB, rounds) {
  let matching = 0;
  for (i = 1; i < rounds; i++) {
    startA = (startA * 16807) % 2147483647;
    startB = (startB * 48271) % 2147483647;

    if ((startA & 0xFFFF) == (startB & 0xFFFF)) {
      matching++;
    }
  }

  return matching;
};

const runTwo = function (startA, startB, rounds) {
  let matching = 0;
  for (i = 1; i < rounds; i++) {
    do {
      startA = (startA * 16807) % 2147483647;
    } while (startA & 3);
    do {
      startB = (startB * 48271) % 2147483647;
    } while (startB & 7);

    if ((startA & 0xFFFF) == (startB & 0xFFFF)) {
      matching++;
    }
  }

  return matching;
};

exports.run = function () {
  //console.log("Number of programs (first)", runOne(783, 325, 40000000));
  console.log("Number of programs (second)", runTwo(783, 325, 5000000));
};

exports.runOne = runOne;
exports.runTwo = runTwo;