const utils = require('../util/fileUtil');

const firstStar = (input, rounds) => {
  let monkeys = parseMonkeys(input);

  for (let round = 1; round <= rounds; round++) {
    for (let monkeyIndex = 0; monkeyIndex < monkeys.length; monkeyIndex++) {
      let monkey = monkeys[monkeyIndex];

      for (let worryLevelIndex = 0; worryLevelIndex < monkey.worryLevels.length; worryLevelIndex++) {
        monkey.inspected += 1;
        let worryLevel = monkey.worryLevels[worryLevelIndex];
        let newWorryLevel = -1;

        if (monkey.operation.operator === '*') {
          if (monkey.operation.numeric) {
            newWorryLevel = worryLevel * monkey.operation.value;
          } else {
            newWorryLevel = worryLevel * worryLevel;
          }
        } else if (monkey.operation.operator === '+') {
          if (monkey.operation.numeric) {
            newWorryLevel = worryLevel + monkey.operation.value;
          } else {
            newWorryLevel = worryLevel + worryLevel;
          }
        }

        newWorryLevel = Math.floor(newWorryLevel / 3);
        if (newWorryLevel % monkey.test.divisor === 0) {
          monkeys[monkey.test.true].worryLevels.push(newWorryLevel);
        } else {
          monkeys[monkey.test.false].worryLevels.push(newWorryLevel);
        }
      }

      monkey.worryLevels = new Array();
    }
  }

  monkeys.sort((a, b) => (a.inspected < b.inspected) ? 1 : -1)
  return monkeys[0].inspected * monkeys[1].inspected;
}

const secondStar = (input, rounds) => {
  let monkeys = parseMonkeys(input);
  let modifier = calculateModifier(monkeys);

  for (let round = 1; round <= rounds; round++) {
    for (let monkeyIndex = 0; monkeyIndex < monkeys.length; monkeyIndex++) {
      let monkey = monkeys[monkeyIndex];

      for (let worryLevelIndex = 0; worryLevelIndex < monkey.worryLevels.length; worryLevelIndex++) {
        monkey.inspected += 1;
        let worryLevel = monkey.worryLevels[worryLevelIndex];
        let newWorryLevel = -1;

        if (monkey.operation.operator === '*') {
          if (monkey.operation.numeric) {
            newWorryLevel = worryLevel * monkey.operation.value;
          } else {
            newWorryLevel = worryLevel * worryLevel;
          }
        } else if (monkey.operation.operator === '+') {
          if (monkey.operation.numeric) {
            newWorryLevel = worryLevel + monkey.operation.value;
          } else {
            newWorryLevel = worryLevel + worryLevel;
          }
        }

        newWorryLevel = newWorryLevel % modifier;
        if (newWorryLevel % monkey.test.divisor === 0) {
          monkeys[monkey.test.true].worryLevels.push(newWorryLevel);
        } else {
          monkeys[monkey.test.false].worryLevels.push(newWorryLevel);
        }
      }

      monkey.worryLevels = new Array();
    }
  }

  monkeys.sort((a, b) => (a.inspected < b.inspected) ? 1 : -1)
  return monkeys[0].inspected * monkeys[1].inspected;
}


const parseMonkeys = (input) => {
  let monkeys = new Array();
  let monkey = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i].trim().indexOf('Monkey') === 0) {
      monkey = { inspected: 0 };
      monkeys.push(monkey);
      let monkeyRegex = /\w+ (\d+):/;
      let match = monkeyRegex.exec(input[i].trim());
      if (match === null) {
        console.log('Found no match for', input[i].trim());
      } else {
        monkey.id = parseInt(parseInt(match[1].trim()));
      }
    } else if (input[i].trim().indexOf('Starting') === 0) {
      let startingRegex = /^Starting items:(.*)/;
      let match = startingRegex.exec(input[i].trim());
      if (match === null) {
        console.log('Found no match for', input[i]);
      } else {
        monkey.worryLevels = match[1].split(',').map(x => parseInt(x.trim()));
      }
    } else if (input[i].trim().indexOf('Operation') === 0) {
      let startingRegex = /^Operation: new = old ([\*|\+]) (.*)/;
      let match = startingRegex.exec(input[i].trim());
      if (match === null) {
        console.log('Found no match for', input[i]);
      } else {
        let numeric = !isNaN(+match[2].trim());
        let value = match[2].trim();
        if (numeric) {
          value = parseInt(value);
        }
        monkey.operation = { operator: match[1].trim(), value, numeric };
      }
    } else if (input[i].trim().indexOf('Test') === 0) {
      let testRegex = /^Test: divisible by (\d+)/;
      let match = testRegex.exec(input[i].trim());
      if (match === null) {
        console.log('Found no match for', input[i]);
      } else {
        monkey.test = { divisor: parseInt(match[1].trim()) };
      }
    } else if (input[i].trim().indexOf('If true') === 0) {
      let trueRegex = /^If true: throw to monkey (\d+)/;
      let match = trueRegex.exec(input[i].trim());
      if (match === null) {
        console.log('Found no match for', input[i]);
      } else {
        monkey.test.true = parseInt(match[1].trim());
      }
    }
    else if (input[i].trim().indexOf('If false') === 0) {
      let falseRegex = /^If false: throw to monkey (\d+)/;
      let match = falseRegex.exec(input[i].trim());
      if (match === null) {
        console.log('Found no match for', input[i]);
      } else {
        monkey.test.false = parseInt(match[1].trim());
      }
    }
  }
  return monkeys;
}

const calculateModifier = (monkeys) => {
  let modifier = 1;
  monkeys.forEach(monkey =>
    modifier *= monkey.test.divisor
  );
  return modifier;
}

exports.run = () => {
  let input = utils.getInput('2022', 'day11', '\n');
  console.log('Answer for first star', firstStar(input, 20));
  console.log('Answer for second star', secondStar(input, 10000));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
