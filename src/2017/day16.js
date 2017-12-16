const utils = require("../util/fileUtil");

const runOne = function (line, input) {
  line = line.split('');
  input.forEach(arg => {
    line = spin(arg, line);
    line = exchange(arg, line);
    line = partner(arg, line);
  });

  return line.join('');
};

const runTwo = function (line, input, dances) {
  line = line.split('');
  let seen = [];
  for (i = 0; i < dances; i++) {
    input.forEach(arg => {
      line = spin(arg, line);
      line = exchange(arg, line);
      line = partner(arg, line);
    });

    if (seen.indexOf(line.join('')) === 0) {
      return seen[(dances % (i + 1))];
    }

    seen.push(line.join(''));
  }
};

const spin = function (arg, line) {
  let match = /^s(\d+)$/.exec(arg);
  if (match) {
    let no = parseInt(match[1]);
    while (no-- > 0) {
      line.unshift(line.pop());
    }
  }
  return line;
}

const exchange = function (arg, line) {
  let match = /^x(\d+)\/(\d+)$/.exec(arg);
  if (match) {
    let a = parseInt(match[1]);
    let b = parseInt(match[2]);
    line[a] = line.splice(b, 1, line[a])[0];
  }
  return line;
}

const partner = function (arg, line) {
  let match = /^p(\w+)\/(\w+)$/.exec(arg);
  if (match) {
    let a = line.indexOf(match[1]);
    let b = line.indexOf(match[2]);
    line[a] = line.splice(b, 1, line[a])[0];
  }
  return line;
}

exports.run = function () {
  let input = utils.getInput('day16', ',');

  console.log("Outpur after 1 dance (first)", runOne('abcdefghijklmnop', input));
  console.log("Outpur after 1000000000 dance (second)", runTwo('pkgnhomelfdibjac', input, 1000000000));
};

exports.runOne = runOne;
exports.runTwo = runTwo;

exports.spin = spin;
exports.exchange = exchange;
exports.partner = partner;