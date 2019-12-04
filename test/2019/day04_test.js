const sut = require('../../src/2019/day04');
const assert = require('assert');

describe('2019 - Day 04', function () {

  describe('hasAtleastTwoAdjecentDigits', function () {

    it('should evaluate key', function () {
      assert.equal(sut.hasAtleastTwoAdjecentDigits(111111), true, '111111');
      assert.equal(sut.hasAtleastTwoAdjecentDigits(122345), true, '122345');
      assert.equal(sut.hasAtleastTwoAdjecentDigits(111123), true, '111123');
      assert.equal(sut.hasAtleastTwoAdjecentDigits(135679), false, '135679');
      assert.equal(sut.hasAtleastTwoAdjecentDigits(123789), false, '123789');
    });

  });

  describe('hasExactlyTwoAdjecentDigits', function () {

    it('should evaluate key', function () {
      assert.equal(sut.hasExactlyTwoAdjecentDigits(122345), true, '122345');
      assert.equal(sut.hasExactlyTwoAdjecentDigits(111122), true, '111122');
      assert.equal(sut.hasExactlyTwoAdjecentDigits(111789), false, '111789');
      assert.equal(sut.hasExactlyTwoAdjecentDigits(111111), false, '111111');
      assert.equal(sut.hasExactlyTwoAdjecentDigits(111123), false, '111123');
      assert.equal(sut.hasExactlyTwoAdjecentDigits(135679), false, '135679');
      assert.equal(sut.hasExactlyTwoAdjecentDigits(123789), false, '123789');
    });

  });

  describe('isIncreasing', function () {

    it('should evaluate key', function () {
      assert.equal(sut.isIncreasing(111111), true, '111111');
      assert.equal(sut.isIncreasing(122345), true, '122345');
      assert.equal(sut.isIncreasing(142345), false, '142345');
      assert.equal(sut.isIncreasing(122341), false, '122341');
    });

  });

  describe('firstStar', function () {

    it('should calculate number of possible keys', function () {
      // 123555, 123556, 123557, 123558, 123559
      assert.equal(sut.runOne(["123550", "123560"]), 5);
    });

  });

  describe('secondStar', function () {

    it('should calculate number of possible keys', function () {
      // 123556, 123557, 123558, 123559
      assert.equal(sut.runTwo(["123550", "123560"]), 4);
    });

  });
});

