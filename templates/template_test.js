const sut = require('../../src/##YEAR##/day##DAY##');
const fs = require('fs');
const assert = require('assert');

describe('##YEAR## - ##DAY##', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/##YEAR##/day##DAY##', 'utf8').split('\n');

    it('should ...', function () {
      assert.strictEqual(sut.runOne(input), 0);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/##YEAR##/day##DAY##', 'utf8').split('\n');

    it('should ...', function () {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

