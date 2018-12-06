const utils = require("../util/fileUtil");
let visited = [];

const runOne = function (input) {
  visited = [];
  let map = input.map(parseRow).reduce(function (map, obj) {
    map[obj.program] = obj.connecions;
    return map;
  }, {});

  let res = traverse(0, map);
  return utils.flatten(res)
    .filter(x => x >= 0).length;
};

const runTwo = function (input) {
  visited = [];
  let nodes = input.map(parseRow).map(x => x.program);
  let map = input.map(parseRow).reduce(function (map, obj) {
    map[obj.program] = obj.connecions;
    return map;
  }, {});

  let next = 0;
  let groups = 0;
  while (next !== undefined) {
    groups++;
    let res = traverse(next, map);
    let programs = utils.flatten(res)
      .filter(x => x >= 0);
    nodes = nodes.filter(x => programs.indexOf(x) === -1);
    next = nodes.length > 0 ? nodes[0] : undefined;
  }

  return groups;
};

const traverse = function (programNo, programs) {
  if (visited.indexOf(programNo) >= 0) {
    return [-1];
  }
  visited.push(programNo);
  return [programNo].concat(programs[programNo]
    .map(x => traverse(x, programs)));
}

const parseRow = function (row) {
  let regexp = /^(.*)\<\-\>(.*)/;
  let match = regexp.exec(row);

  return {
    "program": parseInt(match[1].trim()),
    "connecions": match[2].split(',').map(x => parseInt(x.trim()))
  }
}

exports.run = function () {
  let input = utils.getInput('2017', 'day12', '\n');
  console.log("Number of programs (first)", runOne(input));
  console.log("Number of programs (second)", runTwo(input));
};

exports.runOne = runOne;
exports.runTwo = runTwo;