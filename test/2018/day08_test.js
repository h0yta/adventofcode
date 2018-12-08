const sut = require('../../src/2018/day08');
const assert = require('assert');

describe('2018 - Day 08', function () {

  describe('firstStar', function () {

    it('should return 138', function () {
      let input = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2'.split(' ');
      assert.equal(sut.runOne(input), 138);
    });

  });

  describe('secondStar', function () {

    it('should return 66', function () {
      let input = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2'.split(' ');
      assert.equal(sut.runTwo(input), 66);
    });

  });

});

