const sut = require('../../src/2021/day19');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 19', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day19', 'utf8').split('\n');

    xit(' should ...', () => {
      //assert.strictEqual(sut.runOne(input), 79);
      assert.strictEqual(sut.runOne(input), 0);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day19', 'utf8').split('\n');

    xit(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

