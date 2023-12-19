const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let digPlan = parseInput(input);
  let hole = dig(digPlan);

  for (let y = 0; y < hole.length; y++) {
    let hits = 0;
    for (let x = 0; x < hole[y].length; x++) {
      if (hole[y][x].sign === '|' || hole[y][x].sign === 'L' || hole[y][x].sign === 'J') {
        hits++;
      }

      if (hits % 2 === 1 && hole[y][x].visited === false) {
        hole[y][x] = { sign: '#', visited: true }
      }
    }
  }

  return hole.map(row => row.filter(h => h.visited).length).reduce((a, b) => a + b);
}

const secondStar = (input) => {
  return 0;
}

const dig = (digPlan) => {
  let curr = { y: 150, x: 150, dir: '' };
  let hole = new Array(500).fill('').map(x => new Array(500).fill({ sign: '.', visited: false }));

  for (let inst = 0; inst < digPlan.length; inst++) {
    if (digPlan[inst].dir === 'U') {
      for (let c = 0; c < digPlan[inst].l; c++) {
        hole[curr.y - c][curr.x] = { visited: true, color: digPlan[inst].color, sign: getPipe(digPlan[inst].dir, curr.dir, c) };
      }
      curr.y -= digPlan[inst].l;

    } else if (digPlan[inst].dir === 'R') {
      for (let c = 0; c < digPlan[inst].l; c++) {
        hole[curr.y][curr.x + c] = { visited: true, color: digPlan[inst].color, sign: getPipe(digPlan[inst].dir, curr.dir, c) };
      }
      curr.x += digPlan[inst].l;
    } else if (digPlan[inst].dir === 'D') {
      for (let c = 0; c < digPlan[inst].l; c++) {
        hole[curr.y + c][curr.x] = { visited: true, color: digPlan[inst].color, sign: getPipe(digPlan[inst].dir, curr.dir, c) };
      }
      curr.y += digPlan[inst].l;
    } else if (digPlan[inst].dir === 'L') {
      for (let c = 0; c < digPlan[inst].l; c++) {
        hole[curr.y][curr.x - c] = { visited: true, color: digPlan[inst].color, sign: getPipe(digPlan[inst].dir, curr.dir, c) };
      }
      curr.x -= digPlan[inst].l;
    }

    curr.dir = digPlan[inst].dir;
  }

  return hole;
}

const parseInput = (input) => {
  return input.map(row => {
    let [dir, length, color] = row.split(/\s/);
    return {
      dir, l: parseInt(length), color: color.replace(/\(|\)/g, '')
    }
  })
}

const getPipe = (curr, prev, no) => {
  let combo = prev + curr;
  if (no === 0) {
    switch (combo) {
      case 'R':
      case 'UR':
      case 'LD':
        return 'F';
      case 'L':
      case 'UL':
      case 'RD':
        return '7';
      case 'DR':
      case 'LU':
        return 'L';
      case 'RU':
      case 'DL':
        return 'J';
    }
  } else if (curr === 'U' | curr === 'D') {
    return '|'
  } else {
    return '-';
  }
}

exports.run = () => {
  let input = utils.getInput('2023', 'day18', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
