const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let theBreak = input.indexOf('');
  let rules = input.slice(0, theBreak);
  let ruleObjects = createObjects(rules);
  let data = input.slice(theBreak + 1, input.length)

  let zeroRule = parseRules(ruleObjects);

  let zerorRegexp = new RegExp(zeroRule);
  let result = data.filter(text => {
    return zerorRegexp.test(text);
  });

  return result.length;
}

const secondStar = function (input) {
  let theBreak = input.indexOf('');
  let rules = input.slice(0, theBreak);
  let ruleObjects = createObjects(rules);
  let data = input.slice(theBreak + 1, input.length)

  // Exchange rules 8 & 11
  ruleObjects[8] = ' ( 42 ) + ';
  ruleObjects[11] = ' ((( 42 ){x}( 31 ){x}) | z ) ';

  let zeroRule = parseRules(ruleObjects);
  let exception = createRecursiveRule11(
    ruleObjects[42].replace(/\s/g, ''),
    ruleObjects[31].replace(/\s/g, ''),
    10);

  // Replace recursive part in regex
  zeroRule = zeroRule.replace(/x/g, 1);
  zeroRule = zeroRule.replace(/z/, exception);

  let zerorRegexp = new RegExp(zeroRule);
  let result = data.filter(text => {
    return zerorRegexp.test(text);
  });

  return result.length;
}

const parseRules = (theRules) => {
  let theRule = theRules[0];

  while (/\d+/.test(theRule)) {
    let subs = /\d+/.exec(theRule)
    for (let [key, value] of Object.entries(theRules)) {
      theRules[key] = replaceAll(value, subs[0], getRuleString(theRules[parseInt(subs[0])]));
    }
    theRule = theRules[0];
  }

  return "^" + theRule.replace(/\s/g, "") + "$";
}

const createRecursiveRule11 = (rule42, rule31, count) => {
  let exceptions = '';
  for (let i = 2; i <= count; i++) {
    if (i > 2) {
      exceptions += '|';
    }
    exceptions += '((' + rule42 + '){' + i + '}(' + rule31 + '){' + i + '})';
  }
  return exceptions;
}

const createObjects = (rules) => {
  let theRules = {};
  for (let i = 0; i < rules.length; i++) {
    if (matchesSingleCharacter(rules[i])) {
      theRules[getNo(rules[i])] = getSingleCharacter(rules[i]);
    } else {
      theRules[getNo(rules[i])] = getSubrules(rules[i]);
    }
  }
  return theRules;
}

const getNo = (rule) => {
  return /(\d+)\:.*/.exec(rule)[1]
}

const matchesSingleCharacter = (rule) => {
  return /\d+\: \"\w\"/.test(rule);
}

const getSingleCharacter = (rule) => {
  return /\d+\: \"(\w)\"/.exec(rule)[1];
}

const getSubrules = (rule) => {
  return /\d+\: (.*)/.exec(rule)[1];
}

const getRuleString = (text) => {
  if (text.includes("|")) {
    return " ( " + text.replace("|", " | ") + " ) ";
  }

  return text;
}

const replaceAll = (text, find, replace) => {
  return text.split(' ').map(x => { return x === find ? replace : x }).join(' ');
}

exports.run = function () {
  let input = utils.getInput('2020', 'day19', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;