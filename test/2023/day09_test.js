const sut = require('../../src/2023/day09');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 09', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day09-1', 'utf8').split('\n');

    it(' should summarize the extrapolated values by last', () => {
      assert.strictEqual(sut.runOne(input), 114);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day09-2', 'utf8').split('\n');

    it(' should summarize the extrapolated values by first', () => {
      assert.strictEqual(sut.runTwo(input), 2);
    });

  });

});

