const utils = require('../util/fileUtil');

const firstStar = function (input, noun, verb) {
  input[1] = BigInt(noun);
  input[2] = BigInt(verb);

  let i = 0;
  while (true) {
    let func = parseInt(input[i]);
    let firstPos = input[i + 1];
    let secondPos = input[i + 2];
    let finalPos = input[i + 3];

    if (func === 1) {
      input[finalPos] = input[firstPos] + input[secondPos];
    } else if (func === 2) {
      input[finalPos] = input[firstPos] * input[secondPos];
    } else if (func === 99) {
      return input[0];
    }

    i = i + 4;
  }
}

const secondStar = function (input) {
  for (noun = 0; noun <= 99; noun++) {
    for (verb = 0; verb <= 99; verb++) {
      let program = firstStar([...input], noun, verb);
      if (program === BigInt(19690720)) {
        return 100 * noun + verb;
      }
    }
  }

  return 0;
}

exports.run = function () {
  let input = utils.getInput('2019', 'day02', ',');

  console.log('Answer for first star', firstStar(input.map(x => BigInt(x)), 12, 2));
  console.log('Answer for second star', secondStar(input.map(x => BigInt(x))));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;