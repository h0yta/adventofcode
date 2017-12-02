const utils = require('../util/fileUtil');

let sumOne = 0;
let sumTwo = 0;

const run = function () {
  let array = utils.getInput('day01', '');
  for (i = 0; i < array.length; i++) {
    let compareOne = (i + 1) % array.length;
    if (array[i] === array[compareOne]) {
      sumOne += parseInt(array[i]);
    }

    let compareTwo = (i + (array.length / 2)) % array.length;
    if (array[i] === array[compareTwo]) {
      sumTwo += parseInt(array[i]);
    }
  }

  console.log('sumOne', sumOne);
  console.log('sumTwo', sumTwo);
}

run();