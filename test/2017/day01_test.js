const sut = require('../../src/2017/day01');
const assert = require('assert');

describe('Day 01', function () {

  describe('firstRun', function () {

    it('should return 3', function () {
      let input = [1, 1, 2, 2];
      assert.equal(sut.runOne(input), 3);
    });

    it('should return 4', function () {
      let input = [1, 1, 1, 1];
      assert.equal(sut.runOne(input), 4);
    });

    it('should return 9', function () {
      let input = [9, 1, 2, 1, 2, 1, 2, 9];
      assert.equal(sut.runOne(input), 9);
    });

  });

  describe('secondRun', function () {

    it('should return 6', function () {
      let input = [1, 2, 1, 2];
      assert.equal(sut.runTwo(input), 6);
    });

    it('should return 4', function () {
      let input = [1, 2, 3, 4, 2, 5];
      assert.equal(sut.runTwo(input), 4);
    });

    it('should return 12', function () {
      let input = [1, 2, 3, 1, 2, 3];
      assert.equal(sut.runTwo(input), 12);
    });

    it('should return 4', function () {
      let input = [1, 2, 1, 3, 1, 4, 1, 5];
      assert.equal(sut.runTwo(input), 4);
    });

  });

});

