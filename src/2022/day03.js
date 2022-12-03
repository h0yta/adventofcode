const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let priorites = input.map(rucksack => rucksack.trim())
    .map(rucksack => {
      let l = rucksack.trim().split('').length;
      let comp1 = rucksack.slice(0, l / 2).split('');
      let comp2 = rucksack.slice(l / 2, l).split('');

      let matches = comp1.filter(item => comp2.includes(item));
      matches = removeDuplicates(matches);

      let priority = matches.map(item => getPriority(item))
        .reduce((a, b) => a + b, 0);

      return priority;
    })
  return priorites.reduce((a, b) => a + b);
}

const secondStar = (input) => {
  let rucksacks = input.map(rucksack => rucksack.trim());

  let groupSize = 3;
  let priorites = new Array();
  for (let i = 0; i < rucksacks.length; i += groupSize) {
    let rucksack1 = rucksacks[i].split('');
    let rucksack2 = rucksacks[i + 1].split('');
    let rucksack3 = rucksacks[i + 2].split('');

    let matches = rucksack1.filter(item => rucksack2.includes(item) && rucksack3.includes(item));
    matches = removeDuplicates(matches);

    let priority = matches.map(item => getPriority(item))
      .reduce((a, b) => a + b, 0);
    priorites.push(priority);
  }

  return priorites.reduce((a, b) => a + b);
}

const removeDuplicates = (arr) => {
  return arr.filter((item,
    index) => arr.indexOf(item) === index);
}

const getPriority = (item) => {
  let value = item.charCodeAt();
  if (value <= 90) return value - 64 + 26;
  else return value - 96;
}

exports.run = () => {
  let input = utils.getInput('2022', 'day03', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
