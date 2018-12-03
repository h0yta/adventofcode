const sut = require('../../src/2015/day02');
const assert = require('assert');

describe('2015 - Day 02', function () {

  describe('firstStar', function () {

    it('should return 58', function () {
      let input = ['2x3x4'];
      assert.equal(sut.runOne(input), 58);
    });

    it('should return 564', function () {
      let input = ['5x28x4'];
      assert.equal(sut.runOne(input), 564);
    });

    it('should return 43', function () {
      let input = ['1x1x10'];
      assert.equal(sut.runOne(input), 43);
    });

  });

  describe('secondStar', function () {

    it('should return 34', function () {
      let input = ['2x3x4'];
      assert.equal(sut.runTwo(input), 34);
    });

    it('should return 578', function () {
      let input = ['5x28x4'];
      assert.equal(sut.runTwo(input), 578);
    });

    it('should return 14', function () {
      let input = ['1x1x10'];
      assert.equal(sut.runTwo(input), 14);
    });

  });

});

