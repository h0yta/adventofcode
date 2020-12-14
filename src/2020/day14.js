const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let mask;
  let memory = new Array();
  input.forEach(row => {
    if (isMask(row)) {
      mask = getMask(row);
    } else {
      let instruction = parseInstruction(row);
      memory[instruction.decAddress] = parseInt(applyMask(instruction.binValue, mask), 2);
    }
  });

  return memory.reduce((x, y) => x + y, 0);
}

const secondStar = function (input) {
  let mask;
  let memory = new Array();
  input.forEach(row => {
    if (isMask(row)) {
      mask = getMask(row);
    } else {
      let instruction = parseInstruction(row);

      let addresses = new Array();
      populateAddresses(instruction.binAddress, mask, 0, '', addresses);

      addresses.map(address => parseInt(address, 2))
        .forEach(address => {
          memory[address] = instruction.decValue;
        })
    }
  });

  return Object.values(memory)
    .reduce((x, y) => x + y, 0);
}

const isMask = (row) => {
  return row.split('=')[0].trim() === 'mask';
}

const getMask = (row) => {
  return row.split('=')[1].trim();
}

const applyMask = (bin, mask) => {
  let maskArray = mask.split('');
  let binArray = bin.split('');

  for (let i = 0; i < maskArray.length; i++) {
    if (maskArray[i] !== 'X') {
      binArray[i] = maskArray[i];
    }
  }

  return binArray.join('');
}

const populateAddresses = (address, mask, i, tmpAddress, addresses) => {
  let maskArray = mask.split('');
  let addressArray = address.split('');
  for (; i < maskArray.length; i++) {
    if (maskArray[i] === 'X') {
      populateAddresses(address, mask, i + 1, (tmpAddress + '0'), addresses);
      populateAddresses(address, mask, i + 1, (tmpAddress + '1'), addresses);
      return;
    } else if (maskArray[i] === '0') {
      tmpAddress += addressArray[i];
    } else {
      tmpAddress += maskArray[i];
    }
  }

  addresses.push(tmpAddress);
}

const parseInstruction = (row) => {
  let memRegexp = /^mem\[(\d+)\]\s=\s(\d+)$/;
  let match = memRegexp.exec(row);
  if (match === null) {
    console.log('Found no match for', row);
  } else {
    return {
      "decAddress": parseInt(match[1].trim()),
      "binAddress": to36BitBin(match[1].trim()),
      "decValue": parseInt(match[2].trim()),
      "binValue": to36BitBin(match[2].trim())
    }
  }
}

const to36BitBin = (dec) => {
  return utils.pad((dec >>> 0).toString(2), 36);
}

exports.run = function () {
  let input = utils.getInput('2020', 'day14', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;

