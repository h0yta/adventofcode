const sut = require('../../src/2015/day11');
const fs = require('fs');
const assert = require('assert');

describe('2015 - 11', function () {

  describe('firstStar', function () {

    it(' should find next valid password', function () {
      assert.strictEqual(sut.runOne('abcdefgh'), 'abcdffaa');
    });

    it(' should find next valid password', function () {
      assert.strictEqual(sut.runOne('ghijklmn'), 'ghjaabcc');
    });

  });

  describe('secondStar', function () {

    it(' should find next valid password', function () {
      assert.strictEqual(sut.runTwo('abcdefgh'), 'abcdffaa');
    });

  });

});

