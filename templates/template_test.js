const sut = require('../../src/##YEAR##/##DAY_NO##');
const fs = require('fs');
const assert = require('assert');

describe('##YEAR## - ##DAY_NO##', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/##DAY_NO##', 'utf8').split('\n');

    it('should ...', function () {
      assert.strictEqual(sut.runOne(input), 0);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/##DAY_NO##', 'utf8').split('\n');

    it('should ...', function () {
      assert.strictEqual(sut.runTwo(input),);
    });

  });

});

