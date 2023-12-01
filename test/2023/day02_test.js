const sut = require('../../src/2023/day02');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 02', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day02-1', 'utf8').split('\n');

    it('ototot should ...', () => {
      assert.strictEqual(sut.runOne(input), 0);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day02-2', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

