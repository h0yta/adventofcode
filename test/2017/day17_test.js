const sut = require('../../src/2017/day17');
const fs = require('fs');
const assert = require('assert');

describe('Day 17', function () {

  describe('firstRun', function () {

    it('should return 638', function () {
      assert.equal(sut.runOne(3), 638);
    });

  });

  describe('secondRun ', function () {

    xit('should return pogbjfihclkemadn', function () {
      assert.equal(sut.runTwo(0), 0);
    });

  });

});

