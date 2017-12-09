const sut = require('../../src/2017/day09');
const assert = require('assert');

describe('Day 08', function () {

  describe('firstRun', function () {

    it('should return 1', function () {
      let input = '{}';
      assert.equal(sut.runOne(input.split('')), 1);
    });

    it('should return 6', function () {
      let input = '{{{}}}';
      assert.equal(sut.runOne(input.split('')), 6);
    });

    it('should return 5', function () {
      let input = '{{}, {}}';
      assert.equal(sut.runOne(input.split('')), 5);
    });

    it('should return 16', function () {
      let input = '{{{}, {}, {{}}}}';
      assert.equal(sut.runOne(input.split('')), 16);
    });

    it('should return 1', function () {
      let input = '{<a >,<a>,<a>,<a>}';
      assert.equal(sut.runOne(input.split('')), 1);
    });

    it('should return 9', function () {
      let input = '{{<ab>},{<ab>},{<ab>},{<ab>}}';
      assert.equal(sut.runOne(input.split('')), 9);
    });

    it('should return 9', function () {
      let input = '{{<!!>},{<!!>},{<!!>},{<!!>}}';
      assert.equal(sut.runOne(input.split('')), 9);
    });

    it('should return 3', function () {
      let input = '{{<a!>},{<a!>},{<a!>},{<ab>}}';
      assert.equal(sut.runOne(input.split('')), 3);
    });

  });

  describe('secondRun ', function () {

    it('should return 0', function () {
      let input = '<>';
      assert.equal(sut.runTwo(input.split('')), 0);
    });

    it('should return 17', function () {
      let input = '<random characters>';
      assert.equal(sut.runTwo(input.split('')), 17);
    });

    it('should return 3', function () {
      let input = '<<<<>';
      assert.equal(sut.runTwo(input.split('')), 3);
    });

    it('should return 2', function () {
      let input = '<{!>}>';
      assert.equal(sut.runTwo(input.split('')), 2);
    });

    it('should return 0', function () {
      let input = '<!!>';
      assert.equal(sut.runTwo(input.split('')), 0);
    });

    it('should return 0', function () {
      let input = '<!!!>>';
      assert.equal(sut.runTwo(input.split('')), 0);
    });

    it('should return 10', function () {
      let input = '<{o"i!a,<{i<a>';
      assert.equal(sut.runTwo(input.split('')), 10);
    });

  });

});

