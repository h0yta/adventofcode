const sut = require('../../src/2020/day07');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 07', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day07', 'utf8').split('\n');

    it('should figure out how many bags are possible', function () {
      assert.strictEqual(sut.runOne('shiny gold', input), 4);
    });

  });

  describe('secondStar', function () {
    let input2 = fs.readFileSync('./test/data/2020/day072', 'utf8').split('\n');

    it('should calculate how many bags i required', function () {
      assert.strictEqual(sut.runTwo('shiny gold', input2), 126);
    });

    let input = fs.readFileSync('./test/data/2020/day07', 'utf8').split('\n');

    it('should calculate how many bags i required', function () {
      assert.strictEqual(sut.runTwo('shiny gold', input), 32);
    });

  });

});

