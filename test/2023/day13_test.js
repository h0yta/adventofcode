const sut = require('../../src/2023/day13');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 13', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day13-1', 'utf8').split('\n');

    it(' should summarize all of the notes', () => {
      assert.strictEqual(sut.runOne(input), 405);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day13-2', 'utf8').split('\n');

    it(' should summarize all of the different notes', () => {
      assert.strictEqual(sut.runTwo(input), 400);
    });

  });

});

