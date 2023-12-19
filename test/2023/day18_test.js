const sut = require('../../src/2023/day18');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 18', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day18-1', 'utf8').split('\n');

    it(' should calculate how many cubic meters of lava the hole could hold', () => {
      assert.strictEqual(sut.runOne(input), 62);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day18-2', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

