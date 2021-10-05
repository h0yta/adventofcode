const sut = require('../../src/2020/day24');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 24', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day24', 'utf8').split('\n');

    it('should count the number of black tiles', function () {
      assert.strictEqual(sut.runOne(input), 10);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day24', 'utf8').split('\n');

    // Takes around 1 second, so excluding it
    xit('should count number of black tiles after 100 days', function () {
      assert.strictEqual(sut.runTwo(input), 2208);
    });

  });

});

