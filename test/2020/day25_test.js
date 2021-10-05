const sut = require('../../src/2020/day25');
const fs = require('fs');
const assert = require('assert');

describe('2020 - 25', function () {

  describe('firstStar', function () {
    it('should calculate encryptionkey', function () {
      assert.strictEqual(sut.runOne([5764801, 17807724]), 14897079);
    });

  });

});

