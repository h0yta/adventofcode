const sut = require('../../src/2019/day07');
const assert = require('assert');

describe('2019 - Day 07', function () {

  describe('firstStar', function () {

    it('should calculate number of possible keys', function () {
      assert.equal(sut.runOne(["COM)B", "B)C", "C)D", "D)E", "E)F", "B)G", "G)H", "D)I", "E)J", "J)K", "K)L"]), 0);
    });

  });

  describe('secondStar', function () {

    it('should calculate number of possible keys', function () {
      assert.equal(sut.runTwo(["COM)B", "B)C", "C)D", "D)E", "E)F", "B)G", "G)H", "D)I", "E)J", "J)K", "K)L", "K)YOU", "I)SAN"]), 0);
    });

  });
});

