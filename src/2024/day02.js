const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let reports = input.map(report => {
    let levels = report.split(' ').map(x => parseInt(x));
    return { levels, safe: isSafe(levels) }
  })
  return reports.filter(report => report.safe).length;
}

const secondStar = (input) => {
  let reports = input.map(report => {
    let levels = report.split(' ').map(x => parseInt(x));
    return { levels, safe: isSafeWithDampener(levels) }
  })

  return reports.filter(report => report.safe).length;
}

const isSafeWithDampener = (levels) => {
  if (isSafe(levels)) {
    return true;
  }

  for (let i = 0; i < levels.length; i++) {
    let damped = [...levels]
    damped.splice(i, 1);
    if (isSafe(damped)) {
      return true;
    }
  }

  return false;
}

const isSafe = (levels) => {
  let dir = levels[0] < levels[1] ? 1 : 0;
  for (let i = 0; i < levels.length - 1; i++) {
    let diff = levels[i] - levels[i + 1];
    if (dir === 1 && (diff >= 0 || diff < -3)) {
      return false;
    } else if (dir === 0 && (diff <= 0 || diff > 3)) {
      return false;
    }
  }

  return true;
}

exports.run = () => {
  let input = utils.getInput('2024', 'day02', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
