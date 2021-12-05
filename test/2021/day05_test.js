const sut = require('../../src/2021/day05');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 05', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2021/day05', 'utf8').split('\n');

    it(' should calculate number of points that ovelap aleast twice', function () {
      assert.strictEqual(sut.runOne(input), 5);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2021/day05', 'utf8').split('\n');

    it(' should calculate number of points that ovelap aleast twice', function () {
      assert.strictEqual(sut.runTwo(input), 12);
    });

  });

});

