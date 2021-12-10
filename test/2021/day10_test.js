const sut = require('../../src/2021/day10');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 10', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day10', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runOne(input), 26397);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day10', 'utf8').split('\n');

    it(' ototot should ...', () => {
      assert.strictEqual(sut.runTwo(input), 288957);
    });

  });

});

