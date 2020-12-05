const sut = require('../../src/2020/day05');
const assert = require('assert');

describe('2020 - Day 05', function () {

  describe('firstStar', function () {

    // BFFFBBFRRR: row 70, column 7, seat ID 567.
    // FFFBBBFRRR: row 14, column 7, seat ID 119.
    // BBFFBBFRLL: row 102, column 4, seat ID 820.

    it('should figure out highest seat number', function () {
      assert.strictEqual(sut.runOne(['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']), 820);
    });

  });

});

