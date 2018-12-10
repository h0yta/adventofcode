const utils = require('../util/fileUtil');

const firstStar = function (input) {
  
  let points = input.map(parseInput);

  for (let sec = 0; true; sec++) {
    let yPoints = points.map(p => p.yPosition);
    let yMin = Math.min(...yPoints);
    let yMax = Math.max(...yPoints);

    let yDiff = yMax-yMin;
    
    if (yDiff === 8) {
      return sec;
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

const secondStar = function (input) {
  return 0;
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
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
