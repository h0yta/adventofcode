const sut = require('../../src/2016/day01');
const fs = require('fs');
const assert = require('assert');

describe('2016 - 01', function () {

  describe('firstStar', function () {

    it('should calculate distance', function () {
      assert.strictEqual(sut.runOne(['R5', 'L5', 'R5', 'R3']), 12);
    });

    it('should calculate distance', function () {
      assert.strictEqual(sut.runOne(['R2', 'R2', 'R2']), 2);
    });

    it('should calculate distance', function () {
      assert.strictEqual(sut.runOne(['R2', 'L3']), 5);
    });

  });

  describe('secondStar', function () {

    it('should calculate distance to first position you visit twice', function () {
      assert.strictEqual(sut.runTwo(['R8', 'R4', 'R4', 'R8']), 4);
    });

  });

});

