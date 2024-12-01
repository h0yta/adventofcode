const sut = require('../../src/2023/day19');
const fs = require('fs');
const assert = require('assert');

describe('2023 - 19', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2023/day19-1', 'utf8').split('\n');

    it(' should summarize the rating numbers for all of the parts thats accepted', () => {
      assert.strictEqual(sut.runOne(input), 19114);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2023/day19-2', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

