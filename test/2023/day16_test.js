const sut = require('../../src/2023/day16');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 16', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day16-1', 'utf8').split('\n');

    it(' should count how many tiles end up being energized', () => {
      assert.strictEqual(sut.runOne(input), 46);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day16-2', 'utf8').split('\n');

    it(' should count how many tiles end up being energized when starting position is optimized', () => {
      assert.strictEqual(sut.runTwo(input), 51);
    });

  });

});

