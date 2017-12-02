const utils = require('./util/fileUtil');

const run = function () {
  let year = (new Date()).getFullYear();
  let day = (new Date()).getDate();

  let target = require('./' + year + '/day' + utils.pad(day, 2) + '.js');
  target.run();
}

run();