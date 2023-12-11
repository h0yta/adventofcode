const sut = require('../../src/2023/day11');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 11', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day11-1', 'utf8').split('\n');

    it(' should summarize the lengths of the shortest paths between all galaxies', () => {
      assert.strictEqual(sut.runOne(input, 2), 374);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day11-2', 'utf8').split('\n');

    it(' should summarize the lengths of the shortest paths between all galaxies', () => {
      assert.strictEqual(sut.runTwo(input, 9), 1030);
    });

    it(' should summarize the lengths of the shortest paths between all galaxies', () => {
      assert.strictEqual(sut.runTwo(input, 99), 8410);
    });

  });

});

