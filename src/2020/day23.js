const utils = require('../util/fileUtil');

const firstStar = function (cups, moves) {
  cups = cups.map(x => parseInt(x));

  let hej = play(cups, moves);

  let pos = 0;
  for (let move = 0; move < moves; move++) {
    let curr = cups[0];
    //console.log('-- move --', pos + 1)
    //console.log('cups:', cups.join(' '))

    let pickup = cups.splice(0 + 1, 3);
    //console.log('pick up:', pickup.join(' '))

    let dest = findDestination(cups, curr);
    //console.log('destination: ', dest)
    cups.splice(dest + 1, 0, ...pickup);

    cups.push(cups.shift());

    pos++;
    //if (pos === 5) break;
  }

  //console.log('FINAL', cups)

  return getResult(cups);
}

const secondStar = function (cups, moves) {
  cups = cups.map(cup => cup - 1);
  const minNumber = 0;
  const maxNumber = 999999;

  let next = new Int32Array(moves);
  let prev = new Int32Array(moves);
  let linkedList = new Map();
  for (let i = 0; i < moves; i++) {
    linkedList.set(i, { prev: i - 1, data: i, next: i + 1 });
  }

  linkedList.get(minNumber).prev = maxNumber;
  linkedList.get(maxNumber).next = minNumber;

  next[maxNumber] = minNumber;
  prev[minNumber] = maxNumber;
  let current = 0;

  current = maxNumber;
  for (let move = minNumber; move < moves; move++) {
    current = linkedList.get(current);
    let pickup1 = linkedList.get(current.data);
    let pickup2 = linkedList.get(pickup1.data);
    let pickup3 = linkedList.get(pickup2.data);

    current.next = pickup3.next;
    linkedList.get(current.next).prev = current;

    next[current] = next[pickup3];
    prev[next[pickup3]] = current;
    let destination = current - 1 < minNumber ? maxNumber : current - 1;
    while (destination == pickup1 || destination == pickup2 || destination == pickup3) {
      destination = destination == minNumber ? maxNumber : destination - 1;
    }
    next[pickup3] = next[destination];
    prev[pickup1] = destination;
    prev[next[destination]] = pickup3;
    next[destination] = pickup1;
  }
  let multiplied = (next[minNumber] + 1) * (next[next[minNumber]] + 1);
  return multiplied;
}

const play = (cups, moves) => {
  const minNumber = 0;
  const maxNumber = moves - 1;

  let linkedList = new Map();
  for (let i = 0; i < moves; i++) {
    linkedList.set(i, { prev: i - 1, data: i, next: i + 1 });
  }

  linkedList.get(minNumber).prev = maxNumber;
  linkedList.get(maxNumber).next = minNumber;
  let current = maxNumber;
  for (let i = 0; i < cups.length; i++) {
    linkedList.get(i).data = cups[i];
  }

  console.log('LIST', linkedList)


  current = maxNumber;
  for (let move = minNumber; move < moves; move++) {
    current = linkedList.get(current);
    let pickup1 = linkedList.get(move + 1);
    let pickup2 = linkedList.get(move + 2);
    let pickup3 = linkedList.get(move + 3);

    console.log('pickup', pickup1.data, pickup2.data, pickup3.data)

    current.next = pickup3.next;
    linkedList.get(current.next).prev = current.data;

    console.log('LIST', linkedList)
  }

  return linkedList;
}

const secondStarCOPY = function (cups, moves) {
  cups = cups.map(cup => cup - 1);
  const minNumber = 0;
  const maxNumber = 999999;

  let next = new Int32Array(moves);
  let prev = new Int32Array(moves);
  for (let i = 0; i < moves; i++) {
    next[i] = i + 1;
    prev[i] = i - 1;
  }
  next[maxNumber] = minNumber;
  prev[minNumber] = maxNumber;
  let current = maxNumber;
  cups.forEach(cup => {
    next[prev[cup]] = next[cup];
    prev[next[cup]] = prev[cup];
    next[cup] = next[current];
    prev[cup] = current;
    prev[next[current]] = cup;
    next[current] = cup;
    current = cup;
  });

  current = maxNumber;
  for (let move = minNumber; move < moves; move++) {
    current = next[current];
    let pickup1 = next[current];
    let pickup2 = next[pickup1];
    let pickup3 = next[pickup2];

    next[current] = next[pickup3];
    prev[next[pickup3]] = current;
    let destination = current - 1 < minNumber ? maxNumber : current - 1;
    while (destination == pickup1 || destination == pickup2 || destination == pickup3) {
      destination = destination == minNumber ? maxNumber : destination - 1;
    }
    next[pickup3] = next[destination];
    prev[pickup1] = destination;
    prev[next[destination]] = pickup3;
    next[destination] = pickup1;
  }
  let multiplied = (next[minNumber] + 1) * (next[next[minNumber]] + 1);
  return multiplied;
}

const findDestination = (cups, curr) => {
  while (!cups.includes(--curr)) {
    if (curr === 0) {
      curr = Math.max(...cups) + 1;
    }
  }

  return cups.indexOf(curr);
}

const getResult = (cups) => {
  let start = cups.splice(0, cups.indexOf(1));
  let end = cups.splice(1, cups.length)
  return end.join('') + start.join('');
}

exports.run = function () {
  let input = utils.getInput('2020', 'day23', '');
  console.log('Answer for first star', firstStar(input, 100));
  console.log('Answer for second star', secondStar(input, 10000000));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
