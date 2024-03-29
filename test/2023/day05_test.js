const sut = require('../../src/2023/day05');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 05', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day05-1', 'utf8').split('\n');

    it(' should find the lowest location number from given seeds', () => {
      assert.strictEqual(sut.runOne(input), 35);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day05-2', 'utf8').split('\n');

    it(' should find the lowest location number from seed ranges', () => {
      assert.strictEqual(sut.runTwo(input), 46);
    });

  });

});

