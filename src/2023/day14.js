const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let maxPoint = input.length;
  let dish = input.map(row => row.split(''));
  dish = tilt(dish, 'north');
  return calculateTotalLoad(dish, maxPoint);
}

const tilt = (dish, dir) => {
  if (dir === 'north' || dir == 'south') {
    return flip(
      flip(dish)
        .map(row => row
          .join('')
          .split('#')
          .map(part => part
            .split('')
            .sort((a, b) => sort(a, b, dir))
            .join('')
          )
          .join('#')
          .split('')));
  } else {
    return dish.map(row => row
      .join('')
      .split('#')
      .map(part => part
        .split('')
        .sort((a, b) => sort(a, b, dir))
        .join('')
      )
      .join('#')
      .split(''))
  }
}

const sort = (a, b, dir) => {
  if (dir === 'north' || dir === 'west') {
    return a === b ? 0 : a === 'O' ? -1 : 1;
  } else {
    return a === b ? 0 : a === 'O' ? 1 : -1;
  }
}

const secondStar = (input) => {
  let cache = new Array();
  let done = false;
  let dish = input.map(row => row.split('').filter(x => x.trim() !== ''));
  // 1000000000 / 37 = 27027027,02702703 = 999999999
  // 25 37 37
  for (let i = 1; i < 1000000000; i++) {
    //dish.forEach(row => console.log(row));
    //console.log('');

    dish = tilt(dish, 'north');
    //dish.forEach(row => console.log(row.join('')));
    //console.log('');
    dish = tilt(dish, 'west');
    //dish.forEach(row => console.log(row.join('')));
    //console.log('');
    dish = tilt(dish, 'south');
    //dish.forEach(row => console.log(row.join('')));
    //console.log('');
    dish = tilt(dish, 'east');
    //dish.forEach(row => console.log(row.join('')));
    //console.log('');


    let hej = calculateTotalLoad(dish, dish.length);
    console.log(i, hej);

    if (containsInCache(cache, dish) > -1 && !done) {
      done = true;
      let index = containsInCache(cache, dish);
      console.log('index', containsInCache(cache, dish))
      console.log('mod', (1000000000 % (i - index)))
      console.log('i', i)



      i = 1000000000 - (index + (1000000000 - index) % (i - index)) - 2;
      console.log('i', i)

    } else if (!done) {
      addToCache(cache, dish);
    }
  }

  // 91270 TOO LOW
  // 91270

  return calculateTotalLoad(dish, dish.length);
}

const containsInCache = (cache, dish) => {
  let hash = createHash(dish);
  return cache.indexOf(hash);
}

const addToCache = (cache, dish) => {
  let hash = createHash(dish);
  cache.push(hash);
  return cache;
}

const createHash = (dish) => {
  return dish.map(row => row.join('')).join('@');
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
