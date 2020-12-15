const sut = require('../../src/2020/day15');
const assert = require('assert');

describe('2020 - 15', function () {

  describe('firstStar', function () {

    it('should run game 10 turns', function () {
      assert.strictEqual(sut.runOne('0,3,6'.split(','), 10), 0);
    });

    it('should run game 2020 turns', function () {
      assert.strictEqual(sut.runOne('0,3,6'.split(','), 2020), 436);
    });

    it('should run game 2020 turns', function () {
      assert.strictEqual(sut.runOne('1,3,2'.split(','), 2020), 1);
    });

  });

});

