const sut = require('../../src/2015/day05');
const fs = require('fs');
const assert = require('assert');

describe('2015 - 05', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2015/day05', 'utf8').split('\n');

    it('should ...', function () {
      assert.strictEqual(sut.runOne(input), 0);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2015/day05', 'utf8').split('\n');

    it('should ...', function () {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

