const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input.map(parseIPv7Address)
    .filter(ipv7 => isAnyAbba(ipv7.allowed))
    .filter(ipv7 => !isAnyAbba(ipv7.disallowed))
    .length;
}

const secondStar = function (input) {
  return input.map(parseIPv7Address)
    .map(ipv7 => {
      ipv7.matches = findAba(ipv7.allowed);
      return ipv7;
    })
    .filter(ipv7 => {
      return ipv7.matches
        .filter(match => ipv7.disallowed.indexOf(match.bab) >= 0).length > 0;
    })
    .length;
}

const parseIPv7Address = (ipv7Address) => {
  let validPart = [];
  let invalidPart = [];

  let valid = true;
  for (let i = 0; i < ipv7Address.length; i++) {
    if (ipv7Address.charAt(i) === '[') {
      validPart.push(' ');
      valid = false;
    } else if (ipv7Address.charAt(i) === ']') {
      valid = true;
      invalidPart.push(' ');
    } else if (valid) {
      validPart.push(ipv7Address.charAt(i));
    } else {
      invalidPart.push(ipv7Address.charAt(i));
    }
  }

  return {
    "allowed": validPart.join(''),
    "disallowed": invalidPart.join('')
  }
}

const abbaRegex = /(\w)(?!\1)(\w)\2\1/;
const isAnyAbba = (ipv7Part) => {
  let match = abbaRegex.exec(ipv7Part.trim());
  if (match === null) {
    return false;
  } else {
    return true;
  }
}

const abaRegex = /(\w)(?!\1)(\w)\1/;
const findAba = (ipv7Part) => {
  let index = 0;
  let matches = [];
  while (true) {
    let sub = ipv7Part.substring(index, ipv7Part.length);
    let match = abaRegex.exec(sub);
    if (match === null) {
      return matches;
    } else {
      matches.push({
        "aba": match[0],
        "bab": match[2] + match[1] + match[2]
      });
      index = index + match.index + 1;
    }
  }
}

exports.run = function () {
  let input = utils.getInput('2016', 'day07', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
