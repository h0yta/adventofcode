const sut = require('../../src/2021/day14');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 14', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day14', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runOne(input, 10), 1588);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day14', 'utf8').split('\n\n');

    it(' ototot should ...', () => {
      assert.strictEqual(sut.runTwo(input, 40), 2188189693529);
    });

  });

});

