const sut = require('../../src/2017/day04');
const assert = require('assert');

describe('Day 04', function () {

  describe('firstRun', function () {

    it('should return 2', function () {
      let input = [
        'aa bb cc dd ee',
        'aa bb cc dd aa',
        'aa bb cc dd aaa'];
      assert.equal(sut.runOne(input), 2);
    });

  });

  describe('secondRun', function () {

    it('should return 3', function () {
      let input = ['abcde fghij',
        'abcde xyz ecdab',
        'a ab abc abd abf abj',
        'iiii oiii ooii oooi oooo',
        'oiii ioii iioi iiio'];
      assert.equal(sut.runTwo(input), 3);
    });

  });

});

