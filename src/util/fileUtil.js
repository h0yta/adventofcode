const fs = require('fs');

exports.getInput = function (year, filename, splitter) {
  let file = fs.readFileSync('./data/' + year + '/' + filename, 'utf8');
  return file.split(splitter);
}

exports.pad = function (n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

exports.copyArray = function (array) {
  return array.map(x => ({ ...x }))
}

const flatten = function (arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
exports.flatten = flatten;