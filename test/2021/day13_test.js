const sut = require('../../src/2021/day13');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 13', () => {

  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day13', 'utf8').split('\n');

    it(' should sum up number of dots on folded paper', () => {
      assert.strictEqual(sut.runOne(input), 17);
    });

  });

});

