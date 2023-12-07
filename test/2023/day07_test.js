const sut = require('../../src/2023/day07');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 07', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day07-1', 'utf8').split('\n');

    it(' should summarize winnings of all hands', () => {
      assert.strictEqual(sut.runOne(input), 6440);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day07-2', 'utf8').split('\n');

    it(' should summarize winnings of all hands considering Jokers', () => {
      assert.strictEqual(sut.runTwo(input), 5905);
    });

  });

});

