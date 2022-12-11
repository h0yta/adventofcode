const utils = require('../util/fileUtil');

const firstStar = (input) => {
  const NO_KNOTS = 2;

  let knots = createKnots(NO_KNOTS);
  let visitedByT = moveTails(input, knots);

  return new Set(visitedByT).size;
}

const secondStar = (input) => {
  const NO_KNOTS = 10;

  let knots = createKnots(NO_KNOTS);
  let visitedByT = moveTails(input, knots);

  return new Set(visitedByT).size;
}

const moveTails = (input, knots) => {
  let visitedByT = [];

  for (let round = 0; round < input.length; round++) {
    let [dir, steps] = input[round].split(' ');

    for (let step = 1; step <= parseInt(steps); step++) {
      switch (dir) {
        case 'U':
          knots[0].y--;
          break;
        case 'R':
          knots[0].x++;
          break;
        case 'D':
          knots[0].y++;
          break;
        case 'L':
          knots[0].x--;
          break;
      }

      for (let knot = 1; knot < knots.length; knot++) {
        let [ty, tx] = moveKnot(knots[knot - 1].y, knots[knot - 1].x, knots[knot].y, knots[knot].x);
        knots[knot].y = ty;
        knots[knot].x = tx;
      }

      // Keep track of the tail...
      visitedByT.push(knots[knots.length - 1].y + ';' + knots[knots.length - 1].x);
    }
  }

  return visitedByT;
}

const moveKnot = (hy, hx, ty, tx) => {
  if (isTouching(hy, hx, ty, tx)) {
    return [ty, tx];
  }

  let yMove = hy - ty === 0 ? 0 : hy - ty >= 1 ? 1 : -1;
  let xMove = hx - tx === 0 ? 0 : hx - tx >= 1 ? 1 : -1;

  return [ty + yMove, tx + xMove];
}

const isTouching = (hy, hx, ty, tx) => {
  let yDiff = Math.abs(hy - ty);
  let xDiff = Math.abs(hx - tx);

  return yDiff <= 1 && xDiff <= 1;
}

const createKnots = (noTails) => {
  let tails = [];
  for (let tail = 0; tail < noTails; tail++) {
    tails[tail] = { x: 0, y: 0 };
  }
  return tails;
}

exports.run = () => {
  let input = utils.getInput('2022', 'day09', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
