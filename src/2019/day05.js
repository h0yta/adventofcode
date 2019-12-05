const utils = require('../util/fileUtil');

const firstStar = function (input, inputParam) {
  let i = 0;
  let output;
  while (true) {
    let func = input[i];
    if (func === 99) {
      return output;
    }

    func = func % 10;
    let firstInst = parseInt((input[i] / 100) % 10);
    let secondInst = parseInt((input[i] / 1000) % 10);

    let firstParam = input[i + 1];
    let secondParam = input[i + 2];
    let thirdParam = input[i + 3];

    if (func === 1) {
      input[thirdParam] = getValue(input, firstParam, firstInst) + getValue(input, secondParam, secondInst);
      i = i + 4;
    } else if (func === 2) {
      input[thirdParam] = getValue(input, firstParam, firstInst) * getValue(input, secondParam, secondInst);
      i = i + 4;
    } else if (func === 3) {
      input[firstParam] = inputParam;
      i = i + 2;
    } else if (func === 4) {
      output = getValue(input, firstParam, firstInst);
      i = i + 2;
    }
  }
}

const secondStar = function (input, inputParam) {
  let i = 0;
  let output = 0;
  while (true) {
    let func = input[i];
    if (func === 99) {
      return output;
    }

    func = func % 10;
    let firstInst = parseInt((input[i] / 100) % 10);
    let secondInst = parseInt((input[i] / 1000) % 10);

    let firstParam = input[i + 1];
    let secondParam = input[i + 2];
    let finalParam = input[i + 3];

    if (func === 1) {
      input[finalParam] = getValue(input, firstParam, firstInst) + getValue(input, secondParam, secondInst);
      i = i + 4;
    } else if (func === 2) {
      input[finalParam] = getValue(input, firstParam, firstInst) * getValue(input, secondParam, secondInst);
      i = i + 4;
    } else if (func === 3) {
      input[firstParam] = inputParam;
      i = i + 2;
    } else if (func === 4) {
      output = getValue(input, firstParam, firstInst);
      i = i + 2;
    } else if (func === 5) {
      if (getValue(input, firstParam, firstInst) != 0) {
        i = getValue(input, secondParam, secondInst);
      } else {
        i = i + 3;
      }
    } else if (func === 6) {
      if (getValue(input, firstParam, firstInst) === 0) {
        i = getValue(input, secondParam, secondInst);
      } else {
        i = i + 3;
      }
    } else if (func === 7) {
      if (getValue(input, firstParam, firstInst) < getValue(input, secondParam, secondInst)) {
        input[finalParam] = 1;
      } else {
        input[finalParam] = 0;
      }
      i = i + 4;
    } else if (func === 8) {
      if (getValue(input, firstParam, firstInst) === getValue(input, secondParam, secondInst)) {
        input[finalParam] = 1;
      } else {
        input[finalParam] = 0;
      }
      i = i + 4;
    }
  }
}

const getValue = function (input, pos, inst) {
  if (inst === 0) {
    return input[pos];
  } else {
    return pos;
  }
}

exports.run = () => {
  let input = utils.getInput('2019', 'day05', ',');

  console.log('Answer for first star', firstStar(input.map(x => parseInt(x)), 1));
  console.log('Answer for second star', secondStar(input.map(x => parseInt(x)), 5));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;