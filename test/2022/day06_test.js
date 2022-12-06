const sut = require('../../src/2022/day06');
const assert = require('assert');

describe('2022 - 06', () => {

  describe('firstStar', () => {

    it(' should find start-of-packet marker if marker size is 4', () => {
      assert.strictEqual(sut.runOne('mjqjpqmgbljsphdztnvjfqwrcgsmlb'.split('')), 7);
    });

  });

  describe('secondStar', () => {

    it(' should find start-of-packet marker if marker size is 4 - 1', () => {
      assert.strictEqual(sut.runTwo('mjqjpqmgbljsphdztnvjfqwrcgsmlb'.split('')), 19);
    });

    it(' should find start-of-packet marker if marker size is 4 - 2', () => {
      assert.strictEqual(sut.runTwo('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'.split('')), 29);
    });

  });

});

