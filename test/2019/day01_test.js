const sut = require('../../src/2019/day01');
const assert = require('assert');

describe('2019 - Day 01', function () {

  describe('firstStar', function () {

    it('should calculate fuel consumtion', function () {
      assert.equal(sut.runOne([12, 14, 1969]), 658);
    });

  });

  describe('secondStar', function () {

    it('should calculate total fuel consumtion', function () {
      assert.equal(sut.runTwo([100756]), 50346);
    });

    it('should calculate total fuel consumtion', function () {
      assert.equal(sut.runTwo([1969]), 966);
    });

  });

});

