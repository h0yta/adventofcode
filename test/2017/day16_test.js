const sut = require('../../src/2017/day16');
const fs = require('fs');
const assert = require('assert');

describe('Day 16', function () {

  describe('firstRun', function () {

    it('should return \'baedc\'', function () {
      let testdata = fs.readFileSync('./test/data/201716', 'utf8').split(',');

      assert.equal(sut.runOne('abcde', testdata), 'baedc');
    });

  });

  describe('secondRun ', function () {

    xit('should return 10', function () {
      let testdate = '';
      assert.equal(sut.runTwo(testdata), 10);
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

