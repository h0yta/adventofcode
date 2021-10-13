const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let keypad = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
  ];

  return moveOnKeyPad(keypad, input, 1, 1);
}

const secondStar = function (input) {
  let keypad = [
    [null, null, '1', null, null],
    [null, '2', '3', '4', null],
    ['5', '6', '7', '8', '9'],
    [null, 'A', 'B', 'C', null],
    [null, null, 'D', null, null]
  ];

  return moveOnKeyPad(keypad, input, 0, 2);
}

const moveOnKeyPad = (keypad, instructions, xStart, yStart) => {
  let x = xStart;
  let y = yStart;
  let code = '';
  instructions.forEach(inst => {
    let instArray = inst.split('');
    for (let i = 0; i < instArray.length; i++) {
      switch (instArray[i]) {
        case 'U': {
          let diff = y - 1;
          if (keypad[diff] && keypad[diff][x]) {
            y--;
          }
          break;
        }
        case 'R': {
          let diff = x + 1;
          if (keypad[y][diff]) {
            x++;
          }
          break;
        }
        case 'D': {
          let diff = y + 1;
          if (keypad[diff] && keypad[diff][x]) {
            y++;
          }
          break;
        }
        case 'L': {
          let diff = x - 1;
          if (keypad[y][diff]) {
            x--;
          }
          break;
        }
      }
    }

    code = code + keypad[y][x];
  });

  return code;
}

exports.run = function () {
  let input = utils.getInput('2016', 'day02', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
