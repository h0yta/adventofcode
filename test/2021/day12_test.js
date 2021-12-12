const sut = require('../../src/2021/day12');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 12', () => {

  describe('firstStar', () => {
    let input1 = fs.readFileSync('./test/data/2021/day12-1', 'utf8').split('\n');
    it(' should count number of avalible paths', () => {
      assert.strictEqual(sut.runOne(input1), 10);
    });

    let input2 = fs.readFileSync('./test/data/2021/day12-2', 'utf8').split('\n');
    it(' should count number of avalible paths', () => {
      assert.strictEqual(sut.runOne(input2), 19);
    });

    let input3 = fs.readFileSync('./test/data/2021/day12-3', 'utf8').split('\n');
    it(' should count number of avalible paths', () => {
      assert.strictEqual(sut.runOne(input3), 226);
    });
  });

  describe('secondStar', () => {
    let input1 = fs.readFileSync('./test/data/2021/day12-1', 'utf8').split('\n');
    it(' ototot should count number of avalible paths', () => {
      assert.strictEqual(sut.runTwo(input1), 36);
    });

    let input2 = fs.readFileSync('./test/data/2021/day12-2', 'utf8').split('\n');
    it(' ototot should count number of avalible paths', () => {
      assert.strictEqual(sut.runTwo(input2), 103);
    });

    let input3 = fs.readFileSync('./test/data/2021/day12-3', 'utf8').split('\n');
    it(' ototot should count number of avalible paths', () => {
      assert.strictEqual(sut.runTwo(input3), 3509);
    });

  });

});

