const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let guards = findGuards(input);
  let max = guards
    .filter(g => g != null)
    .reduce((p, c) => (p.sleepTime > c.sleepTime) ? p : c)
  return parseInt(max.id) * max.mostSleepMinute;
}

const secondStar = function (input) {
  let guards = findGuards(input);
  let max = guards
    .filter(g => g != null)
    .reduce((p, c) => (p.mostSleepMinute > c.mostSleepMinute) ? p : c)
  return parseInt(max.id) * max.mostSleepMinute;
}

const findGuards = function (input) {
  let guards = [];
  let currentGuardId;
  let start;
  input.map(parseInput)
    .sort((a, b) => a.time - b.time)
    .forEach(row => {
      let action = parseAction(row.action);
      switch (action.action) {
        case 'NEW_GUARD':
          currentGuardId = action.guard;
          if (!guards[currentGuardId]) {
            let currentGuard = {}
            currentGuard.id = currentGuardId;
            currentGuard.sleepMinutes = [];
            guards[currentGuardId] = currentGuard;
          }
          break;
        case 'FALLS_ASLEEP':
          start = row.time.getMinutes();
          break;
        case 'WAKES_UP':
          for (let i = start; i < row.time.getMinutes(); i++) {
            if (!guards[currentGuardId].sleepMinutes[i]) {
              guards[currentGuardId].sleepMinutes[i] = 1;
            } else {
              guards[currentGuardId].sleepMinutes[i]++;
            }
          }
          break;
      }
    });

  guards.filter(g => g != null)
    .forEach(guard => {
      guard.sleepTime = guard.sleepMinutes
        .filter(m => m != null)
        .reduce((a, b) => a + b, 0);
      guard.mostSleepMinute = guard.sleepMinutes
        .indexOf(Math.max(...guard.sleepMinutes
          .filter(m => m != null)));
    });

  return guards;
}

const parseInput = function (row) {
  // [1518-11-02 00:50] wakes up
  let myChildRegexp = /^\[(.*)\] (.*)/;
  let match = myChildRegexp.exec(row);
  if (match === null) {
    console.log('Found no match for', row);
  } else {
    return {
      "time": new Date(match[1].trim()),
      "action": match[2].trim()
    }
  }
}

const parseAction = function (rowAction) {
  let action = {};
  if (rowAction.indexOf('Guard') === 0) {
    action.action = 'NEW_GUARD';
    action.guard = parseInt(/^\Guard\s\#(\d+)\s.*$/
      .exec(rowAction)[1]
      .trim());
  } else if (rowAction.indexOf('falls') === 0) {
    action.action = 'FALLS_ASLEEP';
  } else if (rowAction.indexOf('wakes') === 0) {
    action.action = 'WAKES_UP';
  }

  return action;
}

exports.run = function () {
  let input = utils.getInput('2018', 'day04', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;