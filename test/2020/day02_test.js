const sut = require('../../src/2020/day02');
const assert = require('assert');

describe('2020 - Day 02', function () {

  describe('firstStar', function () {

    let passwords = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

    it('should find number of valid passwords', function () {
      assert.strictEqual(sut.runOne(passwords), 2);
    });

  });

  describe('secondStar', function () {

    it('should find number of valid passwords again', function () {
      assert.strictEqual(sut.runTwo(['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']), 1);
    });

  });

});

