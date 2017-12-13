const sut = require('../../src/2017/day10');
const fs = require('fs');
const assert = require('assert');

describe('Day 10', function () {

  describe('firstRun', function () {
    let input = [3, 4, 1, 5];

    it('should return 12', function () {
      assert.equal(sut.runOne(5, input), 12);
    });

  });

  describe('secondRun ', function () {
    xit('should return 10', function () {
      let input = [3, 4, 1, 5];

      assert.equal(sut.runTwo(input), 0);
    });

  });

});

