const sut = require('../../src/2019/day05');
const assert = require('assert');

describe('2019 - Day 05', function () {

  describe('firstStar', function () {

    it('should calculate number of possible keys', function () {
      assert.equal(sut.runOne(["100000", "112233"]), 0);
    });

  });

  describe('secondStar', function () {

    it('should calculate number of possible keys', function () {
      assert.equal(sut.runTwo(["100000", "112233"]), 0);
    });

  });
});

