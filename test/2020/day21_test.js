const sut = require('../../src/2020/day21');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 21', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day21', 'utf8').split('\n');

    it('should count number of occurrences of non allergen ingredients', function () {
      assert.strictEqual(sut.runOne(input), 5);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day21', 'utf8').split('\n');

    it('should sort allergen ingredients by allergen', function () {
      assert.strictEqual(sut.runTwo(input), 'mxmxvkd,sqjhc,fvjkl');
    });

  });

});

