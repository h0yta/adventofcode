const utils = require("../util/fileUtil");
const runOne = function (input) {
  let results = {};
  input.forEach(row => {
    let parts = row.split(' ').map(x => x.trim());

    if (results[parts[0]] === undefined) {
      results[parts[0]] = 0;
    }

    if (eval(results, parts[4], parts[5], parseInt(parts[6]))) {
      if (parts[1] === 'inc') {
          results[parts[0]] += parseInt(parts[2]);
      } else {
          results[parts[0]] -= parseInt(parts[2]);
      }
    }
  });

  return Math.max.apply( null, 
    Object.keys(results).map(key => results[key]));
};

const runTwo = function (input) {
  let maxValue = 0;
  let results = {};
  input.forEach(row => {
    let parts = row.split(' ').map(x => x.trim());

    if (results[parts[0]] === undefined) {
      results[parts[0]] = 0;
    }

    if (eval(results, parts[4], parts[5], parseInt(parts[6]))) {
      if (parts[1] === 'inc') {
          results[parts[0]] += parseInt(parts[2]);
      } else {
          results[parts[0]] -= parseInt(parts[2]);
      }
    }

    if (results[parts[0]] > maxValue) {
      maxValue = results[parts[0]];
    }
  });

  return maxValue;
};

const eval = function(results, argument, operator, value) {
  if (results[argument] === undefined) {
    results[argument] = 0;
  }

  switch (operator) {
    case '>':
      return results[argument] > value;
    case '<':
      return results[argument] < value;
    case '>=':
      return results[argument] >= value;
    case '<=':
      return results[argument] <= value;
    case '==':
      return results[argument] == value;
    case '!=':
      return results[argument] != value;
  }
}

exports.run = function () {
  let input = utils.getInput("day08", "\n");
  console.log("Largest (first) register input is", runOne(input));
  console.log("Largest (second) register input is", runTwo(input));
};

exports.runOne = runOne;
exports.runTwo = runTwo;
