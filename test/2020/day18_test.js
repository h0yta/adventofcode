const sut = require('../../src/2020/day18');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 18', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day18', 'utf8').split('\n');

    it('should sum up rows with strange math rules', function () {
      assert.strictEqual(sut.runOne(input), 13632);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day18', 'utf8').split('\n');

    it('should sum up rows with strange math rules', function () {
      assert.strictEqual(sut.runTwo(input), 23340);
    });

  });

});

