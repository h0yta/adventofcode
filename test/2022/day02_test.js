const sut = require('../../src/2022/day02');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 02', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day02', 'utf8').split('\n');

    it(' should calculate total score', () => {
      assert.strictEqual(sut.runOne(input), 15);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2022/day02', 'utf8').split('\n');

    it(' should calculate the sneaky score', () => {
      assert.strictEqual(sut.runTwo(input), 12);
    });

  });

});

