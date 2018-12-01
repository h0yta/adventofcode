const utils = require("../util/fileUtil");
const runOne = function (length, input) {
  let myArray = createArray(length);
  let skip = 0;
  let pos = 0;
  input.forEach(x => {
    let tmp = rotateForward(myArray, pos)
      .slice(0, x)
      .reverse();
    myArray.spliceArray(0, x, tmp);
    myArray = rotateBackward(myArray, pos);
    pos = (pos + x + skip++) % myArray.length;
  });

  return myArray[0] * myArray[1];
};

const runTwo = function (input) {
  return 0;
};

Array.prototype.spliceArray = function (index, n, array) {
  return Array.prototype.splice.apply(this, [index, n].concat(array));
}

const createArray = function (length) {
  return Array.from(Array(length).keys());
}

const rotateForward = function (arr, no) {
  while (no-- > 0) {
    arr.push(arr.shift())
  }
  return arr
}

const rotateBackward = function (arr, no) {
  while (no-- > 0) {
    arr.unshift(arr.pop())
  }
  return arr
}

exports.run = function () {
  let input1 = utils.getInput('2017', 'day10', '\,').map(x => parseInt(x));
  console.log("Control (first) sum is", runOne(256, input1));
  let input2 = utils.getInput('2017', 'day10', '').join('');
  console.log("Control (first) sum is", runTwo(input2));
};

exports.runOne = runOne;
exports.runTwo = runTwo;