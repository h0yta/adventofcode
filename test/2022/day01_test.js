const sut = require('../../src/2022/day01');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 01', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day01', 'utf8').split('\n');

    it(' should find the most calories', () => {
      assert.strictEqual(sut.runOne(input), 24000);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2022/day01', 'utf8').split('\n');

    it(' should sum the three most calories', () => {
      assert.strictEqual(sut.runTwo(input), 45000);
    });

  });

});

