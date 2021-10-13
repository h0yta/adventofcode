const sut = require('../../src/2016/day06');
const fs = require('fs');
const assert = require('assert');

describe('2016 - 06', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2016/day06', 'utf8').split('\n');

    it('should recover error-corrected message', function () {
      assert.strictEqual(sut.runOne(input), 'easter');
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2016/day06', 'utf8').split('\n');

    it('should recover error-corrected message', function () {
      assert.strictEqual(sut.runTwo(input), 'advent');
    });

  });

});

