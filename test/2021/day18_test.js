const sut = require('../../src/2021/day18');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 18', () => {


  describe('firstStar', () => {
    let input = fs.readFileSync('./test/data/2021/day18-0.txt', 'utf8').split('\n');

    it('should calculate magnitude', () => {
      assert.strictEqual(sut.runOne(input), 4140);
    });

  });

  describe('sum', () => {
    let input11 = fs.readFileSync('./test/data/2021/day18-11.txt', 'utf8').split('\n');
    xit('should sum snailfish numbers', () => {
      assert.strictEqual(sut.sum(input11), '[[[[1,1],[2,2]],[3,3]],[4,4]]');
    });

    let input12 = fs.readFileSync('./test/data/2021/day18-12.txt', 'utf8').split('\n');
    xit('should sum snailfish numbers', () => {
      assert.strictEqual(sut.sum(input12), '[[[[3,0],[5,3]],[4,4]],[5,5]]');
    });

    let input13 = fs.readFileSync('./test/data/2021/day18-13.txt', 'utf8').split('\n');
    xit('should sum snailfish numbers', () => {
      assert.strictEqual(sut.sum(input13), '[[[[5,0],[7,4]],[5,5]],[6,6]]');
    });

  });

  describe('explode', () => {

    xit('should explode snailfish numbers', () => {
      assert.strictEqual(sut.explode('[[[[[9,8],1],2],3],4]'), '[[[[0,9],2],3],4]');
    });

    xit('should explode snailfish numbers', () => {
      assert.strictEqual(sut.explode('[7,[6,[5,[4,[3,2]]]]]'), '[7,[6,[5,[7,0]]]]');
    });

    xit('should explode snailfish numbers', () => {
      assert.strictEqual(sut.explode('[[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]'), '[[3,[2,[8,0]]],[9,[5,[7,0]]]]');
    });

  });
  describe('split', () => {

    xit('should split snailfish numbers', () => {
      assert.strictEqual(sut.split('[[[[0,7],4],[15,[0,13]]],[1,1]]'), '[[[[0,7],4],[[7,8],[0,[6,7]]]],[1,1]]');
    });

  });

  describe('calculateMagnitude', () => {

    xit('should calculate magnitude 143', () => {
      assert.strictEqual(sut.calculateMagnitude('[[1,2],[[3,4],5]]'), 143);
    });

    xit('should calculate magnitude 1384', () => {
      assert.strictEqual(sut.calculateMagnitude('[[[[0,7],4],[[7,8],[6,0]]],[8,1]]'), 1384);
    });

    xit('should calculate magnitude 3488', () => {
      assert.strictEqual(sut.calculateMagnitude('[[[[8,7],[7,7]],[[8,6],[7,7]]],[[[0,7],[6,6]],[8,7]]]'), 3488);
    });

  });

  describe('secondStar', () => {
    let input = fs.readFileSync('./test/data/2021/day18-0.txt', 'utf8').split('\n');

    it(' should find largest magnitud', () => {
      assert.strictEqual(sut.runTwo(input), 3993);
    });

  });

});

