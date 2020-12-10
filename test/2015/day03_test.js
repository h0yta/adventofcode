const sut = require('../../src/2015/day03');
const assert = require('assert');

describe('2015 - 03', function () {

  describe('firstStar', function () {

    it('should calculate number of houses', function () {
      assert.strictEqual(sut.runOne(['>']), 2);
    });

    it('should calculate number of houses', function () {
      assert.strictEqual(sut.runOne(['^', '>', 'v', '<']), 4);
    });

    it('otototshould calculate number of houses', function () {
      assert.strictEqual(sut.runOne(['^', 'v', '^', 'v', '^', 'v', '^', 'v', '^', 'v']), 2);
    });

  });

  describe('secondStar', function () {

    it('should calculate number of houses', function () {
      assert.strictEqual(sut.runTwo(['^', 'v']), 3);
    });

    it('should calculate number of houses', function () {
      assert.strictEqual(sut.runTwo(['^', '>', 'v', '<']), 3);
    });

    it('otototshould calculate number of houses', function () {
      assert.strictEqual(sut.runTwo(['^', 'v', '^', 'v', '^', 'v', '^', 'v', '^', 'v']), 11);
    });

  });

});

