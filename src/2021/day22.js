const utils = require('../util/fileUtil');

const firstStar = (input) => {
  input = input.map(row => parseInput(row));
  let cubes = {};
  for (let i = 0; i < input.length; i++) {
    let row = input[i];
    if (!row.inside) continue;

    for (let x = row.x1; x <= row.x2; x++) {
      for (let y = row.y1; y <= row.y2; y++) {
        for (let z = row.z1; z <= row.z2; z++) {
          let key = createKey(x, y, z);
          if (row.state === 'on') {
            cubes[key] = 1;
          } else if (cubes[key] === 1) {
            cubes[key] = 0;
          }
        }
      }
    }
  }

  return Object.values(cubes).filter(x => x === 1).length;
}

const secondStar = (input) => {
  return 0;
}

const insideArea = (value) => {
  if (value < -50) return false;
  else if (value > 50) return false;
  else return true;
}

const createKey = (x, y, z) => {
  return 'x=' + x + ';y=' + y + ';z=' + z;
}

const parseInput = (row) => {
  // on x=-12..35,y=6..50,z=-50..-2
  let ruleRegexp = /^([\w]{2,3}) x=(-*\d+)\.\.(-*\d+),y=(-*\d+)\.\.(-*\d+),z=(-*\d+)\.\.(-*\d+)$/;
  let match = ruleRegexp.exec(row);
  if (match === null) {
    console.log('ERROR: no match!');
  } else {
    return {
      state: match[1],
      x1: parseInt(match[2]),
      x2: parseInt(match[3]),
      y1: parseInt(match[4]),
      y2: parseInt(match[5]),
      z1: parseInt(match[6]),
      z2: parseInt(match[7]),
      inside: insideArea(parseInt(match[2]))
        && insideArea(parseInt(match[3]))
        && insideArea(parseInt(match[4]))
        && insideArea(parseInt(match[5]))
        && insideArea(parseInt(match[6]))
        && insideArea(parseInt(match[7]))
    }
  }
}

exports.run = () => {
  let input = utils.getInput('2021', 'day22', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
