const utils = require('../util/fileUtil');

const runOne = function (input) {
  let sum = 0;
  input.forEach(line => {
    let max = line.split('\t')
      .map(x => parseInt(x))
      .reduce((prev, curr) => curr > prev ? curr : prev);
    let min = line.split('\t')
      .map(x => parseInt(x))
      .reduce((prev, curr) => curr < prev ? curr : prev);

    sum += (max - min);
  });

  return sum;
}

const runTwo = function (input) {
  let sum = 0;
  input.forEach(line => {
    line.split('\t').map(x => parseInt(x)).forEach(num1 => {
      line.split('\t').map(x => parseInt(x)).forEach(num2 => {
        if (num1 % num2 === 0 && num1 !== num2) {
          sum += num1 / num2;
        }
      });
    });
  });

  return sum;
}

exports.run = function () {
  let input = utils.getInput('2017', 'day02', '\n');
  console.log('Corruption (first) checksum', runOne(input));
  console.log('Corruption (second) checksum', runTwo(input));
}

exports.runOne = runOne;
exports.runTwo = runTwo;