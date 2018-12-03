const sut = require('../../src/2015/day01');
const assert = require('assert');

describe('2015 - Day 01', function () {

    describe('firstStar', function () {

        it('should return 3', function () {
            let input = ['(())'];
            assert.equal(sut.runOne(input), 0);
        });

        it('should return 3', function () {
            let input = ['(()(()('];
            assert.equal(sut.runOne(input), 3);
        });

        it('should return -3', function () {
            let input = [')())())'];
            assert.equal(sut.runOne(input), -3);
        });

    });

    describe('secondStar', function () {

        it('should return 0', function () {
            let input = '';
            assert.equal(sut.runTwo(input), 0);
        });

    });

});

