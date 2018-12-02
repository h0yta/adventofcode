const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let exactlyTwice = 0;
  let exactlyThree = 0;
  input.forEach(elem => {
    let occurences = elem
      .split("")
      .filter(function (item, pos) {
        return elem.indexOf(item) === pos;
      }).map(x => {
        return parseInt(elem.split(x).length - 1);
      });

    exactlyTwice += occurences.filter(x => x === 2).length > 0 ? 1 : 0;
    exactlyThree += occurences.filter(x => x === 3).length > 0 ? 1 : 0;
  });

  return exactlyTwice * exactlyThree;
}

const secondStar = function (input) {
  for (let i = 0; i < input.length - 1; i++) {
    let arrayI = [...input[i]];

    for (let j = i + 1; j < input.length; j++) {
      let arrayJ = [...input[j]];
      let diff = arrayI.reduce((p, c, i) => p + (c === arrayJ[i] ? 0 : 1), 0)

      if (diff === 1) {
        return arrayI.filter((c, i) => c === arrayJ[i]).join('');
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