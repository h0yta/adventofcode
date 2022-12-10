const utils = require('../util/fileUtil');

const firstStar = (input) => {
  const LIMITS = [20, 60, 100, 140, 180, 220];
  let x = 1;
  let cycle = 0;
  let signalStrength = 0;
  for (let i = 0; i < input.length; i++) {
    let inst = input[i];

    if (inst === 'noop') {
      cycle += 1;

      signalStrength += calculateSignalStrength(LIMITS, cycle, x);
    } else {
      let value = inst.split(' ')[1];
      cycle += 1;
      signalStrength += calculateSignalStrength(LIMITS, cycle, x);

      cycle += 1;
      signalStrength += calculateSignalStrength(LIMITS, cycle, x);

      x += parseInt(value);
    }
  }

  return signalStrength;
}

const secondStar = (input) => {
  let crt = Array(6)
    .fill('.')
    .map(() => Array(40).fill('.'));

  let x = 1;
  let cycle = 0;

  for (let i = 0; i < input.length; i++) {
    let inst = input[i];

    if (inst === 'noop') {
      cycle += 1;
      printPixel(crt, cycle, x);
    } else {
      let value = inst.split(' ')[1];

      cycle += 1;
      printPixel(crt, cycle, x);

      cycle += 1;
      printPixel(crt, cycle, x);

      // Move sprite
      x += parseInt(value);
    }
  }

  printMessage(crt);
  return 0;
}

const calculateSignalStrength = (LIMITS, cycle, x) => {
  let limit = limitPassed(LIMITS, cycle);
  if (limit) {
    return x * limit;
  }

  return 0;
}

const limitPassed = (LIMITS, cycle) => {
  return LIMITS.filter(limit => limit === cycle)[0];
}

const hitsSprite = (x, cycle) => {
  return cycle % 40 >= x - 1 && cycle % 40 <= x + 1;
}

const printPixel = (crt, cycle, x) => {
  let row = Math.floor(cycle / 40);
  let col = (cycle % 40) - 1;

  if (hitsSprite(x, col)) {
    crt[row][col] = '#';
  }
}

const printMessage = (crt) => {
  crt.forEach(row => {
    console.log(row.join(''));
  });
}

exports.run = () => {
  let input = utils.getInput('2022', 'day10', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
