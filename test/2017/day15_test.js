const sut = require('../../src/2017/day15');
const fs = require('fs');
const assert = require('assert');

describe('Day 15', function () {

  describe('firstRun', function () {

    it('should return 1', function () {
      assert.equal(sut.runOne(65, 8921, 5), 1);
    });

  });

  describe('secondRun ', function () {

    xit('should return 10', function () {
      let testdate = '';
      assert.equal(sut.runTwo(testdata), 10);
    });

  });

});

