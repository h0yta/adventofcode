const utils = require('../util/fileUtil');

const firstStar = (input, expansion) => {
  expansion = expansion - 1;
  let map = input.map(r => r.split(''));
  let expansions = findExpansions(map);
  let galaxies = findGalaxies(map);

  return summarizeShortestDistances(galaxies, expansions, expansion);
}

const secondStar = (input, expansion) => {
  expansion = expansion - 1;
  let map = input.map(r => r.split(''));
  let expansions = findExpansions(map);
  let galaxies = findGalaxies(map);

  return summarizeShortestDistances(galaxies, expansions, expansion);
}

const summarizeShortestDistances = (galaxies, expansions, expansion) => {
  return Object.keys(galaxies).map(from => {
    return Object.keys(galaxies).map(to => {
      if (from !== to) {
        let xExp = getExpansionForCoordinates(expansions.xExpansions,
          galaxies[from].r, galaxies[to].r);
        let yExp = getExpansionForCoordinates(expansions.yExpansions,
          galaxies[from].c, galaxies[to].c);

        return Math.abs(galaxies[from].r - galaxies[to].r)
          + Math.abs(galaxies[from].c - galaxies[to].c)
          + xExp * expansion
          + yExp * expansion;
      }
      return 0;
    }).reduce((a, b) => a + b, 0);
  }).reduce((a, b) => a + b, 0) / 2;
}

const getExpansionForCoordinates = (expansions, x1, x2) => {
  return expansions.filter(x => (x > x1 && x < x2) || (x > x2 && x < x1)).length;
}

const findExpansions = (map) => {
  let xExpansions = findXExpansions(map);
  let yExpansions = findYExpansions(map);
  return { yExpansions, xExpansions };
}

const findXExpansions = (map) => {
  let expansions = [];
  for (let r = 0; r < map.length; r++) {
    if (map[r].join('').match(/^\.+$/)) {
      expansions.push(r);
    }
  }
  return expansions;
}

const findYExpansions = (map) => {
  return findXExpansions(flip(map));
}

const flip = (map) => {
  let copy = new Array(map.length).fill('').map(() => new Array());
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      copy[c][r] = map[r][c];
    }
  }
  return copy;
}

const findGalaxies = (map) => {
  let counter = 1;
  let galaxies = {};
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      if (map[r][c] === '#') {
        galaxies[counter++] = { r, c }
      }
    }
  }
  return galaxies;
}

exports.run = () => {
  let input = utils.getInput('2023', 'day11', '\n');
  console.log('Answer for first star', firstStar(input, 2));
  console.log('Answer for second star', secondStar(input, 1000000));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
