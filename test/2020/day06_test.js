const sut = require('../../src/2020/day06');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 06', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day06', 'utf8').split('\n\n');

    it('should count how many quastions was answered with yes per group', function () {
      assert.strictEqual(sut.runOne(input), 11);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day06', 'utf8').split('\n\n');

    it('should count how many quastions was answered with yes by all members of the group', function () {
      assert.strictEqual(sut.runTwo(input), 6);
    });

  });

});

