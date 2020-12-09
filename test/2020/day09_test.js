const sut = require('../../src/2020/day09');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 09', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day09', 'utf8').split('\n');

    it('should find the invalid number', function () {
      assert.strictEqual(sut.runOne(input, 5), 127);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day09', 'utf8').split('\n');

    it('should calculate encryption weakness', function () {
      assert.strictEqual(sut.runTwo(input, 127), 62);
    });

  });

});

