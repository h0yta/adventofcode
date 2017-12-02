const utils = require('../util/fileUtil');

let sumOne = 0;
let sumTwo = 0;

const runOne = function () {
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

    sumOne += (max - min);
  });

  console.log('sumOne', sumOne);
}

const runTwo = function () {
  var lines = utils.getInput('day02', '\n');
  lines.forEach(line => {
    line.split('\t').forEach(num1 => {
      line.split('\t').forEach(num2 => {
        if (parseInt(num1) % parseInt(num2) === 0 && num1 !== num2) {
          sumTwo += (parseInt(num1) / parseInt(num2));
        }
      });
    });
  });

  console.log('sumTwo', sumTwo);
}

exports.run = function () {
  runOne();
  runTwo();
}