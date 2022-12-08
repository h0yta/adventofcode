const sut = require('../../src/2022/day07');
const fs = require('fs');
const assert = require('assert');

describe('2022 - 07', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2022/day07', 'utf8').split('\n');

    it(' should summeries all small directories', () => {
      assert.strictEqual(sut.runOne(input), 95437);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2022/day07', 'utf8').split('\n');

    it(' should find smallest directory big enough', () => {
      assert.strictEqual(sut.runTwo(input), 24933642);
    });

  });

});

