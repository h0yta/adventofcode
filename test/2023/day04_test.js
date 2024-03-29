const sut = require('../../src/2023/day04');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 04', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day04-1', 'utf8').split('\n');

    it(' should summarize all the card points', () => {
      assert.strictEqual(sut.runOne(input), 13);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day04-2', 'utf8').split('\n');

    it(' should summarize number of card copies', () => {
      assert.strictEqual(sut.runTwo(input), 30);
    });

  });

});

