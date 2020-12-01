const sut = require('../../src/2020/day01');
const assert = require('assert');

describe('2020 - Day 01', function () {

  describe('firstStar', function () {

    it('should ...', function () {
      assert.strictEqual(sut.runOne([1721, 979, 366, 299, 675, 1456]), 514579);
    });

  });

  describe('secondStar', function () {

    it('should ...', function () {
      assert.strictEqual(sut.runTwo([1721, 979, 366, 299, 675, 1456]), 241861950);
    });

  });

});

