const sut = require('../../src/2022/day05');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 05', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day05', 'utf8').split('\r\n');

    it(' top row should be', () => {
      assert.strictEqual(sut.runOne(input), 'CMZ');
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2022/day05', 'utf8').split('\r\n');

    it(' ototot top row should be', () => {
      assert.strictEqual(sut.runTwo(input), 'MCD');
    });

  });

});

