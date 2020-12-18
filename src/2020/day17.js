const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let grid = parseInput(input);

  for (let cycle = 0; cycle < 6; cycle++) {
    grid = createThreeDimensionalNewGrid(grid);
  }

  return grid.length;
}

const secondStar = function (input) {
  let grid = parseInput(input);

  for (let cycle = 0; cycle < 6; cycle++) {
    grid = createFourDimensionalNewGrid(grid);
  }

  return grid.length;
}

const createThreeDimensionalNewGrid = (grid) => {
  let newGrid = [];
  let bound = findBounderies(grid);
  for (let x = bound['xMin'] - 1; x <= bound['xMax'] + 1; x++) {
    for (let y = bound['yMin'] - 1; y <= bound['yMax'] + 1; y++) {
      for (let z = bound['zMin'] - 1; z <= bound['zMax'] + 1; z++) {
        let neighbours = countNeighbours(grid, x, y, z, 0);
        if (isActive(grid, x, y, z, 0) && neighbours >= 2 && neighbours <= 3) {
          newGrid.push({ x, y, z, w: 0 });
        } else if (neighbours === 3) {
          newGrid.push({ x, y, z, w: 0 });
        }
      }
    }
  }
  return newGrid;
}

const createFourDimensionalNewGrid = (grid) => {
  let newGrid = [];
  let bound = findBounderies(grid);
  for (let x = bound['xMin'] - 1; x <= bound['xMax'] + 1; x++) {
    for (let y = bound['yMin'] - 1; y <= bound['yMax'] + 1; y++) {
      for (let z = bound['zMin'] - 1; z <= bound['zMax'] + 1; z++) {
        for (let w = bound['wMin'] - 1; w <= bound['wMax'] + 1; w++) {
          let neighbours = countNeighbours(grid, x, y, z, w);
          if (isActive(grid, x, y, z, w) && neighbours >= 2 && neighbours <= 3) {
            newGrid.push({ x, y, z, w });
          } else if (neighbours === 3) {
            newGrid.push({ x, y, z, w });
          }
        }
      }
    }
  }
  return newGrid;
}

const countNeighbours = (grid, x, y, z, w) => {
  let count = 0;
  for (let mx = x - 1; mx <= x + 1; mx++) {
    for (let my = y - 1; my <= y + 1; my++) {
      for (let mz = z - 1; mz <= z + 1; mz++) {
        for (let mw = w - 1; mw <= w + 1; mw++) {
          if (mx === x && my === y && mz === z && mw === w) {
            continue;
          }

          if (isActive(grid, mx, my, mz, mw)) {
            count++;
          }
        }
      }
    }
  }

  return count;
}

const isActive = (grid, x, y, z, w) => {
  return grid.filter(point =>
    point.x === x &&
    point.y === y &&
    point.z === z &&
    point.w === w).length === 1;
}

const findBounderies = (grid) => {
  const bounderies = {
    xMin: 1,
    xMax: -1,
    yMin: 1,
    yMax: -1,
    zMin: 1,
    zMax: -1,
    wMin: 1,
    wMax: -1
  };

  grid.forEach(point => {
    ['x', 'y', 'z', 'w'].forEach(dimension => {
      bounderies[dimension + 'Min'] = Math.min(bounderies[dimension + 'Min'], point[dimension])
      bounderies[dimension + 'Max'] = Math.max(bounderies[dimension + 'Max'], point[dimension])
    });
  });

  return bounderies;
}

const parseInput = (input) => {
  let grid = [];
  for (let y = 0; y < input.length; y++) {
    let row = input[y].split('');
    for (let x = 0; x < row.length; x++) {
      if (row[x] === '#') {
        grid.push({ x, y, z: 0, w: 0 });
      }
    }
  }
  return grid;
}

exports.run = function () {
  let input = utils.getInput('2020', 'day17', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
