const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let forest = input.map(row => row.split(''));
  let mX = maxX(forest);
  let mY = maxY(forest);

  let visibleTrees = calculatePerimiter(mY, mX);
  for (let y = 1; y < mY - 1; y++) {
    for (let x = 1; x < mX - 1; x++) {
      if (isVisible(y, x, forest, mY, mX)) {
        visibleTrees++;
      }
    }
  }

  return visibleTrees;
}

const secondStar = (input) => {
  let forest = input.map(row => row.split(''));
  let mX = maxX(forest);
  let mY = maxY(forest);

  let scenicScores = {};
  for (let y = 1; y < mY - 1; y++) {
    for (let x = 1; x < mX - 1; x++) {
      let scenicScore = calculateScenicScore(y, x, forest, mY, mX);
      scenicScores[y + ';' + x] = scenicScore;
    }
  }


  return Math.max(...Object.values(scenicScores));
}

const maxX = (forest) => {
  return Math.max(...forest.map(row => row.length));
}

const maxY = (forest) => {
  return forest.length;
}

const calculatePerimiter = (mY, mX) => {
  return mY - 1 + mY - 1 + mX - 1 + mX - 1;
}

const isVisible = (y, x, forest, mY, mX) => {
  let tree = forest[y][x];

  let invisibleFrom = new Array();

  for (let cY = y - 1; cY >= 0; cY--) {
    if (forest[cY][x] >= tree) {
      //console.log('1', cY, x, forest[cY][x])
      invisibleFrom.push('up');
      break;
    }
  }

  for (let cY = y + 1; cY < mY; cY++) {
    if (forest[cY][x] >= tree) {
      //console.log('2', cY, x, forest[cY][x])
      invisibleFrom.push('down');
      break;
    }
  }

  for (let cX = x - 1; cX >= 0; cX--) {
    if (forest[y][cX] >= tree) {
      //console.log('3', y, cX, forest[y][cX])
      invisibleFrom.push('left');
      break;
    }
  }

  for (let cX = x + 1; cX < mX; cX++) {
    if (forest[y][cX] >= tree) {
      //console.log('4', y, cX, forest[y][cX])
      invisibleFrom.push('right');
      break;
    }
  }

  return invisibleFrom.length < 4;
}

const calculateScenicScore = (y, x, forest, mY, mX) => {
  let tree = forest[y][x];

  let upScore = 0;
  for (let cY = y - 1; cY >= 0; cY--) {
    upScore++;
    if (forest[cY][x] >= tree) {
      //console.log('1', cY, x, forest[cY][x]) 
      break;
    }
  }

  let downScore = 0;
  for (let cY = y + 1; cY < mY; cY++) {
    downScore++;
    if (forest[cY][x] >= tree) {
      //console.log('2', cY, x, forest[cY][x])
      break;
    }
  }

  let leftScore = 0;
  for (let cX = x - 1; cX >= 0; cX--) {
    leftScore++;
    if (forest[y][cX] >= tree) {
      //console.log('3', y, cX, forest[y][cX])
      break;
    }
  }

  let rightScore = 0;
  for (let cX = x + 1; cX < mX; cX++) {
    rightScore++;
    if (forest[y][cX] >= tree) {
      //console.log('4', y, cX, forest[y][cX])
      break;
    }
  }

  return upScore * downScore * leftScore * rightScore;
}

exports.run = () => {
  let input = utils.getInput('2022', 'day08', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
