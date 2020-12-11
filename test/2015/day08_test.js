const sut = require('../../src/2015/day08');
const fs = require('fs');
const assert = require('assert');

describe('2015 - 08', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2015/day08', 'utf8').split('\n');

    it('should count characters', function () {
      assert.strictEqual(sut.runOne(input), 12);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2015/day08', 'utf8').split('\n');

    it('should count characters', function () {
      assert.strictEqual(sut.runTwo(input), 19);
    });

  });

});

