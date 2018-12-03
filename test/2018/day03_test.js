const sut = require('../../src/2018/day03');
const assert = require('assert');

describe('Day 03', function () {

  describe('parse', function () {

    it('should return {}}', function () {
      let input = '#1 @ 1,3: 4x4';
      let result = sut.parse(input);
      assert.equal(result.startX, 1);
      assert.equal(result.startY, 3);
      assert.equal(result.lengthX, 4);
      assert.equal(result.lengthY, 4);
    });

  });

  describe('firstStar', function () {

    it('should return 4', function () {
      let input = ['#1 @ 1,3: 4x4',
        '#2 @ 3,1: 4x4',
        '#3 @ 5,5: 2x2'];
      assert.equal(sut.runOne(input), 4);
    });

  });

  describe('secondStar', function () {

    it('should return 3', function () {
      let input = ['#1 @ 1,3: 4x4',
        '#2 @ 3,1: 4x4',
        '#3 @ 5,5: 2x2'];
      assert.equal(sut.runTwo(input), 3);
    });

  });

});

