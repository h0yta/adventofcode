const sut = require('../../src/2017/day05');
const assert = require('assert');

describe('Day 05', function () {

  describe('firstRun ', function () {

    it('should return 5', function () {
      let input = [0, 3, 0, 1, -3];
      assert.equal(sut.runOne(input), 5);
    });

  });

  describe('secondRun', function () {

    it('should return 10', function () {
      let input = [0, 3, 0, 1, -3];
      assert.equal(sut.runTwo(input), 10);
    });

  });

});

