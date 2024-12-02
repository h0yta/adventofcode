const sut = require('../../src/2024/day02');
const fs = require('fs');
const assert = require('assert');

describe('2024 - 02', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2024/day02-1', 'utf8').replaceAll('\r', '').split('\n');

    it(' should calculate the number of safe reports', () => {
      assert.strictEqual(sut.runOne(input), 2);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2024/day02-1', 'utf8').replaceAll('\r', '').split('\n');

    it(' should calculate the number of safe reports by using the problem dampener', () => {
      assert.strictEqual(sut.runTwo(input), 4);
    });

  });

});

