const sut = require('../../src/2017/day12');
const fs = require('fs');
const assert = require('assert');

describe('Day 12', function () {

  describe('firstRun', function () {
    let testdata = fs.readFileSync('./test/data/201712', 'utf8').split('\n');

    it('should return 6', function () {
      assert.equal(sut.runOne(testdata), 6);
    });

  });

  describe('secondRun ', function () {
    it('should return 2', function () {
      let testdata = fs.readFileSync('./test/data/201712', 'utf8').split('\n');

      assert.equal(sut.runTwo(testdata), 2);
    });

  });

});

