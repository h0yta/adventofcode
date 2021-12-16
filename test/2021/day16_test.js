const sut = require('../../src/2021/day16');
const fs = require('fs');
const assert = require('assert');

describe('2021 - 16', () => {


  describe('parseInput', () => {

    it(' should convert hex to binary', () => {
      assert.strictEqual(sut.parseInput('D2FE28'), '110100101111111000101000');
    });

    it(' should convert hex to binary', () => {
      assert.strictEqual(sut.parseInput('38006F45291200'), '00111000000000000110111101000101001010010001001000000000');
    });

    it(' should convert hex to binary', () => {
      assert.strictEqual(sut.parseInput('EE00D40C823060'), '11101110000000001101010000001100100000100011000001100000');
    });

  });

  describe('firstStar', () => {

    it(' should sum up version numbers', () => {
      assert.strictEqual(sut.runOne('8A004A801A8002F478'), 16);
    });

    it(' should sum up version numbers', () => {
      assert.strictEqual(sut.runOne('620080001611562C8802118E34'), 12);
    });

    it(' should sum up version numbers', () => {
      assert.strictEqual(sut.runOne('C0015000016115A2E0802F182340'), 23);
    });

    it(' should sum up version numbers', () => {
      assert.strictEqual(sut.runOne('A0016C880162017C3686B18A3D4780'), 31);
    });

  });

  describe('secondStar', () => {

    it(' should calculate object value', () => {
      assert.strictEqual(sut.runTwo('C200B40A82'), 3);
    });

    it(' should calculate object value', () => {
      assert.strictEqual(sut.runTwo('04005AC33890'), 54);
    });

    it(' should calculate object value', () => {
      assert.strictEqual(sut.runTwo('880086C3E88112'), 7);
    });

    it(' should calculate object value', () => {
      assert.strictEqual(sut.runTwo('CE00C43D881120'), 9);
    });

    it(' should calculate object value', () => {
      assert.strictEqual(sut.runTwo('D8005AC2A8F0'), 1);
    });

    it(' should calculate object value', () => {
      assert.strictEqual(sut.runTwo('F600BC2D8F'), 0);
    });

    it(' should calculate object value', () => {
      assert.strictEqual(sut.runTwo('9C005AC2F8F0'), 0);
    });

    it(' should calculate object value', () => {
      assert.strictEqual(sut.runTwo('9C0141080250320F1802104A08'), 1);
    });

  });

});

