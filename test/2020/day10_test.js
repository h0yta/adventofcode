const sut = require('../../src/2020/day10');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 10', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day10', 'utf8').split('\n');

    it('should ...', function () {
      assert.strictEqual(sut.runOne(input), 220);
    });

  });

  describe('secondStar', function () {

    let zeroInput = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];
    it('should ...', function () {
      assert.strictEqual(sut.runTwo(zeroInput), 8);
    });

    let input = fs.readFileSync('./test/data/2020/day10', 'utf8').split('\n');
    it('should ...', function () {
      assert.strictEqual(sut.runTwo(input), 19208);
    });

  });

});

