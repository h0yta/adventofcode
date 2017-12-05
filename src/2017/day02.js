const utils = require('../util/fileUtil');

const runOne = function () {
  let sum = 0;
  var lines = utils.getInput('day02', '\n');
  lines.forEach(line => {
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    line.split('\t').forEach(function (element) {
      let parsedNumber = parseInt(element);
      if (parsedNumber > max) {
        max = parsedNumber;
      }

      if (parsedNumber < min) {
        min = parsedNumber;
      }
    });

    sum += (max - min);
  });

  console.log('sum', sum);
  return sum;
}

const runTwo = function () {
  let sum = 0;
  var lines = utils.getInput('day02', '\n');
  lines.forEach(line => {
    line.split('\t').forEach(num1 => {
      line.split('\t').forEach(num2 => {
        if (parseInt(num1) % parseInt(num2) === 0 && num1 !== num2) {
          sum += (parseInt(num1) / parseInt(num2));
        }
      });
    });
  });

  console.log('sum', sum);
  return sum;
}

exports.run = function () {
  runOne();
  runTwo();
}

exports.runOne = runOne;
exports.runTwo = runTwo;