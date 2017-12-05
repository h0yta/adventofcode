const sut = require('../../src/2017/day02');
const assert = require('assert');

describe('Day 02', function () {

  describe('firstRun', function () {

    it('should return 18', function () {
      let input = [
        '5\t1\t9\t5',
        '7\t5\t3',
        '2\t4\t6\t8'];
      assert.equal(sut.runOne(input), 18);
    });

  });

  describe('secondRun', function () {

    it('should return 9', function () {
      let input = [
        '5\t9\t2\t8',
        '9\t4\t7\t3',
        '3\t8\t6\t5'];
      assert.equal(sut.runTwo(input), 9);
    });

  });

});

