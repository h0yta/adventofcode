const sut = require('../../src/2022/day03');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 03', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day03', 'utf8').split('\n');

    it(' should calculate sum of the priorities', () => {
      assert.strictEqual(sut.runOne(input), 157);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2022/day03', 'utf8').split('\n');

    it(' should calculate sum of the priorities of all groups', () => {
      assert.strictEqual(sut.runTwo(input), 70);
    });

  });

});

