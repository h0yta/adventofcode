const sut = require('../../src/2018/day11');
const assert = require('assert');

describe('2018 - Day 11', function () {

  describe('calculateFuelLevel', function () {

    it('calculateFuelLevel should return 4', function () {
      let input = [];
      assert.equal(sut.calculateFuelLevel(3, 5, 8), 4);
    });

    it('calculateFuelLevel should return -5', function () {
      let input = [];
      assert.equal(sut.calculateFuelLevel(122, 79, 57), -5);
    });

    it('calculateFuelLevel should return 0', function () {
      let input = [];
      assert.equal(sut.calculateFuelLevel(217, 196, 39), 0);
    });

    it('calculateFuelLevel should return 4', function () {
      let input = [];
      assert.equal(sut.calculateFuelLevel(101, 153, 71), 4);
    });

  });

  describe('firstStar', function () {

    it('should return 33,45', function () {
      let input = [18];
      assert.equal(sut.runOne(input), '33,45');
    });

  });

  describe('secondStar', function () {

    it('should return 0', function () {
      let input = [];
      assert.equal(sut.runTwo(input), 0);
    });

  });

});

