const sut = require('../../src/2023/day03');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 03', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day03-1', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runOne(input), 4361);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day03-2', 'utf8').split('\n');

    it(' ototot should ...', () => {
      assert.strictEqual(sut.runTwo(input), 467835);
    });

  });

});

