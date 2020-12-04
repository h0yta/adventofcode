const sut = require('../../src/2020/day04');
const fs = require('fs');
const assert = require('assert');

describe('2020 - Day 04', function () {

  describe('firstStar', function () {
    let input = fs.readFileSync('./test/data/202004', 'utf8').split('\n');

    it('should validate passports attributes', function () {
      assert.strictEqual(sut.runOne(input), 2);
    });

  });

  describe('secondStar', function () {
    let input = fs.readFileSync('./test/data/202004', 'utf8').split('\n');

    it('should ...', function () {
      assert.strictEqual(sut.runTwo(input), 2);
    });

  });

  describe('hasRequiredValues', function () {

    it('should validate passport attribute values', function () {
      assert.strictEqual(sut.hasRequiredValues('pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980 hcl:#623a2f'), true);
      assert.strictEqual(sut.hasRequiredValues('eyr:2029 ecl:blu cid:129 byr:1989 iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm'), true);
      assert.strictEqual(sut.hasRequiredValues('hcl:#888785 hgt:164cm byr:2001 iyr:2015 cid:88 pid:545766238 ecl:hzl eyr:2022'), true);
      assert.strictEqual(sut.hasRequiredValues('iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719'), true);

      assert.strictEqual(sut.hasRequiredValues('eyr:1972 cid:100 hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926'), false);
      assert.strictEqual(sut.hasRequiredValues('iyr:2019 hcl:#602927 eyr:1967 hgt:170cm ecl:grn pid:012533040 byr:1946'), false);
      assert.strictEqual(sut.hasRequiredValues('hcl:dab227 iyr:2012 ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277'), false);
      assert.strictEqual(sut.hasRequiredValues('hgt:59cm ecl:zzz eyr:2038 hcl:74454a iyr:2023 pid:3556412378 byr:2007'), false);
    });

  });

});

