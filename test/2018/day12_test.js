const sut = require('../../src/2018/day12');
const fs = require('fs');
const assert = require('assert');

describe('2018 - Day 12', function () {

  describe('firstStar', function () {

    it('should return 325', function () {
      let input = fs.readFileSync('./test/data/201812', 'utf8').split('\n');
      assert.equal(sut.runOne(input), 325);
    });

  });

  describe('secondStar', function () {

    it('should return 0', function () {
      let input = fs.readFileSync('./test/data/201812', 'utf8').split('\n');
      assert.equal(sut.runTwo(input), 0);
    });

  });

});

