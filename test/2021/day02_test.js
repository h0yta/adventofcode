const sut = require('../../src/2021/day02');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 02', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2021/day02', 'utf8').split('\n');

    it(' should calculate position', function () {
      assert.strictEqual(sut.runOne(input), 150);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2021/day02', 'utf8').split('\n');

    it(' should calculate position', function () {
      assert.strictEqual(sut.runTwo(input), 900);
    });

  });

});

