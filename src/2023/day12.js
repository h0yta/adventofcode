const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let records = input.map(parseRow);

  for (let record of records) {
    let damagedIndices = [...record.condition.matchAll(/\?/g)].map(m => m.index);

    record.possibleArrangements = [];
    for (let bits = 0; bits < 1 << damagedIndices.length; bits++) {
      let i = 0;
      let arrangement = record.condition.replace(/\?/g, () => ".#"[bits >> i++ & 1]);
      let runs = damageRuns(arrangement);
      if (arrayMatch(runs, record.groups)) {
        record.possibleArrangements.push(arrangement);
      }
      record.possibleCount = record.possibleArrangements.length;
    }
  }

  return records.map(r => r.possibleCount)
    .reduce((a, b) => a + b);
}

const secondStar = (input) => {
  return 0;
}

const damageRuns = (arrangement) => {
  return [...arrangement.matchAll(/#+/g)].map(m => m[0].length);
}

const arrayMatch = (a, b) => {
  return (a.length === b.length && a.every((e, i) => e === b[i]));
}

const parseRow = (row) => {
  // #.#.### 1,1,3
  let [condition, groupString] = row.split(' ');
  let groups = groupString.split(',').map(g => parseInt(g));
  return { condition, groups };
}

exports.run = () => {
  let input = utils.getInput('2023', 'day12', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
