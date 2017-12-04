const utils = require('../util/fileUtil');

exports.run = function () {
  let input = utils.getInput('day04', '\n');
  let uniqueInput = input.filter(line => {
    let uniqueWords = [];
    line.split(' ').forEach(word => {
      if (uniqueWords.indexOf(word.trim()) < 0) {
        uniqueWords.push(word);
      }
    });

    return line.split(' ').length === uniqueWords.length;
  });

  console.log('Valid passphrases', uniqueInput.length);
}
