const sut = require('../../src/2023/day10');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 10', () => {

  describe('firstStar', () => {
    let input1 = fs.readFileSync('./test/data/2023/day10-1-1', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runOne(input1), 4);
    });

    let input2 = fs.readFileSync('./test/data/2023/day10-1-2', 'utf8').split('\n');

    it(' should find greatest distance to any pipe', () => {
      assert.strictEqual(sut.runOne(input2), 8);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day10-2-1', 'utf8').split('\n');

    xit(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 4);
    });

  });

});

