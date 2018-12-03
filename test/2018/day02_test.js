const sut = require('../../src/2018/day02');
const assert = require('assert');

describe('2018 - Day 02', function () {

  describe('firstStar', function () {

    it('should return 12', function () {
      let input = ['abcdef', 'bababc', 'abbcde', 'abcccd',
        'aabcdd', 'abcdee', 'ababab'];
      assert.equal(sut.runOne(input), 12);
    });

  });

  describe('secondStar', function () {

    it('should return fgij', function () {
      let input = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];
      assert.equal(sut.runTwo(input), 'fgij');
    });

  });

});

