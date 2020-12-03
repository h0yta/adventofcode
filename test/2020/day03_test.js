const sut = require('../../src/2020/day03');
const fs = require('fs');
const assert = require('assert');

describe('2020 - Day 03', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/202003', 'utf8').split('\n');

    it('should ...', function () {
      assert.strictEqual(sut.runOne(input), 7);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/202003', 'utf8').split('\n');

    it('should ...', function () {
      assert.strictEqual(sut.runTwo(input), 336);
    });

  });

});

