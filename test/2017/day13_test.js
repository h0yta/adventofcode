const sut = require('../../src/2017/day13');
const fs = require('fs');
const assert = require('assert');

describe('Day 13', function () {

  describe('firstRun', function () {
    let testdata = fs.readFileSync('./test/data/201713', 'utf8').split('\n');

    it('should return 24', function () {
      assert.equal(sut.runOne(testdata), 24);
    });

  });

  describe('secondRun ', function () {
    it('should return 2', function () {
      let testdata = fs.readFileSync('./test/data/201713', 'utf8').split('\n');

      assert.equal(sut.runTwo(testdata), 2);
    });

  });

});

