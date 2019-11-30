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
      let input = 18;
      assert.equal(sut.runOne(input), '33,45');
    });

    it('should return 21,61', function () {
      let input = 42;
      assert.equal(sut.runOne(input), '21,61');
    });

  });

  describe('secondStar', function () {

    xit('should return 90,269,16', function () {
      let input = 18;
      assert.equal(sut.runTwo(input), '90,269,16');
    });

    xit('should return 232,251,12', function () {
      let input = 42;
      assert.equal(sut.runTwo(input), '232,251,12');
    });

  });

});

