const sut = require('../../src/2020/day20');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 20', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day20', 'utf8').split('\n\n');

    it('should align the tiles and gat product of corners', function () {
      assert.strictEqual(sut.runOne(input), 20899048083289);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day20', 'utf8').split('\n\n');

    it('otototshould count number of #, excluding the seamonsters', function () {
      assert.strictEqual(sut.runTwo(input), 273);
    });

  });

});

