const sut = require('../../src/2020/day16');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 16', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day16', 'utf8').split('\n');

    it('should calculate ticket scanning error rate', function () {
      assert.strictEqual(sut.runOne(input), 71);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day162', 'utf8').split('\n');

    it('should multiply seat values', function () {
      assert.strictEqual(sut.runTwo(input, 'seat'), 13);
    });

  });

});

