const sut = require('../../src/2020/day23');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 23', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day23', 'utf8').split('');

    // 3 8 9 1 2 5 4 6 7

    it('otototshould find the labels on the cups after cup 1', function () {
      assert.strictEqual(sut.runOne(input, 10), '92658374');
    });

    it('should find the labels on the cups after cup 1', function () {
      assert.strictEqual(sut.runOne(input, 100), '67384529');
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day23', 'utf8').split('');

    it('should ...', function () {
      assert.strictEqual(sut.runTwo(input, 10000000), 149245887792);
    });

  });

});

