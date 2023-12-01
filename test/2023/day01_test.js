const sut = require('../../src/2023/day01');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 01', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day01-1', 'utf8').split('\n');

    it(' should summarize calibration values', () => {
      assert.strictEqual(sut.runOne(input), 142);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day01-2', 'utf8').split('\n');

    it(' should summarize calibration values again', () => {
      assert.strictEqual(sut.runTwo(input), 281);
    });

  });

});

