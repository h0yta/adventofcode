const sut = require('../../src/2021/day03');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 03', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2021/day03', 'utf8').split('\n');

    it(' should calculate power consumtion', function () {
      assert.strictEqual(sut.runOne(input), 198);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2021/day03', 'utf8').split('\n');

    it(' should calculate life support ratin', function () {
      assert.strictEqual(sut.runTwo(input), 230);
    });

  });

});

