const utils = require('../util/fileUtil');

const firstStar = function (color, input) {
  let parsed = input.map(parseRule);
  return findBags(parsed, color, []);;
}

const secondStar = function (color, input) {
  let parsed = input.map(parseRule);

  return calculateBagsCount(parsed, color);;
}

const parseRule = function (rule) {
  let ruleRegexp = /^(.*)bags contain(.*)/;
  let match = ruleRegexp.exec(rule);
  if (match === null) {
    console.log('Found no match for', rule);
  } else {
    return {
      "parent": match[1].trim(),
      "children": parserChildren(match[2].trim())
    }
  }
}

const parserChildren = function (rule) {
  if (rule.includes('no other bags')) {
    return [];
  }

  let ruleRegexp = /^([\d]+)(.*)bag.*$/;
  return rule.split(',')
    .map(x => x.trim())
    .map(child => {
      let match = ruleRegexp.exec(child);
      if (match === null) {
        console.log('Found no match for', child);
      } else {
        return {
          "child": match[2].trim(),
          "count": parseInt(match[1].trim())
        }
      }
    })
}

const findBags = function (rules, theColor, visited) {
  if (visited.includes(theColor)) {
    return 0;
  }

  visited.push(theColor);
  return rules.map(rule => {
    if (rule.children.map(x => x.child).includes(theColor)
      && !visited.includes(rule.parent)) {
      return 1 + findBags(rules, rule.parent, visited);
    } else {
      return 0;
    }
  }).reduce((x, y) => x + y, 0);
}

const calculateBagsCount = function (rules, theColor) {
  // Find all my children
  let children = rules.filter(rule => {
    return rule.parent === theColor;
  }).flatMap(rule => rule.children);

  // Calculate children count
  let parentCount = children.map(x => x.count).reduce((x, y) => x + y, 0);

  // Calculate childrens childrens count
  return parentCount + children
    .map(child => child.count * calculateBagsCount(rules, child.child))
    .reduce((x, y) => x + y, 0);
}

exports.run = function () {
  let input = utils.getInput('2020', 'day07', '\n');
  console.log('Answer for first star', firstStar('shiny gold', input));
  console.log('Answer for second star', secondStar('shiny gold', input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
