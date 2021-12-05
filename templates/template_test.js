const sut = require('../../src/##YEAR##/day##DAY##');
const fs = require('fs');
const assert = require('assert');

describe('##YEAR## - ##DAY##', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/##YEAR##/day##DAY##', 'utf8').split('\n');

    it('ototot should ...', () => {
      assert.strictEqual(sut.runOne(input), 0);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/##YEAR##/day##DAY##', 'utf8').split('\n');

    it(' should ...', () => {
      assert.strictEqual(sut.runTwo(input), 0);
    });

  });

});

