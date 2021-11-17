const sut = require('../../src/2015/day12');
const fs = require('fs');
const assert = require('assert');

describe('2015 - 12', function () {

  describe('firstStar', function () {

    it('should sum values in JSON 1', function () {
      assert.strictEqual(sut.runOne('[1,2,3]'), 6);
    });

    it('should sum values in JSON 2', function () {
      assert.strictEqual(sut.runOne('{"a":2,"b":4}'), 6);
    });

    it('should sum values in JSON 3', function () {
      assert.strictEqual(sut.runOne('{"a":[-1,1]}'), 0);
    });

    it('should sum values in JSON 4', function () {
      assert.strictEqual(sut.runOne('{"a":{"b":4},"c":-1}'), 3);
    });

  });

  describe('secondStar', function () {

    it('should sum values in JSON 1', function () {
      assert.strictEqual(sut.runTwo('[1,2,3]'), 6);
    });

    it('should sum values in JSON 1', function () {
      assert.strictEqual(sut.runTwo('[1,{"c":"red","b":2},3]'), 4);
    });

    it('should sum values in JSON 1', function () {
      assert.strictEqual(sut.runTwo('{"d":"red","e":[1,2,3,4],"f":5}'), 0);
    });

    it('should sum values in JSON 1', function () {
      assert.strictEqual(sut.runTwo('[1,"red",5]'), 6);
    });

  });

});

