const utils = require('../util/fileUtil');

const firstStar = function (cups, moves) {
  cups = cups.map(x => parseInt(x));
  let max = Math.max(...cups);

  let head = createNodes(cups);
  let cupsCircle = { 'head': head };

  play(cupsCircle, moves, max);

  return getResultForFirstStar(convertToArray(cupsCircle, max));
}

const getResultForFirstStar = (cups) => {
  let start = cups.splice(0, cups.indexOf(1));
  let end = cups.splice(1, cups.length)
  return end.join('') + start.join('');
}

const secondStar = function (cups, moves) {
  cups = cups.map(x => parseInt(x));
  let max = Math.max(...cups);
  let absoluteMax = 1000000;
  for (let i = (max + 1); i <= absoluteMax; i++) {
    cups.push(i);
  }

  let head = createNodes(cups);
  let cupsCircle = { 'head': head };

  play(cupsCircle, moves, absoluteMax);

  return getResultForSecondStar(cupsCircle);
}

const getResultForSecondStar = (cupsCircle) => {
  let lastNode = orderArray[1];

  return lastNode.next.value * lastNode.next.next.value;
}

const orderArray = [];
const createNodes = (values) => {
  let newValues = values.map(value => {
    return {
      value: value,
      next: null
    }
  });

  let max = newValues.length - 1;
  for (let index = max; index > 0; index--) {
    if (index === max) {
      newValues[index].next = newValues[0];
    }

    newValues[index - 1].next = newValues[index];
  }

  for (let index = 0; index < newValues.length; index++) {
    orderArray[newValues[index].value] = newValues[index];
  }

  return newValues[0];
}

const convertToArray = (cupsCircle, length) => {
  let lastNode = cupsCircle.head;
  let myArray = [];
  let counter = 0;
  while (lastNode.next && counter++ < length) {
    myArray.push(lastNode.value);
    lastNode = lastNode.next
  }

  return myArray
}

const play = (cupsCircle, moves, max) => {
  let currentCup = cupsCircle.head;
  for (let move = 0; move < moves; move++) {
    let firstPickup = currentCup.next;
    let secondPickup = currentCup.next.next;
    let thirdPickup = currentCup.next.next.next;

    let destination = findDestination(currentCup, max);

    currentCup.next = thirdPickup.next;
    thirdPickup.next = destination.next;
    destination.next = firstPickup;
    currentCup = currentCup.next;
  }
}

const findDestination = (currentCup, max) => {
  let destination = currentCup.value - 1;
  if (destination < 1) {
    destination = max;
  }

  while (destination === currentCup.next.value
    || destination === currentCup.next.next.value
    || destination === currentCup.next.next.next.value) {
    destination--;
    if (destination < 1) {
      destination = max;
    }
  }

  return orderArray[destination];
}

const printCircle = (cupsCircle, currentCup, max) => {
  return convertToArray(cupsCircle, max).map(cup => {
    if (cup === currentCup) return '(' + cup + ')';
    else return cup;
  }).join(' ')
}

exports.run = function () {
  let input = utils.getInput('2020', 'day23', '');
  console.log('Answer for first star', firstStar(input, 100));
  console.log('Answer for second star', secondStar(input, 10000000));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
