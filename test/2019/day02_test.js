const sut = require('../../src/2019/day02');
const assert = require('assert');

describe('2019 - Day 02', function () {

  describe('firstStar', function () {

    it('run opcode', function () {
      assert.equal(sut.runOne([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50], 9, 10), BigInt(3500));
      assert.equal(sut.runOne([1, 0, 0, 0, 99], 0, 0), BigInt(2));
      assert.equal(sut.runOne([2, 3, 0, 3, 99], 3, 0), BigInt(2));
      assert.equal(sut.runOne([2, 4, 4, 5, 99, 0], 4, 4), BigInt(2));
      assert.equal(sut.runOne([1, 1, 1, 4, 99, 5, 6, 0, 99], 1, 1), BigInt(30));
    });

  });

});

