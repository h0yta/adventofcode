const sut = require('../../src/2021/day09');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 09', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day09', 'utf8').split('\n');

    it(' should sum the risk levels of all lowpoints', () => {
      assert.strictEqual(sut.runOne(input), 15);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day09', 'utf8').split('\n');

    it(' should multiply the sizes of the three largest basins', () => {
      assert.strictEqual(sut.runTwo(input), 1134);
    });

  });

});

