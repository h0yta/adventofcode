const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let json = JSON.parse(input);
  return scanJson(json)
    .filter(x => isNumber(x))
    .reduce((x, y) => x + y, 0);
}

const secondStar = function (input) {
  let json = JSON.parse(input);
  return scanJsonIgnoreRed(json)
    .filter(x => isNumber(x))
    .reduce((x, y) => x + y, 0);
}

const scanJson = (json) => {
  let values = [];
  if (json instanceof Object) {
    for (let k in json) {
      if (json.hasOwnProperty(k)) {
        values = values.concat(scanJson(json[k]));
      }
    }
  } else {
    return json;
  }
  return values;
};

const scanJsonIgnoreRed = (json) => {
  let values = [];
  if (Array.isArray(json)) {
    for (let k in json) {
      if (json.hasOwnProperty(k)) {
        values = values.concat(scanJsonIgnoreRed(json[k]));
      }
    }
  } else if (json instanceof Object) {
    for (let k in json) {
      if (json.hasOwnProperty(k)) {
        if (json[k] === 'red') {
          return [];
        }
        values = values.concat(scanJsonIgnoreRed(json[k]));
      }
    }
  } else {
    return json;
  }
  return values;
};

const isNumber = (value) => {
  return typeof value == 'number';
}

exports.run = function () {
  let input = utils.getCompleteInput('2015', 'day12');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
