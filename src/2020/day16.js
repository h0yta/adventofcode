const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let t1 = input.indexOf('your ticket:');
  let t2 = input.indexOf('nearby tickets:');
  let rules = input.slice(0, t1 - 1).map(parseRule);
  let nearbyTickets = input.slice(t2 + 1, input.length);

  let answers = nearbyTickets.flatMap(ticket => {
    return findInvalidField(ticket, rules);
  })

  return answers.reduce((x, y) => x + y, 0);
}

const secondStar = function (input, keyword) {
  let t1 = input.indexOf('your ticket:');
  let t2 = input.indexOf('nearby tickets:');
  let rules = input.slice(0, t1 - 1).map(parseRule);
  let myTicket = input.slice(t1 + 1, t1 + 2).pop();
  let nearbyTickets = input.slice(t2 + 1, input.length);

  let validTickets = nearbyTickets.filter(ticket => {
    return filterInvalidField(ticket, rules);
  })
  validTickets.push(myTicket);

  myTicket = myTicket.split(',');
  let possibleRules = new Map();
  for (let i = 0; i < myTicket.length; i++) {
    let fields = validTickets.map(ticket => parseInt(ticket.split(',')[i]));
    let poss = rules.filter(rule => ruleMatchEveryField(rule, fields));
    possibleRules.set(i, poss);
  }

  let matchedRules = matchAllRules(possibleRules, myTicket);
  return matchedRules
    .filter(rule => rule.name.includes(keyword))
    .map(rule => rule.myValue)
    .reduce((x, y) => x * y, 1)
}

const matchAllRules = (possibleRules, myTicket) => {
  let matchedRules = new Array();
  while (possibleRules.size > 0) {
    for (let i = 0; i < myTicket.length; i++) {
      if (possibleRules.has(i) && possibleRules.get(i).length === 1) {
        let foundRule = possibleRules.get(i).pop();
        foundRule.myValue = myTicket[i];
        matchedRules.push(foundRule)
        possibleRules.delete(i);

        for (let j = 0; j < myTicket.length; j++) {
          if (possibleRules.has(j)) {
            let newRules = possibleRules.get(j);
            if (newRules.indexOf(foundRule) > -1) {
              newRules.splice(newRules.indexOf(foundRule), 1);
            }
            possibleRules.set(j, newRules)
          }
        }
      }
    }
  }

  return matchedRules;
}

const filterInvalidField = (ticket, rules) => {
  return ticket.split(',').map(x => parseInt(x))
    .every(field => {
      return fieldMatchAnyRule(field, rules);
    });
}

const findInvalidField = (ticket, rules) => {
  return ticket.split(',').map(x => parseInt(x))
    .filter(field => {
      return !fieldMatchAnyRule(field, rules);
    });
}

const fieldMatchAnyRule = (field, rules) => {
  return rules.some(rule => {
    return ruleMatch(field, rule);
  })
}

const ruleMatchEveryField = (rule, fields) => {
  return fields.every(field => {
    return ruleMatch(field, rule);
  })
}

const ruleMatch = (field, rule) => {
  return (field >= rule.oneLow && field <= rule.oneHigh)
    || (field >= rule.twoLow && field <= rule.twoHigh);
}

//class: 1-3 or 5-7
const parseRule = (rule) => {
  let ruleRegexp = /^(.*): (\d+)-(\d+) or (\d+)-(\d+)/;
  let match = ruleRegexp.exec(rule);
  if (match === null) {
    console.log('Found no match for', rule);
  } else {
    return {
      "name": match[1].trim(),
      "oneLow": parseInt(match[2].trim()),
      "oneHigh": parseInt(match[3].trim()),
      "twoLow": parseInt(match[4].trim()),
      "twoHigh": parseInt(match[5].trim())
    }
  }
}

exports.run = function () {
  let input = utils.getInput('2020', 'day16', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input, 'departure'));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
