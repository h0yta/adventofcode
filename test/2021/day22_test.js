const sut = require('../../src/2021/day22');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 22', () => {

  describe('firstStar', () => {
    let input1 = fs.readFileSync('./test/data/2021/day22-1', 'utf8').split('\n');

    it(' should calculate how many cubes are ON', () => {
      assert.strictEqual(sut.runOne(input1), 39);
    });

    let input2 = fs.readFileSync('./test/data/2021/day22-2', 'utf8').split('\n');

    it(' should calculate how many cubes are ON', () => {
      assert.strictEqual(sut.runOne(input2), 590784);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day22-2', 'utf8').split('\n');

    xit(' should calculate how many cubes are ON in the complete space', () => {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

