const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let maps = parseInput(input);
  let minLocation = Number.MAX_SAFE_INTEGER;
  for (let seedNo = 0; seedNo < maps.seeds.length; seedNo++) {
    let seed = maps.seeds[seedNo];
    let location = getLocation(maps.maps, seed);
    if (location < minLocation) {
      minLocation = location;
    }
  }
  return minLocation;
}

const secondStar = (input) => {
  let maps = parseInput(input);
  let minLocation = Number.MAX_SAFE_INTEGER;
  let sortedRanges = getSortedRanges(maps.seeds);

  for (let range = 0; range < sortedRanges.length; range++) {
    for (let seed = sortedRanges[range].start; seed < sortedRanges[range].end; seed++) {
      let location = getLocation(maps.maps, seed);
      if (location < minLocation) {
        minLocation = location;
      }
    }
  }

  return minLocation;
}

const getSortedRanges = (ranges) => {
  let mapped = [];
  for (let rangeNo = 0; rangeNo < ranges.length; rangeNo += 2) {
    mapped.push({
      start: ranges[rangeNo],
      end: ranges[rangeNo] + ranges[rangeNo + 1]
    });
  }

  return mapped.sort((a, b) => a.start - b.start);
}

const getLocation = (maps, start) => {
  let destination;
  for (let mapNo = 0; mapNo < maps.length; mapNo++) {
    let map = maps[mapNo];
    destination = getDestination(map, start);
    start = destination;
  }
  return destination;
}

const getDestination = (map, source) => {
  for (let rangeNo = 0; rangeNo < map.ranges.length; rangeNo++) {
    let range = map.ranges[rangeNo];
    if (source >= range.sourceStart && source <= range.sourceEnd) {
      return source + (range.destStart - range.sourceStart);
    }
  }
  return source;
}

const parseInput = (input) => {
  let seeds = [];
  let maps = [];
  let tmpMap = null;
  for (let row = 0; row < input.length; row++) {
    if (row === 0) {
      seeds = input[row].split(':')[1].trim().split(/\s/).map(x => parseInt(x));
    } else if (input[row].trim() === '') {
      if (tmpMap !== null) {
        tmpMap.ranges.sort((a, b) => a.destStart - b.destStart);
        maps.push(tmpMap);
        tmpMap = null;
      }
    } else if (input[row].indexOf('map:') > 0) {
      tmpMap = {};
      tmpMap.name = input[row].split(/\s/)[0];
      tmpMap.ranges = [];
    } else {
      let ranges = input[row].split(/\s/).map(x => parseInt(x));
      tmpMap.ranges.push({
        sourceStart: ranges[1],
        sourceEnd: ranges[1] + ranges[2],
        destStart: ranges[0],
        destEnd: ranges[0] + ranges[2]
      });
    }
  }
  tmpMap.ranges.sort((a, b) => a.destStart - b.destStart);

  maps.push(tmpMap);
  return { seeds, maps };
}

exports.run = () => {
  let input = utils.getInput('2023', 'day05', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
