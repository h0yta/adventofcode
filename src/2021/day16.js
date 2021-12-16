const utils = require('../util/fileUtil');

const firstStar = (input) => {
  input = parseInput(input);
  let packet = parsePacket(input, 0);
  return sumSubpacketVersions(packet);
}

const sumSubpacketVersions = (packet) => {
  if (packet.subpackets) {
    return packet.version + packet.subpackets.map(subpacket => {
      return sumSubpacketVersions(subpacket);
    }).reduce((acc, cur) => acc += cur, 0);
  } else {
    return packet.version;
  }
};

const secondStar = (input) => {
  input = parseInput(input);
  let packet = parsePacket(input, 0);
  return sumSubpacketValues(packet);
}

const sumSubpacketValues = (packet) => {
  switch (packet.id) {
    case 0:
      return packet.subpackets.map(subpacket => {
        return sumSubpacketValues(subpacket);
      }).reduce((acc, cur) => acc += cur, 0);
    case 1:
      return packet.subpackets.map(subpacket => {
        return sumSubpacketValues(subpacket);
      }).reduce((acc, cur) => acc *= cur, 1);
    case 2:
      return Math.min(...packet.subpackets.map(subpacket => {
        return sumSubpacketValues(subpacket);
      }));
    case 3:
      return Math.max(...packet.subpackets.map(subpacket => {
        return sumSubpacketValues(subpacket);
      }));
    case 4: return packet.value;
    case 5:
      return sumSubpacketValues(packet.subpackets[0])
        > sumSubpacketValues(packet.subpackets[1]) ? 1 : 0;
    case 6:
      return sumSubpacketValues(packet.subpackets[0])
        < sumSubpacketValues(packet.subpackets[1]) ? 1 : 0;
    case 7:
      return sumSubpacketValues(packet.subpackets[0])
        === sumSubpacketValues(packet.subpackets[1]) ? 1 : 0;
  }
};

const parsePacket = (input, counter) => {
  let packet = {};
  packet.start = counter;
  packet.version = parseInt(input.substring(counter, counter + 3), 2);
  counter += 3;
  packet.id = parseInt(input.substring(counter, counter + 3), 2);
  counter += 3;

  if (packet.id === 4) {
    let [value, valueCounter] = parseLitteralValue(input, counter);
    packet.value = value;
    packet.end = valueCounter;
    return packet;
  }

  packet.lengthType = parseInt(input.substring(counter, counter + 1), 2);
  counter += 1;

  packet.subpackets = new Array();
  if (packet.lengthType === 0) {
    packet.bitLength = parseInt(input.substring(counter, counter + 15), 2);
    counter += 15;
    let diff = packet.bitLength;
    while (diff > 0) {
      let subPacket = parsePacket(input, counter);
      packet.subpackets.push(subPacket);
      diff -= (subPacket.end - counter);
      counter = subPacket.end;
    }
  } else if (packet.lengthType === 1) {
    packet.numberOfPackets = parseInt(input.substring(counter, counter + 11), 2);
    counter += 11;
    for (let i = 0; i < packet.numberOfPackets; i++) {
      let subPacket = parsePacket(input, counter);
      packet.subpackets.push(subPacket);
      counter = subPacket.end;
    }
  }

  packet.end = counter;
  return packet;
}

const parseLitteralValue = (input, counter) => {
  let binValue = '';
  let key = 1;

  while (key === 1) {
    key = parseInt(input.substring(counter, counter + 1), 2);
    binValue += input.substring(counter + 1, counter + 5);
    counter += 5;
  }

  return [parseInt(binValue, 2), counter];
}

const parseInput = (input) => {
  return input.split('')
    .map(x => parseInt(x, 16))
    .map(x => to4BitBin(x))
    .join('');
}

const to4BitBin = (dec) => {
  return utils.pad((dec >>> 0).toString(2), 4);
}

exports.run = () => {
  let input = utils.getCompleteInput('2021', 'day16');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
exports.parseInput = parseInput;
