const sut = require('../../src/2020/day19');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 19', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day19', 'utf8').split('\n');

    it('should find the number of valid messages', function () {
      assert.strictEqual(sut.runOne(input), 2);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day192', 'utf8').split('\n');

    it('should find the number of valid messages', function () {
      assert.strictEqual(sut.runOne(input), 3);
    });

    it('should find the number of valid messages', function () {
      assert.strictEqual(sut.runTwo(input), 12);
    });

  });

});

