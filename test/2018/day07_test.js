const sut = require('../../src/2018/day07');
const fs = require('fs');
const assert = require('assert');

describe('2018 - Day 07', function () {

  describe('firstStar', function () {

    it('should return CABDFE', function () {
      let input = fs.readFileSync('./test/data/201807', 'utf8').split('\n');
      assert.equal(sut.runOne(input), 'CABDFE');
    });

  });

  describe('secondStar', function () {

    it('should return 0', function () {
      let input = fs.readFileSync('./test/data/201807', 'utf8').split('\n');
      assert.equal(sut.runTwo(input), 0);
    });

  });

});

