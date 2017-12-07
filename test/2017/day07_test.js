const sut = require('../../src/2017/day07');
const fs = require('fs');
const assert = require('assert');

describe('Day 06', function () {

  describe('firstRun', function () {
    let testdata = fs.readFileSync('./test/data/201707', 'utf8').split('\n');

    it('should return tknk', function () {
      assert.equal(sut.runOne(testdata), 'tknk');
    });

  });

  describe('secondRun ', function () {
    let testdata = fs.readFileSync('./test/data/201707', 'utf8').split('\n');

    it('should return 60', function () {
      assert.equal(sut.runTwo(testdata), 60);
    });

  });

});

