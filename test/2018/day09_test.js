const sut = require('../../src/2018/day09');
const assert = require('assert');

describe('2018 - Day 09', function () {

  describe('firstStar', function () {

    it('should return 9 players with last marble worth 25', function () {
      let input = '9 players; last marble is worth 25 points';
      assert.equal(sut.runOne(input), 32);
    });

    it('should return 10 players with last marble worth 1618', function () {
      let input = '10 players; last marble is worth 1618 points';
      assert.equal(sut.runOne(input), 8317);
    });

    it('should return 13 players with last marble worth 7999', function () {
      let input = '13 players; last marble is worth 7999 points';
      assert.equal(sut.runOne(input), 146373);
    });

    it('should return 17 players with last marble worth 1104', function () {
      let input = '17 players; last marble is worth 1104 points';
      assert.equal(sut.runOne(input), 2764);
    });

    it('should return 21 players with last marble worth 6111', function () {
      let input = '21 players; last marble is worth 6111 points';
      assert.equal(sut.runOne(input), 54718);
    });

    it('should return 30 players with last marble worth 5807', function () {
      let input = '30 players; last marble is worth 5807 points';
      assert.equal(sut.runOne(input), 37305);
    });

  });

  describe('secondStar', function () {

    it('should return 9 players with last marble worth 25', function () {
      let input1 = '9 players; last marble is worth 2500 points';
      let input2 = '9 players; last marble is worth 25 points';
      assert.equal(sut.runTwo(input2), sut.runOne(input1));
    });

  });

});

