const sut = require('../../src/2017/day08');
const fs = require('fs');
const assert = require('assert');

describe('Day 08', function () {

  describe('firstRun', function () {
    let testdata = fs.readFileSync('./test/data/201708', 'utf8').split('\n');

    it('should return 1', function () {
      assert.equal(sut.runOne(testdata), 1);
    });

  });

  describe('secondRun ', function () {
    let testdata = fs.readFileSync('./test/data/201708', 'utf8').split('\n');

    it('should return 10', function () {
      assert.equal(sut.runTwo(testdata), 10);
    });

  });

});

