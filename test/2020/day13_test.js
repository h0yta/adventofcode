const sut = require('../../src/2020/day13');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 13', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day13', 'utf8').split('\n');

    it('should figure out wich bus to take', function () {
      assert.strictEqual(sut.runOne(input), 295);
    });

  });

  describe('secondStar', function () {

    it('should figure out wich bus is magic', function () {
      assert.strictEqual(sut.runTwo("7,13,x,x,59,x,31,19"), 1068781);
    });

    it('should figure out wich bus is magic', function () {
      assert.strictEqual(sut.runTwo("17,x,13,19"), 3417);
    });

    it('should figure out wich bus is magic', function () {
      assert.strictEqual(sut.runTwo("67,7,59,61"), 754018);
    });

    it('should figure out wich bus is magic', function () {
      assert.strictEqual(sut.runTwo("67,x,7,59,61"), 779210);
    });

    it('should figure out wich bus is magic', function () {
      assert.strictEqual(sut.runTwo("67,7,x,59,61"), 1261476);
    });

    it('should figure out wich bus is magic', function () {
      assert.strictEqual(sut.runTwo("1789,37,47,1889"), 1202161486);
    });

  });

});

