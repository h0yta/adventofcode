const sut = require('../../src/2021/day17');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 17', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day17', 'utf8').split('\n');

    it(' should find highest y point of any trajectory', () => {
      assert.strictEqual(sut.runOne(input), 45);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day17', 'utf8').split('\n');

    it(' should find number of trajectories that hit the target', () => {
      assert.strictEqual(sut.runTwo(input), 112);
    });

  });

});

