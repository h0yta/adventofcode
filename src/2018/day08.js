const utils = require('../util/fileUtil');

let i = 0;
const firstStar = function (input) {
  i = 0;
  let nodes = addChildren(input.map(Number), 0);
  let sum = sumNodes(nodes);
  return sum;
}

const addChildren = function (input) {
  let nodes = [];
  for (; i < input.length;) {
    nodes.push(addChild(input));
  }
  return nodes;
}

const addChild = function (input) {
  let noChilds = input[i++];
  let noMetadata = input[i++];

  let children = [];
  for (let c = 0; c < noChilds; c++) {
    children.push(addChild(input));
  }

  let metadata = addMetadata(input, noMetadata);

  return {
    "children": children,
    "metadata": metadata
  };
}

const addMetadata = function (input, noMetadata) {
  let metadata = [];
  for (let m = 0; m < noMetadata; m++) {
    metadata.push(input[i++])
  }
  return metadata;
}

const sumNodes = function (nodes) {
  return nodes.reduce((p, c) => p + sumNode(c), 0);
}

const sumNode = function (node) {
  let sum = 0;
  sum += node.children.reduce((p, c) => p + sumNode(c), 0);
  sum += node.metadata.reduce((p, c) => p + c, 0);
  return sum;
}

const secondStar = function (input) {
  i = 0;
  let nodes = addChildren(input.map(Number), 0);
  let sum = sumIndexRefs(nodes);
  return sum;
}

const sumIndexRefs = function (nodes) {
  return nodes.reduce((p, c) => p + sumIndexRef(c), 0);
}

const sumIndexRef = function (node) {
  if (node.children.length === 0) {
    return node.metadata.reduce((p, c) => p + c, 0);
  } else {
    let k = node.metadata.reduce((p, c) => {
      if (node.children[c - 1]) {
        return p + sumIndexRef(node.children[c - 1]);
      } else {
        return p;
      }
    }, 0);
    return k;
  }
}

exports.run = function () {
  let input = utils.getInput('2018', 'day08', ' ');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;