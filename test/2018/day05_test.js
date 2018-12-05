const sut = require('../../src/2018/day05');
const fs = require('fs');
const assert = require('assert');

describe('2018 - Day 05', function () {

  describe('firstStar', function () {

    it('should return 10', function () {
      let input = 'dabAcCaCBAcCcaDA'.split('');
      assert.equal(sut.runOne(input), 10);
    });

  });

  describe('secondStar', function () {

    it('should return 4', function () {
      let input = 'dabAcCaCBAcCcaDA'.split('');
      assert.equal(sut.runTwo(input), 4);
    });

  });

});

