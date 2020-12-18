const sut = require('../../src/2020/day17');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 17', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/2020/day17', 'utf8').split('\n');

    it('should calculate active cubes in three dimensional grid', function () {
      assert.strictEqual(sut.runOne(input), 112);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/2020/day17', 'utf8').split('\n');

    // Takes about 10s
    xit('should calculate active cubes in four dimensional grid', function () {
      assert.strictEqual(sut.runTwo(input), 848);
    });

  });

});

