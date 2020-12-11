const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let houses = new Set();
  let x = y = 0;
  houses.add(x + '#' + y);

  input.forEach(instruction => {
    switch (instruction) {
      case '^': y++; break;
      case '>': x++; break;
      case 'v': y--; break;
      case '<': x--; break;
    }
    houses.add(x + '#' + y);
  });

  return houses.size;
}

const secondStar = function (input) {
  let houses = new Set();
  let santaX = santaY = robotX = robotY = input.length;
  houses.add(santaX + '#' + santaY);

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
      houses.add(santaX + '#' + santaY);
    } else {
      // Move Robot
      switch (instruction) {
        case '^': robotY++; break;
        case '>': robotX++; break;
        case 'v': robotY--; break;
        case '<': robotX--; break;
      }
      houses.add(robotX + '#' + robotY);
    }
  }

  return houses.size;
}

exports.run = function () {
  let input = utils.getInput('2015', 'day03', '');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
