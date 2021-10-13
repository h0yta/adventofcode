const sut = require('../../src/2016/day10');
const fs = require('fs');
const assert = require('assert');

describe('2016 - 10', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2016/day10', 'utf8').split('\n');

    it(' should ...', function () {
      assert.strictEqual(sut.runOne(input), 2);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2016/day10', 'utf8').split('\n');

    it(' should ...', function () {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

