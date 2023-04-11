const sut = require('../../src/2022/day12');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 12', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day12', 'utf8').split('\n');

    it(' should fewest steps from S to E', () => {
      assert.strictEqual(sut.runOne(input), 31);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2022/day12', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

