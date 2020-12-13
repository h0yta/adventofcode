const sut = require('../../src/2020/day12');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 12', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day12', 'utf8').split('\n');

    it('should calculate Manhattan distance', function () {
      assert.strictEqual(sut.runOne(input), 25);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day12', 'utf8').split('\n');

    it('should calculate Manhattan distance', function () {
      assert.strictEqual(sut.runTwo(input), 286);
    });

  });

});

