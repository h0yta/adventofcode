const sut = require('../../src/2021/day06');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 06', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day06', 'utf8').split(',');

    it(' should calculate number of lanternfishes after 18 days', () => {
      assert.strictEqual(sut.runOne(input, 18), 26);
    });

    it(' should calculate number of lanternfishes after 80 days', () => {
      assert.strictEqual(sut.runOne(input, 80), 5934);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day06', 'utf8').split(',');

    it(' should calculate number of lanternfishes after 256 days', () => {
      assert.strictEqual(sut.runTwo(input, 256), 26984457539);
    });

  });

});

