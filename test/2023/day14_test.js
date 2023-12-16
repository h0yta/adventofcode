const sut = require('../../src/2023/day14');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 14', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day14-1', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runOne(input), 136);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day14-2', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 64);
    });

  });

});

