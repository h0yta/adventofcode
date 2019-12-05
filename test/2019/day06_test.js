const sut = require('../../src/2019/day06');
const assert = require('assert');

describe('2019 - Day 06', function () {

  describe('firstStar', function () {

    it('should calculate number of possible keys', function () {
      assert.equal(sut.runOne([3, 0, 4, 0, 99]), 0);
    });

  });

  describe('secondStar', function () {

    it('should calculate number of possible keys', function () {
      assert.equal(sut.runTwo([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9]), 0);
    });

  });
});

