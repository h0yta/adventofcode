const sut = require('../../src/2021/day21');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 21', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day21', 'utf8').split('\n');

    it(' should calculate the final score', () => {
      assert.strictEqual(sut.runOne(input), 739785);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day21', 'utf8').split('\n');

    xit(' should calculate number of universes where most winner wins in', () => {
      assert.strictEqual(sut.runTwo(input), 444356092776315);
    });

  });

});

