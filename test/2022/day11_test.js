const sut = require('../../src/2022/day11');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 11', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day11', 'utf8').split('\n');

    it(' should calculate the level of monkey business after 20 rounds', () => {
      assert.strictEqual(sut.runOne(input, 20), 10605);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2022/day11', 'utf8').split('\n');

    it(' should calculate the level of monkey business after 10000 rounds', () => {
      assert.strictEqual(sut.runTwo(input, 10000), 2713310158);
    });

  });

});

