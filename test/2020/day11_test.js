const sut = require('../../src/2020/day11');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 11', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day11', 'utf8').split('\n');

    it('should find number of occupied seats', function () {
      assert.strictEqual(sut.runOne(input), 37);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day11', 'utf8').split('\n');

    it('should find number of occupied seats', function () {
      assert.strictEqual(sut.runTwo(input), 26);
    });

  });

});

