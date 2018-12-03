const sut = require('../../src/2018/day01');
const assert = require('assert');

describe('2018 - Day 01', function () {

  describe('firstStar', function () {

    it('should return 3', function () {
      let input = [+1, +1, +1];
      assert.equal(sut.runOne(input), 3);
    });

    it('should return 0', function () {
      let input = [+1, +1, -2];
      assert.equal(sut.runOne(input), 0);
    });

    it('should return -6', function () {
      let input = [-1, -2, -3];
      assert.equal(sut.runOne(input), -6);
    });

  });

  describe('secondStar', function () {

    beforeEach(function (done) {
      done();
    });

    it('should return 0', function () {
      let input = [+1, -1];
      assert.equal(sut.runTwo(input), 0);
    });

    it('should return 10', function () {
      let input = [+3, +3, +4, -2, -4];
      assert.equal(sut.runTwo(input), 10);
    });

    it('should return 5', function () {
      let input = [-6, +3, +8, +5, -6];
      assert.equal(sut.runTwo(input), 5);
    });

    it('should return 14', function () {
      let input = [+7, +7, -2, -7, -4];
      assert.equal(sut.runTwo(input), 14);
    });

  });

});

