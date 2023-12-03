const sut = require('../../src/2023/day02');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 02', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day02-1', 'utf8').split('\n');

    it(' should sumarixe the IDs of all games within limits', () => {
      assert.strictEqual(sut.runOne(input), 8);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day02-2', 'utf8').split('\n');

    it(' should summarize the power of all games ', () => {
      assert.strictEqual(sut.runTwo(input), 2286);
    });

  });

});

