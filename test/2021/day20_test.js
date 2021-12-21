const sut = require('../../src/2021/day20');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 20', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day20', 'utf8').split('\n\n');

    it(' should count number of lit pixels', () => {
      assert.strictEqual(sut.runOne(input), 35);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day20', 'utf8').split('\n\n');

    it(' should count number of lit pixels', () => {
      assert.strictEqual(sut.runTwo(input), 3351);
    });

  });

});

