const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let maze = createMaze(input);
  let paths = createPaths();

  traverseOne(maze, new Array(), 'start', paths);
  return paths.size;
}

const secondStar = (input) => {
  let maze = createMaze(input);
  let paths = createPaths();

  traverseTwo(maze, new Array(), 'start', paths);
  return paths.size;
}

const traverseOne = (maze, visited, current, paths) => {
  let visitedCopy = new Array(...visited);
  visitedCopy.push(current);

  if (isEnd(current)) {
    paths.add(visitedCopy.join(','));
    return;
  }

  let options = maze[current].filter(cave => !visited.includes(cave) || isBigCave(cave));
  if (options.length > 0) {
    for (let step = 0; step < options.length; step++) {
      traverseOne(maze, visitedCopy, options[step], paths);
    }
  }
}

const traverseTwo = (maze, visited, current, paths) => {
  let visitedCopy = new Array(...visited);
  visitedCopy.push(current);

  if (isEnd(current)) {
    paths.add(visitedCopy.join(','));
    return;
  }

  let numberOfOccurrences = countOccurencesOfSmallCaves(visitedCopy);
  let options = maze[current].filter(cave => {
    if (isBigCave(cave)) {
      return true;
    }

    return isEnd(cave)
      || !visited.includes(cave)
      || (isSmallCave(cave) && numberOfOccurrences <= 1);
  });

  if (options.length > 0) {
    for (let step = 0; step < options.length; step++) {
      traverseTwo(maze, visitedCopy, options[step], paths);
    }
  }
}

const createMaze = (input) => {
  let maze = {};
  for (let i = 0; i < input.length; i++) {
    let dir = input[i].split('-');
    if (!maze[dir[0]]) {
      maze[dir[0]] = new Array();
    }

    if (!maze[dir[1]]) {
      maze[dir[1]] = new Array();
    }

    if (dir[1] !== 'start') {
      maze[dir[0]].push(dir[1])
      maze[dir[0]].sort();
    }

    if (dir[0] !== 'start') {
      maze[dir[1]].push(dir[0])
      maze[dir[1]].sort();
    }
  }
  return maze;
}

const createPaths = () => {
  return new Set();
}

countOccurencesOfSmallCaves = (newPrev) => {
  return Math.max(...Object.values(newPrev
    .filter(cave => isSmallCave(cave))
    .reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})));
}

const isBigCave = (cave) => {
  return cave !== null && cave.match(/^[A-Z]+$/);
}

const isSmallCave = (cave) => {
  return cave !== null && cave.match(/^[a-z]+$/);
}

const isEnd = (cave) => {
  return cave === 'end';
}

exports.run = () => {
  let input = utils.getInput('2021', 'day12', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;