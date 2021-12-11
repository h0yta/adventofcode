const sut = require('../../src/2021/day08');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 08', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day08', 'utf8').split('\n');

    it(' should count number of apperences of 1, 4, 7 and 8', () => {
      assert.strictEqual(sut.runOne(input), 26);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day08', 'utf8').split('\n');

    it(' should sum up all values from the output', () => {
      assert.strictEqual(sut.runTwo(input), 61229);
    });

  });

});
