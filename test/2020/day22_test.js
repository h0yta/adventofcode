const sut = require('../../src/2020/day22');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 22', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day22', 'utf8').split('\n\n');

    it('should calculate the winners score of combat', function () {
      assert.strictEqual(sut.runOne(input), 306);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day22', 'utf8').split('\n\n');

    it('otototshould calculate the winners score recursive combat', function () {
      assert.strictEqual(sut.runTwo(input), 291);
    });

    let input2 = fs.readFileSync('./test/data/2020/day222', 'utf8').split('\n\n');

    it('should calculate the winners score recursive combat', function () {
      assert.strictEqual(sut.runTwo(input2), 105);
    });

  });

});

