const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let hands = input.map(parseHand)
    .sort((a, b) => {
      if (a.value !== b.value) {
        return a.value - b.value;
      }
      for (let card = 0; card < a.nummericHand.length; card++) {
        if (a.nummericHand[card] !== b.nummericHand[card]) {
          return a.nummericHand[card] - b.nummericHand[card];
        }
      }
    });

  return calculateWinnings(hands);
}

const secondStar = (input) => {
  let hands = input.map(parseHand)
    .sort((a, b) => {
      if (a.valueJWild !== b.valueJWild) {
        return a.valueJWild - b.valueJWild;
      }
      for (let card = 0; card < a.nummericHandJWild.length; card++) {
        if (a.nummericHandJWild[card] !== b.nummericHandJWild[card]) {
          return a.nummericHandJWild[card] - b.nummericHandJWild[card];
        }
      }
    });

  return calculateWinnings(hands);
}

const calculateWinnings = (hands) => {
  let winnings = 0;
  for (let rank = 1; rank <= hands.length; rank++) {
    winnings += rank * hands[rank - 1].bid;
  }

  return winnings;
}

const parseHand = (row) => {
  [hand, bid] = row.split(/\s/);
  hand = hand.split('');
  let nummericHand = hand.map(toNummericCard);
  let nummericHandJWild = hand.map(toNummericCardJWild);
  let value = calculateHandValue(hand, false);
  let valueJWild = calculateHandValue(hand, true);

  return {
    hand,
    nummericHand,
    nummericHandJWild,
    value,
    valueJWild,
    bid
  }
}

const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const nummericCards = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
const toNummericCard = (card) => {
  return nummericCards[cards.indexOf(card)];
}

const cardsJWild = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J'];
const nummericCardsJWild = [14, 13, 12, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const toNummericCardJWild = (card) => {
  return nummericCardsJWild[cardsJWild.indexOf(card)];
}


const calculateHandValue = (hand, jWild) => {
  let mappedHand = createMapOfHand(hand);

  let noJ = 0;
  if (jWild) {
    noJ = mappedHand.get('J') ? mappedHand.get('J') : 0;
    mappedHand.delete('J');
  }
  mappedHand = [...mappedHand.values()];

  let length = noJ === 5 ? 1 : mappedHand.length;
  let max = noJ === 5 ? 5 : Math.max(...mappedHand) + noJ;
  return max - length;
}

const createMapOfHand = (hand) => {
  return hand.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
}

exports.run = () => {
  let input = utils.getInput('2023', 'day07', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
