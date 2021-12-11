const sut = require('../../src/2021/day11');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 11', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day11', 'utf8').split('\n');

    it(' should count number of flashes', () => {
      assert.strictEqual(sut.runOne(input, 10), 204);
    });

    it(' should count number of flashes', () => {
      assert.strictEqual(sut.runOne(input, 100), 1656);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day11', 'utf8').split('\n');

    it(' should figure out after which steps ALL flashes', () => {
      assert.strictEqual(sut.runTwo(input), 195);
    });

  });

});

