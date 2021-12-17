const utils = require('../util/fileUtil');

const firstStar = (input) => {
  input = parseInput(input);
  let results = new Array();
  for (let x = 0; x <= input.xEnd; x++) {
    for (let y = input.yStart; y <= Math.abs(input.yStart); y++) {
      results.push(run(input, x, y));
    }
  }

  return Math.max(...results.filter(res => res.hit).map(res => res.yMax));
}

const secondStar = (input) => {
  input = parseInput(input);
  let results = new Array();
  for (let x = 0; x <= input.xEnd; x++) {
    for (let y = input.yStart; y <= Math.abs(input.yStart); y++) {
      results.push(run(input, x, y));
    }
  }

  return results.filter(res => res.hit).length;
}

const run = (target, xTraj, yTraj) => {
  let x = 0, y = 0, mY = 0;
  while (x <= target.xEnd && y >= target.yStart) {
    x += xTraj;
    y += yTraj;
    mY = y > mY ? y : mY;

    if (withinTarget(target, x, y)) {
      return { hit: true, yMax: mY }
    }

    xTraj = xTraj < 0 ? xTraj + 1 : xTraj > 0 ? xTraj - 1 : 0;
    yTraj -= 1;
  }

  return { hit: false }
}

const withinTarget = (target, x, y) => {
  return x >= target.xStart
    && x <= target.xEnd
    && y >= target.yStart
    && y <= target.yEnd;
}

const parseInput = (input) => {
  // target area: x=20..30, y=-10..-5
  let ruleRegexp = /target area: x=(.+\d+)\.\.(.+\d+), y=(.+\d+)\.\.(.+\d+)/;
  let match = ruleRegexp.exec(input);
  if (match === null) {
    console.log('ERROR: no match!');
  } else {
    return {
      xStart: parseInt(match[1]),
      xEnd: parseInt(match[2]),
      yStart: parseInt(match[3]),
      yEnd: parseInt(match[4]),
    }
  }
}

exports.run = () => {
  let input = utils.getInput('2021', 'day17', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
