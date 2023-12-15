const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let maxPoint = input.length;
  input = flip(input.map(row => row.split('')));

  let dish = flip(input.map(row => row
    .join('')
    .split('#')
    .map(part => part
      .split('')
      .sort((a, b) => a === b ? 0 : a === 'O' ? -1 : 1)
      .join('')
    )
    .join('#')));

  printDish(dish);

  return calculateTotalLoad(dish, maxPoint);
}

const secondStar = (input) => {
  let maxPoint = input.length;

  let dish = input.map(row => row.split(''));
  // 1000000000 / 37 = 27027027,02702703 = 999999999
  // 25 37 37
  for (let i = 0; i < 100000; i++) {
    for (let j = 0; j < 4; j++) {
      dish = rotateForward(dish)
      let hej = calculateTotalLoad(dish, dish.length);
      if (hej === 64) console.log(i, hej);

      dish = dish.map(row => row
        .join('')
        .split('#')
        .map(part => part
          .split('')
          .sort((a, b) => a === b ? 0 : a === 'O' ? -1 : 1)
          .join('')
        )
        .join('#')
        .split(''));
    }
  }

  dish = rotateForward(dish)

  return calculateTotalLoad(dish, maxPoint);
}

const flip = (dish) => {
  let copy = new Array(dish[0].length)
    .fill('').map(() => new Array());
  for (let y = 0; y < dish.length; y++) {
    for (let x = 0; x < dish[y].length; x++) {
      copy[x][y] = dish[y][x];
    }
  }

  return copy;
}

const rotateForward = function (dish) {
  return dish[0].map((val, index) => dish.map(row => row[index]).reverse());
}

const rotateBackward = function (arr, no) {
  while (no-- > 0) {
    arr.unshift(arr.pop())
  }
  return arr
}

const calculateTotalLoad = (dish, maxPoint) => {
  return dish.map(row => row.filter(x => x === 'O').length)
    .map(x => x * maxPoint--)
    .reduce((a, b) => a + b);
}

const printDish = (dish) => {
  for (let row = 0; row < dish.length; row++) {
    console.log(dish[row].join(''));
  }
}

exports.run = () => {
  let input = utils.getInput('2023', 'day14', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
