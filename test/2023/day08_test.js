const sut = require('../../src/2023/day08');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 08', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day08-1', 'utf8').split('\n');

    it(' should find number of turns to get to ZZZ', () => {
      assert.strictEqual(sut.runOne(input), 6);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day08-2', 'utf8').split('\n');

    it(' should find number of turns for all starting points to get to the end points at the same time', () => {
      assert.strictEqual(sut.runTwo(input), 6);
    });

  });

});

