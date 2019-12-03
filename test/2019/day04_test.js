const sut = require('../../src/2019/day04');
const assert = require('assert');

describe('2019 - Day 04', function () {

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

