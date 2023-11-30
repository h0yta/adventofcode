const sut = require('../../src/2023/day01');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 01', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day01', 'utf8').split('\n');

    it('ototot should ...', () => {
      assert.strictEqual(sut.runOne(input), 0);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day01', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

