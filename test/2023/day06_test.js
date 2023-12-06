const sut = require('../../src/2023/day06');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 06', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day06-1', 'utf8').split('\n');

    it(' should find number of ways to win all three races', () => {
      assert.strictEqual(sut.runOne(input), 288);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day06-2', 'utf8').split('\n');

    it(' should find number of ways to win the one race', () => {
      assert.strictEqual(sut.runTwo(input), 71503);
    });

  });

});

