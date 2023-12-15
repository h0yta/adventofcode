const utils = require('../util/fileUtil');

const firstStar = (input) => {
  return input.map(calculateHash)
    .reduce((a, b) => a + b, 0);
}

const secondStar = (input) => {
  let boxes = new Array(256);
  let lenses = input.map(parseLenses);
  lenses.forEach(lens => {
    if (lens.operation === '=') {
      if (boxes[lens.labelHash] && hasLabel(boxes[lens.labelHash], lens)) {
        // REPLACE
        boxes[lens.labelHash] = boxes[lens.labelHash]
          .map(boxedLens => boxedLens.label === lens.label ? lens : boxedLens);
      } else if (boxes[lens.labelHash]) {
        // ADD
        boxes[lens.labelHash].push(lens);
      } else {
        // ADD, INCLUDING BOX
        boxes[lens.labelHash] = new Array();
        boxes[lens.labelHash].push(lens);
      }
    } else if (boxes[lens.labelHash] && hasLabel(boxes[lens.labelHash], lens)) {
      // REMOVE IF EXISTS
      boxes[lens.labelHash] = boxes[lens.labelHash]
        .filter(boxedLens => boxedLens.label !== lens.label);
    }
  });

  return calculateFocusingPower(boxes);
}

const calculateFocusingPower = (boxes) => {
  let sum = 0;
  for (let x = 0; x < boxes.length; x++) {
    if (boxes[x] && boxes[x].length > 0) {
      for (let y = 0; y < boxes[x].length; y++) {
        sum += (x + 1) * (y + 1) * boxes[x][y].focalLength;
      }
    }
  }

  return sum;
}

const hasLabel = (arr, lens) => {
  return arr.some(boxedLens => boxedLens.label === lens.label);
}

const calculateHash = (step) => {
  return step.split('')
    .map(char => char.charCodeAt(0))
    .reduce((acc, curr) => ((curr + acc) * 17) % 256, 0)
}

const parseLenses = (lens) => {
  let lensRegex = /(\w+)(\-|\=)(\d*)$/;
  let match = lensRegex.exec(lens.trim());
  if (match === null) {
    console.log('Found no match for', lens);
  } else {
    return {
      label: match[1],
      labelHash: calculateHash(match[1]),
      operation: match[2],
      focalLength: match[3] !== '' ? parseInt(match[3]) : undefined
    }
  }
}

exports.run = () => {
  let input = utils.getInput('2023', 'day15', ',');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
