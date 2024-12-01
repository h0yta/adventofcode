const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let [workflows, parts] = parseInput(input);


  for (let part = 0; part < parts.length; part++) {
    let cursor = 'in';
    while (cursor !== 'A' && cursor !== 'R') {
      let workflow = workflows[cursor];

      let nextWorkflow;
      for (let rule = 0; !nextWorkflow; rule++) {
        if (workflow[rule].category) {
          let result = workflow[rule].rule(parts[part][workflow[rule].category]);
          if (result) {
            nextWorkflow = workflow[rule].conditionWorkflow;
          }
        } else {
          nextWorkflow = workflow[rule].conditionWorkflow;
        }
      }

      cursor = nextWorkflow;
    }

    parts[part].accepted = cursor === 'A' ? true : false;
  }

  return parts
    .filter(part => part.accepted)
    .map(part => part.x + part.m + part.a + part.s)
    .reduce((a, b) => a + b, 0);
}

const secondStar = (input) => {
  return 0;
}

const parseInput = (input) => {
  let workflows = parseWorkflows(input);
  let parts = parseParts(input);

  return [workflows, parts];
}

const parseWorkflows = (input) => {
  let workflows = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i].trim() === '') { return workflows };

    let workflow = input[i].match(/(\w+)\{(.+)\}/);
    let rules = workflow[2].split(/,/).map(part => {
      let conditional = part.match(/^([a-z])(<|>)(\d+):(.+)$/);
      if (conditional) {
        return {
          category: conditional[1],
          conditionWorkflow: conditional[4],
          rule: (x) => conditional[2] === '<' ? x < parseInt(conditional[3]) : x > parseInt(conditional[3])
        };
      } else {
        return { conditionWorkflow: part };
      }
    });

    workflows[workflow[1]] = rules;
  }
}

const parseParts = (input) => {
  let parts = [];
  let breakFound = false
  for (let i = 0; i < input.length; i++) {
    if (input[i].trim() === '') {
      breakFound = true;
      continue;
    } else if (!breakFound) {
      continue;
    } else {

    }

    let partRow = input[i].match(/\{x\=(\d+),m\=(\d+),a\=(\d+),s\=(\d+)\}/);
    parts.push({
      x: parseInt(partRow[1]),
      m: parseInt(partRow[2]),
      a: parseInt(partRow[3]),
      s: parseInt(partRow[4]),
    })
  }

  return parts;
}

exports.run = () => {
  let input = utils.getInput('2023', 'day19', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
