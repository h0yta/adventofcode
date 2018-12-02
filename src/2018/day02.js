const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let exactlyTwice = 0;
  let exactlyThrice = 0;
  input.forEach(id => {
    let occurences = id
      .split('')
      .filter((item, pos) => id.indexOf(item) === pos)
      .map(item => id.split(item).length - 1);

    exactlyTwice += occurences.filter(x => x === 2).length > 0 ? 1 : 0;
    exactlyThrice += occurences.filter(x => x === 3).length > 0 ? 1 : 0;
  });

  return exactlyTwice * exactlyThrice;
}

const secondStar = function (input) {
  for (let i = 0; i < input.length - 1; i++) {
    let iArray = [...input[i]];

    for (let j = i + 1; j < input.length; j++) {
      let jArray = [...input[j]];
      let diff = iArray.reduce((p, c, i) => p + (c === jArray[i] ? 0 : 1), 0)

      if (diff === 1) {
        return iArray.filter((c, i) => c === jArray[i]).join('');
      }
    }
  }
}

exports.run = function () {
  let input = utils.getInput('2018', 'day02', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;