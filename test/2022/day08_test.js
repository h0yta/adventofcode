const sut = require('../../src/2022/day08');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 08', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day08', 'utf8').split('\n');

    it(' should calculate number of visible trees', () => {
      assert.strictEqual(sut.runOne(input), 21);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2022/day08', 'utf8').split('\n');

    it(' should calculate maximum scenic score', () => {
      assert.strictEqual(sut.runTwo(input), 8);
    });

  });

});

