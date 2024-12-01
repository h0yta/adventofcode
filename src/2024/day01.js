const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let lList = input
    .map(row => row.split(/\s+/)[0].trim())
    .map(x => parseInt(x))
    .sort();
  let rList = input
    .map(row => row.split(/\s+/)[1].trim())
    .map(x => parseInt(x))
    .sort();


  let results = [];
  for (let i = 0; i < lList.length; i++) {
    results.push(Math.abs(lList[i] - rList[i]));
  }

  return results.reduce((a, b) => a + b, 0);
}

const secondStar = (input) => {
  let lList = input
    .map(row => row.split(/\s+/)[0].trim())
    .map(x => parseInt(x))
    .sort();
  let rList = input
    .map(row => row.split(/\s+/)[1].trim())
    .map(x => parseInt(x))
    .sort();

  let results = [];
  for (let i = 0; i < lList.length; i++) {
    let simScore = rList.filter(x => x === lList[i]).length;
    results.push(lList[i] * simScore);
  }

  return results.reduce((a, b) => a + b, 0);
}

exports.run = () => {
  let input = utils.getInput('2024', 'day01', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
