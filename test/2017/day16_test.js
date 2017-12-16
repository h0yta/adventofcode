const sut = require('../../src/2017/day16');
const fs = require('fs');
const assert = require('assert');

describe('Day 16', function () {

  describe('firstRun', function () {

    it('should return \'baedc\'', function () {
      let testdata = fs.readFileSync('./test/data/201716-1', 'utf8').split(',');

      assert.equal(sut.runOne('abcde', testdata), 'baedc');
    });

  });

  describe('secondRun ', function () {

    // Takes to long
    xit('should return pogbjfihclkemadn', function () {
      let testdata = fs.readFileSync('./test/data/201716-2', 'utf8').split(',');

      assert.equal(sut.runTwo('pkgnhomelfdibjac', testdata, 1000000000), 'pogbjfihclkemadn');
    });

  });

  describe('spin ', function () {

    it('should return cdeab', function () {
      assert.equal(sut.spin('s3', 'abcde'.split('')).join(''), 'cdeab');
    });

  });

  describe('exchange ', function () {

    it('should return abced', function () {
      assert.equal(sut.exchange('x3/4', 'abcde'.split('')).join(''), 'abced');
    });

  });

  describe('partner ', function () {

    it('should return bacde', function () {
      assert.equal(sut.partner('pa/b', 'abcde'.split('')).join(''), 'bacde');
    });

  });

});

