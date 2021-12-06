const utils = require('../util/fileUtil');

const firstStar = (input, days) => {
  input = input.map(x => parseInt(x));
  for (let day = 1; day <= days; day++) {
    let newFishes = 0;
    for (let i = 0; i < input.length; i++) {
      input[i]--;

      if (input[i] < 0) {
        input[i] = 6;
        newFishes++;
      }
    }

    for (let i = 0; i < newFishes; i++) {
      input.push(8);
    }
  }

  return input.length;
}

const secondStar = (input, days) => {
  let cycle = 6;
  let fishes = Array(cycle + 3).fill(0);
  input.forEach(fish => fishes[fish]++);

  for (let day = 0; day < days; day++) {
    let newFish = fishes.shift();
    fishes[cycle] += newFish;
    fishes.push(newFish);
  }

  return fishes.reduce((acc, cur) => acc += cur);
}

exports.run = () => {
  let input = utils.getInput('2021', 'day06', ',');
  console.log('Answer for first star', firstStar(input, 80));
  console.log('Answer for second star', secondStar(input, 256));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
