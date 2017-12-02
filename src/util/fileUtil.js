const fs = require('fs');

exports.getInput = function (filename, splitter) {
  let file = fs.readFileSync('./data/' + filename, 'utf8');
  return file.split(splitter);
}

exports.pad = function (n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}