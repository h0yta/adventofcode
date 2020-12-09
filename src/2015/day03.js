const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let houses = Array.from(Array(input.length * 2 + 1).fill(0), () => new Array(input.length * 2 + 1).fill(0))
  let x = y = input.length;
  houses[x][y]++;

  input.forEach(instruction => {
    switch (instruction) {
      case '^': y++; break;
      case '>': x++; break;
      case 'v': y--; break;
      case '<': x--; break;
    }
    houses[x][y]++;
  });

  return houses.map(x => x.filter(y => y > 0).length).reduce((x, y) => x + y, 0);
}

const secondStar = function (input) {
  let houses = Array.from(Array(input.length * 2 + 1).fill(0), () => new Array(input.length * 2 + 1).fill(0))
  let santaX = santaY = robotX = robotY = input.length;
  houses[santaX][santaY]++;

  for (let i = 0; i < input.length; i++) {
    let instruction = input[i];

    if (i % 2 === 0) {
      // Move santa
      switch (instruction) {
        case '^': santaY++; break;
        case '>': santaX++; break;
        case 'v': santaY--; break;
        case '<': santaX--; break;
      }
      houses[santaX][santaY]++;
    } else {
      // Move Robot
      switch (instruction) {
        case '^': robotY++; break;
        case '>': robotX++; break;
        case 'v': robotY--; break;
        case '<': robotX--; break;
      }
      houses[robotX][robotY]++;
    }
  }

  return houses.map(x => x.filter(y => y > 0).length).reduce((x, y) => x + y, 0);
}

exports.run = function () {
  let input = utils.getInput('2015', 'day03', '');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
