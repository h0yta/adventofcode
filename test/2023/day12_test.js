const sut = require('../../src/2023/day12');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 12', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day12-1', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runOne(input), 21);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day12-2', 'utf8').split('\n');

    xit(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 525152);
    });

  });

});

