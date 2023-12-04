const utils = require('../util/fileUtil');

const firstStar = (input) => {
  return input
    .map(parseCard)
    .map(card => intersect(card.winningNumber, card.lottoryNumber).length)
    .map(correct => correct > 0 ? Math.pow(2, correct - 1) : 0)
    .reduce((a, b) => a + b);
}

const secondStar = (input) => {
  let cards = [];
  input
    .map(parseCard)
    .map(card => intersect(card.winningNumber, card.lottoryNumber).length)
    .reverse()
    .forEach(point => {
      if (point > 0) {
        cards.push(cards.slice(-point).reduce((a, b) => a + b) + 1);
      } else {
        cards.push(1);
      }
    });

  return cards.reduce((a, b) => a + b);
}

const intersect = (arr1, arr2) => {
  return arr1.filter(x => arr2.includes(x))
}

const parseCard = (row) => {
  let rowRegex = /^Card\s+(\d+):([\d\s]+)\|([\d\s]+)$/;
  let match = rowRegex.exec(row.trim());
  if (match === null) {
    console.log('Found no match for', row);
  } else {
    return {
      id: parseInt(match[1].trim()),
      winningNumber: match[2].trim().split(/\s+/),
      lottoryNumber: match[3].trim().split(/\s+/)
    }
  }
}

exports.run = () => {
  let input = utils.getInput('2023', 'day04', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
