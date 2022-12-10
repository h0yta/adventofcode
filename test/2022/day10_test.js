const sut = require('../../src/2022/day10');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 10', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day10', 'utf8').split('\n');

    it(' should summerize all signal strengths', () => {
      assert.strictEqual(sut.runOne(input), 13140);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2022/day10', 'utf8').split('\n');

    it(' should print letters', () => {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

