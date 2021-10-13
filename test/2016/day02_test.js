const sut = require('../../src/2016/day02');
const fs = require('fs');
const assert = require('assert');

describe('2016 - 02', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2016/day02', 'utf8').split('\n');

    it('should find code', function () {
      assert.strictEqual(sut.runOne(input), '1985');
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2016/day02', 'utf8').split('\n');

    it('should find code', function () {
      assert.strictEqual(sut.runTwo(input), '5DB3');
    });

  });

});

