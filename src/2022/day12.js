const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let map = input.map(row => row.split('')
    .map(height => { return { height, numHeight: height.charCodeAt() - 96, steps: Number.MAX_VALUE } }));
  let se = findStartAndEnd(map);

  let result = traverse(se.start, se.end, [], map);

  return 0;
}

const secondStar = (input) => {
  return 0;
}

const traverse = (curr, end, visited, map) => {
  visited.push(createKey(curr));

  let possibleSteps = getPossibleSteps(curr, map)
    .filter(step => !visited.includes(createKey(step)));
  let endReached = possibleSteps
    .filter(step => step.y === end.y && step.x === end.x);

  if (endReached.length === 1) {
    return endReached;
  } else if (possibleSteps.length > 0) {
    return possibleSteps.map(step => traverse(step, end, visited, map));
  }
}

const getPossibleSteps = (curr, map) => {
  console.log('CURR', map[curr.y][curr.x].numHeight)
  console.log('UP', map[curr.y - 1] ? map[curr.y - 1][curr.x].numHeight : '-')
  console.log('RIGHT', map[curr.y][curr.x + 1] ? map[curr.y][curr.x + 1].numHeight : '-')
  console.log('DOWN', map[curr.y + 1] ? map[curr.y + 1][curr.x].numHeight : '-')
  console.log('LEFT', map[curr.y][curr.x - 1] ? map[curr.y][curr.x - 1].numHeight : '-')
  let possibleSteps = new Array();
  // UP
  if (map[curr.y - 1] && map[curr.y - 1][curr.x].numHeight <= map[curr.y][curr.x].numHeight + 1) {
    possibleSteps.push({ y: curr.y - 1, x: curr.x, steps: curr.steps + 1 })
  }

  // RIGHT
  if (map[curr.y][curr.x + 1] && map[curr.y][curr.x + 1].numHeight <= map[curr.y][curr.x].numHeight + 1) {
    possibleSteps.push({ y: curr.y, x: curr.x + 1, steps: curr.steps + 1 })
  }

  // DOWN
  if (map[curr.y + 1] && map[curr.y + 1][curr.x].numHeight <= map[curr.y][curr.x].numHeight + 1) {
    possibleSteps.push({ y: curr.y + 1, x: curr.x, steps: curr.steps + 1 })
  }

  // LEFT
  if (map[curr.y][curr.x - 1] && map[curr.y][curr.x - 1].numHeight <= map[curr.y][curr.x].numHeight + 1) {
    possibleSteps.push({ y: curr.y, x: curr.x - 1, steps: curr.steps + 1 })
  }

  return possibleSteps;
}

const findStartAndEnd = (map) => {
  let start = {};
  let end = {};
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].height === 'S') {
        start.y = y;
        start.x = x;
        map[y][x].numHeight = 0;
        start.steps = 0;
      } else if (map[y][x].height === 'E') {
        end.y = y;
        end.x = x;
        map[y][x].numHeight = 0;
      }
    }
  }

  return {
    start,
    end
  }
}

const createKey = (step) => {
  return step.y + ',' + step.x;
}

exports.run = () => {
  let input = utils.getInput('2022', 'day12', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
