const sut = require('../../src/2015/day10');
const fs = require('fs');
const assert = require('assert');

describe('2015 - 10', function () {

  describe('firstStar', function () {

    it('should calculate length of the result', function () {
      assert.strictEqual(sut.runOne('1', 5), 6);
    });

  });

  describe('secondStar', function () {

    it('should should calculate length of the result', function () {
      assert.strictEqual(sut.runTwo('1', 5), 6);
    });

  });

});

