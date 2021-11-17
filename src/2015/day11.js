const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return findNextPassword(input);
}

const secondStar = function (input) {
  return findNextPassword(input);
}

const findNextPassword = (password) => {
  password = resetPassword(password);
  password = increase(password);

  while (!matchesAllCriterias(password)) {
    password = increase(password);
  }

  return password;
}

const MIN = ('a'.charCodeAt(0));
const MAX = ('z'.charCodeAt(0));
const INVALID = ['i', 'l'];

const resetPassword = (password) => {
  for (let i = 0; i < password.length; i++) {
    let value = password.charCodeAt(i);

    if (INVALID.includes(String.fromCharCode(value))) {
      value += 1;
      password = password.replaceAt(i, String.fromCharCode(value));
      for (let j = i + 1; j < password.length; j++) {
        password = password.replaceAt(j, String.fromCharCode(MIN));
      }

      break;
    }
  }

  return password;
}

const increase = (password) => {
  for (let i = password.length - 1; i >= 0; i--) {
    let value = password.charCodeAt(i);

    value++;
    if (value > MAX) {
      value = MIN;
    } else if (INVALID.includes(String.fromCharCode(value))) {
      value++;
    }

    password = password.replaceAt(i, String.fromCharCode(value));

    if (value > MIN) break;
  }

  return password;
}

const matchesAllCriterias = (password) => {
  return containsStraight(password)
    && containsTwoPairs(password);
}

const containsStraight = (password) => {
  for (let i = 2; i < password.length; i++) {
    if (password.charCodeAt(i - 1) - password.charCodeAt(i - 2) === 1 && password.charCodeAt(i) - password.charCodeAt(i - 1) === 1) {
      return true;
    }
  }
  return false;
}

const containsTwoPairs = (password) => {
  let pairs = [];
  for (let i = 1; i < password.length;) {
    if (password.charAt(i - 1) === password.charAt(i) && !pairs.includes(password.charAt(i))) {
      pairs.push(password.charAt(i));
      i += 2;
    } else {
      i += 1;
    }
  }

  return pairs.length >= 2;
}

exports.run = function () {
  console.log('Answer for first star', firstStar('hxbxwxba'));
  console.log('Answer for second star', secondStar('hxbxxyzz'));
}

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
