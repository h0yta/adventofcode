const sut = require('../../src/2021/day07');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 07', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day07', 'utf8').split(',');

    it(' should calculate lowest fuel consumtion', () => {
      assert.strictEqual(sut.runOne(input), 37);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day07', 'utf8').split(',');

    it(' should calculate lowest fuel consumtion', () => {
      assert.strictEqual(sut.runTwo(input), 168);
    });

  });

});

