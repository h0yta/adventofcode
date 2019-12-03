const sut = require('../../src/2019/day03');
const assert = require('assert');

describe('2019 - Day 03', function () {

  describe('firstStar', function () {

    it('should calculate nearest intersection', function () {
      assert.equal(sut.runOne(["R8,U5,L5,D3", "U7,R6,D4,L4"]), 6);
      assert.equal(sut.runOne(["R75,D30,R83,U83,L12,D49,R71,U7,L72", "U62,R66,U55,R34,D71,R55,D58,R83"]), 159);
      assert.equal(sut.runOne(["R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51", "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7"]), 135);
    });

  });

  describe('secondStar', function () {

    it('should calculate first intersection', function () {
      assert.equal(sut.runTwo(["R8,U5,L5,D3", "U7,R6,D4,L4"]), 30);
      assert.equal(sut.runTwo(["R75,D30,R83,U83,L12,D49,R71,U7,L72", "U62,R66,U55,R34,D71,R55,D58,R83"]), 610);
      assert.equal(sut.runTwo(["R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51", "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7"]), 410);
    });

  });
});

