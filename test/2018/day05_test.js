const sut = require('../../src/2018/day05');
const fs = require('fs');
const assert = require('assert');

describe('2018 - Day 05', function () {

  describe('firstStar', function () {

    it('should return {}', function () {
      let input = [''];
      assert.equal(sut.runOne(input), 0);
    });

  });

  describe('secondStar', function () {

    it('should return 0', function () {
      let input = [''];
      assert.equal(sut.runTwo(input), 0);
    });

  });

});

