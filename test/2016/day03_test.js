const sut = require('../../src/2016/day03');
const fs = require('fs');
const assert = require('assert');

describe('2016 - 03', function () {

  describe('firstStar', function () {

    it('should find out number of possible triangles', function () {
      assert.strictEqual(sut.runOne(['5 10 25', '10 20 25']), 1);
    });

  });

  describe('secondStar', function () {

    it('should find out number of possible triangles', function () {
      assert.strictEqual(sut.runTwo(['5 10 25', '10 20 25', '10 20 60']), 2);
    });

  });

});

