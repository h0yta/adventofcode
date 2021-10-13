const sut = require('../../src/2016/day07');
const fs = require('fs');
const assert = require('assert');

describe('2016 - 07', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2016/day07', 'utf8').split('\n');

    it('should find number of ipv7 addresses that supports TLS', function () {
      assert.strictEqual(sut.runOne(input), 3);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2016/day072', 'utf8').split('\n');

    it('should find number of ipv7 addresses that supports SSL', function () {
      assert.strictEqual(sut.runTwo(input), 3);
    });

  });

});

