const sut = require('../../src/2019/day08');
const assert = require('assert');

describe('2019 - Day 08', function () {

  describe('firstStar', function () {

    it('should calculate number of possible keys', function () {
      assert.equal(sut.runOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2], 3, 2), 1);
      assert.equal(sut.runOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 0, 1, 0, 0, 1, 2], 3, 2), 1);
    });

  });

  describe('secondStar', function () {

    it('should calculate number of possible keys', function () {
      assert.equal(sut.runTwo([0, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0], 2, 2), 0);
    });

  });
});

