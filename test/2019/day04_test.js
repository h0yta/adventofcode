const sut = require('../../src/2019/day04');
const assert = require('assert');

describe('2019 - Day 04', function () {

  describe('hasDoubleDigit', function () {

    it('should eveluate code', function () {
      assert.equal(sut.hasDoubleDigit(111111), true, '111111');
      assert.equal(sut.hasDoubleDigit(122345), true, '122345');
      assert.equal(sut.hasDoubleDigit(111123), true, '111123');
      assert.equal(sut.hasDoubleDigit(135679), false, '135679');
      assert.equal(sut.hasDoubleDigit(123789), false, '123789');
    });

  });

  describe('hasOnlyDoubleDigit', function () {

    it('should eveluate code', function () {
      assert.equal(sut.hasOnlyDoubleDigit(111789), false, '111789');
      assert.equal(sut.hasOnlyDoubleDigit(111111), true, '111111');
      assert.equal(sut.hasOnlyDoubleDigit(122345), true, '122345');
      assert.equal(sut.hasOnlyDoubleDigit(111123), true, '111123');
      assert.equal(sut.hasOnlyDoubleDigit(135679), false, '135679');
      assert.equal(sut.hasOnlyDoubleDigit(123789), false, '123789');
    });

  });

  describe('isIncreasing', function () {

    it('should eveluate code', function () {
      assert.equal(sut.isIncreasing(111111), true, '111111');
      assert.equal(sut.isIncreasing(122345), true, '122345');
      assert.equal(sut.isIncreasing(142345), false, '142345');
      assert.equal(sut.isIncreasing(122341), false, '122341');
    });

  });

  describe('firstStar', function () {

    it('should do something', function () {
      assert.equal(sut.runOne(["R8,U5,L5,D3", "U7,R6,D4,L4"]), 0);
    });

  });

  describe('secondStar', function () {

    it('should do something', function () {
      assert.equal(sut.runTwo(["R8,U5,L5,D3", "U7,R6,D4,L4"]), 0);
    });

  });
});

