const sut = require('../../src/2018/day06');
const assert = require('assert');

describe('2018 - Day 06', function () {

  before(function() {
    process.env.NODE_ENV = 'test';
  });

  describe('firstStar', function () {

    it('should return 0', function () {
      let input = ['1, 1', '1, 6', '8, 3', '3, 4', '5, 5', '8, 9'];
      assert.equal(sut.runOne(input), 17);
    });

  });

  describe('secondStar', function () {

    it('should return 0', function () {
      let input = ['1, 1', '1, 6', '8, 3', '3, 4', '5, 5', '8, 9'];
      assert.equal(sut.runTwo(input), 16);
    });

  });

});

