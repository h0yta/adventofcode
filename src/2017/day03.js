const utils = require('../util/fileUtil');

let sumOne = 0;
let sumTwo = 0;

const run = function () {
  let input = utils.getInput('day03', '');

  console.log(input);

  console.log('sumOne', sumOne);
  console.log('sumTwo', sumTwo);
}

run();