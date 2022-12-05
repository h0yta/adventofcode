const sut = require('../../src/2022/day04');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 04', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day04', 'utf8').split('\n');

    it(' should count pairs that is fully contained by the other', () => {
      assert.strictEqual(sut.runOne(input), 2);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2022/day04', 'utf8').split('\n');

    it(' should count pairs that is fully contained by the other', () => {
      assert.strictEqual(sut.runTwo(input), 4);
    });

  });

});

