const utils = require('../util/fileUtil');

const runOne = function (input) {
  let pos = findPos(0, 0, input);
  let noPerLine = parseInt((pos.lap * 2 + 1) / 2);
  let posOnLine = noPerLine <= 0 ? 0 : (pos.lapLastPos % noPerLine) - 1;
  if (posOnLine < 0) posOnLine = posOnLine * -1;
  pos.lapLastPos = posOnLine === 0 ? 0 : (noPerLine - posOnLine);
  let steps = pos.lapLastPos + pos.lap;
  console.log(input + ' carries ' + steps + ' steps');
}

const findPos = function (y, sum, input) {
  if ((sum + (y * 8) + 1) >= input) {
    return {
      'lap': y,
      'lapLastPos': (input - sum)
    };
  }
  let newSum = sum + (y * 8) + 1;
  return findPos(++y, newSum, input);
}

exports.run = function () {
  runOne(1);
  runOne(12);
  runOne(23);
  runOne(1024);
  runOne(312051);
}