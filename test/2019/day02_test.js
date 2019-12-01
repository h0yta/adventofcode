const sut = require('../../src/2019/day02');
const assert = require('assert');

describe('2019 - Day 02', function () {

  describe('firstStar', function () {

    it('should calculate fuel consumtion', function () {
      assert.equal(sut.runOne([12]), [12]);
    });

  });

  describe('secondStar', function () {

    it('should calculate total fuel consumtion', function () {
      assert.equal(sut.runTwo([100756]), [100756]);
    });

  });

});

