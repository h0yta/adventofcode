const sut = require('../../src/2016/day04');
const fs = require('fs');
const assert = require('assert');

describe('2016 - 04', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2016/day04', 'utf8').split('\n');

    it('should sum sector IDs of all REAL rooms', function () {
      assert.strictEqual(sut.runOne(input), 1514);
    });

  });

  describe('secondStar', function () {

    xit('should decrypt room names', function () {
      assert.strictEqual(sut.runTwo(['qzmt-zixmtkozy-ivhz-343[zimth]']), 'very encrypted name');
    });

  });

});

