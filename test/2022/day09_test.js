const sut = require('../../src/2022/day09');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 09', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day09', 'utf8').split('\n');

    it(' should find number of positions where tail has been', () => {
      assert.strictEqual(sut.runOne(input), 13);
    });

  });

  describe('secondStar', () => {
    let input1 = fs.readFileSync('./test/data/2022/day09', 'utf8').split('\n');

    it(' should find number of positions where tail has been 1', () => {
      assert.strictEqual(sut.runTwo(input1), 1);
    });

    let input2 = fs.readFileSync('./test/data/2022/day09_2', 'utf8').split('\n');

    it(' should find number of positions where tail has been 2', () => {
      assert.strictEqual(sut.runTwo(input2), 36);
    });

  });

});

