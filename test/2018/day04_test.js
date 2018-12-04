const sut = require('../../src/2018/day04');
const fs = require('fs');
const assert = require('assert');

describe('2018 - Day 04', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/201804', 'utf8').split('\n');

    it('should return {}', function () {
      assert.equal(sut.runOne(input), 240);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/201804', 'utf8').split('\n');

    it('should return 0', function () {
      assert.equal(sut.runTwo(input), 4455);
    });

  });

});

