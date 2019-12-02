const sut = require('../../src/2019/day03');
const assert = require('assert');

describe('2019 - Day 03', function () {

  describe('firstStar', function () {

    it('run', function () {
      assert.equal(sut.runOne([]), 0);
    });

  });

  describe('secondStar', function () {

    it('run', function () {
      assert.equal(sut.runTwo([]), 0);
    });

  });
});

