const sut = require('../../src/2020/day08');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 08', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day08', 'utf8').split('\n');

    it('should calculate value of the accumulator', function () {
      assert.strictEqual(sut.runOne(input), 5);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day08', 'utf8').split('\n');

    it('should calculate value of the accumulator when program exits correctly', function () {
      assert.strictEqual(sut.runTwo(input), 8);
    });

  });

});

