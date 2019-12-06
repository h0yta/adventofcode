const sut = require('../../src/2019/day06');
const assert = require('assert');

describe('2019 - Day 06', function () {

  describe('firstStar', function () {

    it('should calculate total distance weight of planets', function () {
      assert.equal(sut.runOne(["COM)B", "B)C", "C)D", "D)E", "E)F", "B)G", "G)H", "D)I", "E)J", "J)K", "K)L"]), 42);
    });

  });

  describe('secondStar', function () {

    it('should calculate distance weight between YOU and SAN', function () {
      assert.equal(sut.runTwo(["COM)B", "B)C", "C)D", "D)E", "E)F", "B)G", "G)H", "D)I", "E)J", "J)K", "K)L", "K)YOU", "I)SAN"]), 4);
    });

  });
});

