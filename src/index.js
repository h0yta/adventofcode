const utils = require('./util/fileUtil');

const run = function (argv) {
  if (argv[2] === undefined && argv[3] === undefined) {
    let year = (new Date()).getFullYear();
    let day = (new Date()).getDate();
    
    let timerName = year + ' day' + utils.pad(day, 2);
    console.time(timerName);
    
    let target = require('./' + year + '/day' + utils.pad(day, 2) + '.js');
    target.run();
    
    console.timeEnd(timerName);
  } else if (argv[2] !== undefined && argv[3] !== undefined) {
    let timerName = '' + argv[2] + ' day' + utils.pad(argv[3], 2);
    console.time(timerName);

    let target = require('./' + argv[2] + '/day' + utils.pad(argv[3], 2) + '.js');
    target.run();
    
    console.timeEnd(timerName);
  } else {
    console.log('Invalid arguments:', argv[1], '<year> <day>')
  }
}

run(process.argv);