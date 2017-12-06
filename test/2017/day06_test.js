const sut = require('../../src/2017/day06');
const assert = require('assert');

describe('Day 06', function () {

  describe('firstRun', function () {

    it('should return 5', function () {
      let input = [0, 2, 7, 0];
      assert.equal(sut.runOne(input), 5);
    });

  });

  describe('secondRun ', function () {

    it('should return 0', function () {
      let input = [];
      assert.equal(sut.runTwo(input), 0);
    });

  });

});

