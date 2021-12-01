const sut = require('../../src/2021/day01');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 01', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2021/day01', 'utf8').split('\n');

    it('should calculate number of increasing numbers', function () {
      assert.strictEqual(sut.runOne(input), 7);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2021/day01', 'utf8').split('\n');

    it('should culculate number of increasing sums', function () {
      assert.strictEqual(sut.runTwo(input), 5);
    });

  });

});

