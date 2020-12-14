const sut = require('../../src/2020/day14');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 14', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day14', 'utf8').split('\n');

    it('should calculate sum of memory values', function () {
      assert.strictEqual(sut.runOne(input), 165);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day142', 'utf8').split('\n');

    it('should calculate sum of memory values', function () {
      assert.strictEqual(sut.runTwo(input), 208);
    });

  });

});

