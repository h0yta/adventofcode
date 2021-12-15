const sut = require('../../src/2021/day15');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 15', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day15', 'utf8').split('\n');

    it(' should find shortest path', () => {
      assert.strictEqual(sut.runOne(input), 40);
    });

  });

  describe('secondStar', () => {
    let input1 = fs.readFileSync('./test/data/2021/day15', 'utf8').split('\n');

    it(' should find shortest path in multiplied matrix', () => {
      assert.strictEqual(sut.runTwo(input1), 315);
    });

  });

});

