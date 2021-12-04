const sut = require('../../src/2021/day04');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 04', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2021/day04', 'utf8').split('\n');

    it(' should figure out the winning number', function () {
      assert.strictEqual(sut.runOne(input), 4512);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2021/day04', 'utf8').split('\n');

    it(' ototot should figure out the winning number', function () {
      assert.strictEqual(sut.runTwo(input), 1924);
    });

  });

});

