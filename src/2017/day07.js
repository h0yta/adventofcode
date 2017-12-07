const utils = require("../util/fileUtil");
const fs = require('fs');

const runOne = function (input) {
  let parsed = input.map(parseInput);
  let children = parsed
    .map(x => x.children)
    .reduce(function (a, b) {
      return a.concat(b);
    }, []);
  let parents = parsed.map(x => x.node);
  return parents.find(x => children.indexOf(x) === -1);
};

const runTwo = function (input) {
  let parsed = input.map(parseInput);
  let bottom = runOne(input);

  let tree = createTree(parsed, bottom);
  return traverse(tree);
};

const createTree = function (allNodes, node) {
  let realNode = allNodes.find(x => x.node === node);
  realNode.realChildren = [];
  realNode.children.forEach(child => realNode.realChildren.push(createTree(allNodes, child)));
  realNode.childWeight = parseInt(realNode.weight) + (realNode.realChildren.length > 0 ? realNode.realChildren.map(x => parseInt(x.childWeight)).reduce((prev, curr) => prev + curr) : 0);
  return realNode;
}

let last = '';
const traverse = function (node) {
  let res = node.realChildren.every(
    function (value, _, array) {
      return array[0].childWeight === value.childWeight;
    }
  );

  let myRes = 0;
  if (!res) {
    last = node.node;
    myRes = node.realChildren.map(traverse).reduce((prev, curr) => prev > curr ? prev : curr);
    if (last === node.node) {
      let max = node.realChildren.reduce((prev, curr) => prev.childWeight > curr.childWeight ? prev : curr).childWeight;
      let maxNodes = node.realChildren.filter(child => child.childWeight === max);
      let min = node.realChildren.reduce((prev, curr) => prev.childWeight < curr.childWeight ? prev : curr).childWeight;
      let minNodes = node.realChildren.filter(child => child.childWeight === min);
      if (maxNodes.length === 1) {
        return maxNodes[0].weight - (maxNodes[0].childWeight - minNodes[0].childWeight);
      } else {
        return minNodes[0].weight - (maxNodes[0].childWeight - minNodes[0].childWeight);
      }
    }
  }

  return myRes;
}

exports.run = function () {
  let input = utils.getInput("day07", "\n");

  console.log("Bottom program (first) is", runOne(input));
  console.log("Bottom program (second) is", runTwo(input));
};

const parseInput = function (input) {
  // ugml (68) -> gyxo, ebii, jptl
  let myParentRegexp = /^(.*)\((.*)\)\s\-\>\s(.*)$/;
  let match = myParentRegexp.exec(input);
  if (match === null) {
    let myChildRegexp = /^(.*)\((.*)\)$/;
    let match = myChildRegexp.exec(input);
    if (match === null) {
      console.log('Found no match for', input);
    } else {
      return {
        "node": match[1].trim(),
        "weight": match[2].trim(),
        "children": []
      }
    }
  } else {
    return {
      "node": match[1].trim(),
      "weight": match[2].trim(),
      "children": match[3].split(',').map(x => x.trim())
    }
  }
}

exports.runOne = runOne;
exports.runTwo = runTwo;
