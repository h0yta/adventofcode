const utils = require('../util/fileUtil');

const charHeight = (process.env.NODE_ENV === 'test' ? 7 : 9);

const firstStar = function (input) {
  let points = input.map(parseInput);
  for (let sec = 0; true; sec++) {
    let yPoints = points.map(p => p.yPosition);
    let yMin = Math.min(...yPoints);
    let yMax = Math.max(...yPoints);
    let yDiff = yMax - yMin;

    if (yDiff === charHeight) {
      printMessage(points);
      return '';
    }

    movePoints(points);
  }
}

const movePoints = function (points) {
  return points.forEach(point => {
    point.xPosition += point.xVelocity;
    point.yPosition += point.yVelocity;
    return point;
  });
}

const printMessage = function (points) {
  let yPoints = points.map(p => p.yPosition);
  let yMin = Math.min(...yPoints);
  let yMax = Math.max(...yPoints);

  let xPoints = points.map(p => p.xPosition);
  let xMin = Math.min(...xPoints);
  let xMax = Math.max(...xPoints);

  let message = Array(yMax + 1)
    .fill(false)
    .map(() => Array(xMax + 1).fill(false));

  points.forEach(point => {
    message[point.yPosition][point.xPosition] = true;
  });

  for (let row = yMin; row <= yMax; row++) {
    let rowString = '';
    for (let char = xMin; char <= xMax; char++) {
      rowString += message[row][char] ? '#' : '.';
    }
    console.log(rowString);
  }
}

const secondStar = function (input) {
  let points = input.map(parseInput);
  for (let sec = 0; true; sec++) {
    let yPoints = points.map(p => p.yPosition);
    let yMin = Math.min(...yPoints);
    let yMax = Math.max(...yPoints);
    let yDiff = yMax - yMin;

    if (yDiff === charHeight) {
      return sec;
    }

    movePoints(points);
  }
}

const parseInput = function (row) {
  let [tmpRow, xPosition, yPosition, xVelocity, yVelocity] = row.match(/.*<(.?\d+), (.?\d+)> .*<(.?\d+), (.?\d+)>/);

  return {
    "xPosition": parseInt(xPosition.trim()),
    "yPosition": parseInt(yPosition.trim()),
    "xVelocity": parseInt(xVelocity.trim()),
    "yVelocity": parseInt(yVelocity.trim())
  }
}

exports.run = function () {
  let input = utils.getInput('2018', 'day10', '\n');
  console.log('Answer for first star');
  firstStar(input);
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
