const sut = require('../../src/2021/day23');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 23', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day23', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runOne(input), 12521);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day23', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

