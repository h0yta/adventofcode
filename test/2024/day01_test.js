const sut = require('../../src/2024/day01');
const fs = require('fs');
const assert = require('assert');

describe('2024 - 01', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2024/day01-1', 'utf8').split('\r\n');

    it(' should calculate the total distance', () => {
      assert.strictEqual(sut.runOne(input), 11);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2024/day01-2', 'utf8').split('\r\n');

    it(' should calculate similarity score', () => {
      assert.strictEqual(sut.runTwo(input), 31);
    });

  });

});

