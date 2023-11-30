const sut = require('../../src/2022/day13');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 13', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day13', 'utf8').split('\n');

    xit(' should summurize the pairs that are in correct order', () => {
      assert.strictEqual(sut.runOne(input), 13);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2022/day13', 'utf8').split('\n');

    xit(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

