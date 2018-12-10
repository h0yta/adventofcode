const sut = require('../../src/2018/day10');
const fs = require('fs');
const assert = require('assert');

describe('2018 - Day 10', function () {

  before(function () {
    process.env.NODE_ENV = 'test';
  });

  describe('firstStar', function () {

    it('Should spell HI', function () {
      let input = fs.readFileSync('./test/data/201810', 'utf8').split('\n');
      assert.equal(sut.runOne(input), '');
    });

  });

  describe('secondStar', function () {

    it('Should return 3', function () {
      let input = fs.readFileSync('./test/data/201810', 'utf8').split('\n');
      assert.equal(sut.runTwo(input), 3);
    });

  });

});

