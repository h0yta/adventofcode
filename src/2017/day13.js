const utils = require("../util/fileUtil");

const runOne = function (input) {
  let layers = input.map(parseRow);
  let severity = 0;
  layers.forEach(layer => {
    if (layer.layer % ((layer.length - 1) * 2) === 0) {
      severity += layer.layer * layer.length;
    }
  });

  return severity;
};

const runTwo = function (input) {
  let layers = input.map(parseRow);
  let delay = 0, searching = true;
  while (searching) {
    searching = false;
    layers.forEach(layer => {
      if ((layer.layer + delay) % ((layer.length - 1) * 2) === 0) {
        searching = true;
        delay++;
      }
    });
  }
  return delay;
};

exports.run = function () {
  let input = utils.getInput('day13', '\n');
  console.log("Number of programs (first)", runOne(input));
  console.log("Number of programs (second)", runTwo(input));
};

const parseRow = function (row) {
  let arr = row.split(':').map(x => x.trim());
  return {
    "layer": parseInt(arr[0]),
    "length": parseInt(arr[1])
  }
}

exports.runOne = runOne;
exports.runTwo = runTwo;