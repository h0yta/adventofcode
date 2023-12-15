const sut = require('../../src/2023/day15');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 15', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day15-1', 'utf8').split(',');

    it(' should summarize the hash values for each character', () => {
      assert.strictEqual(sut.runOne(input), 1320);
    });

    it(' should summarize the hash values for each character', () => {
      assert.strictEqual(sut.runOne(['HASH']), 52);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day15-2', 'utf8').split(',');

    it(' should calculate the focusing power of all lenses', () => {
      assert.strictEqual(sut.runTwo(input), 145);
    });

  });

});

