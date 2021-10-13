const utils = require('../util/fileUtil');

const firstStar = function (input) {
  return input.map(parseRoomString)
    .filter(room => room.validRoom)
    .map(room => room.sectorId)
    .reduce((a, b) => a + b, 0);
}

const secondStar = function (input) {
  let decryptedNames = input.map(parseRoomString)
    .filter(room => room.validRoom)
    .filter(name => name.decryptedName == 'northpole object storage');
  return decryptedNames[0].sectorId;
}

const parseRoomString = (roomString) => {
  let instrRegex = /^(.+)-(\d+)\[(\w+)\]/;
  let match = instrRegex.exec(roomString.trim());
  if (match === null) {
    console.log('Found no match for', roomString);
  } else {
    let name = match[1].trim();
    let cleanName = name
      .replace(/-/g, '')
      .split('')
      .sort()
      .join('');
    let sectorId = parseInt(match[2].trim());
    let checksum = match[3].trim();
    let letterCounts = countLetters(cleanName);
    return {
      "name": name,
      "decryptedName": decryptName(name, sectorId),
      "sectorId": sectorId,
      "letterCounts": letterCounts,
      "checksum": checksum,
      "validRoom": isRoomValid(letterCounts, checksum)
    }
  }
}

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const countLetters = (string) => {
  return letters.map(letter => {
    return {
      letter: letter,
      count: string.split(letter).length - 1
    }
  }).filter(letterCount => letterCount.count > 0)
    .sort((a, b) => {
      if (a.count !== b.count) {
        return b.count - a.count;
      } else {
        return b.letter.charAt(0) - a.letter.charAt(0);
      }
    });
}

const isRoomValid = (letterCounts, checksum) => {
  let checksumArray = checksum.split('');
  for (let i = 0; i < checksumArray.length; i++) {
    if (letterCounts[i].letter !== checksumArray[i]) {
      return false;
    }
  }

  return true;
}

const decryptName = (name, sectorId) => {
  return name.split('')
    .map(letter => {
      if (letter === '-') {
        return ' ';
      } else {
        let currentIndex = letters.indexOf(letter);
        let reminder = sectorId % letters.length;
        let newIndex = (currentIndex + reminder) % letters.length;
        return letters[newIndex];
      }
    }).join('');
}

exports.run = function () {
  let input = utils.getInput('2016', 'day04', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
