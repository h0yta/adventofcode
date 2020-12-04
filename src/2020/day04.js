const utils = require('../util/fileUtil');

const requiredAttributes = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
// , 'cid'

const firstStar = function (input) {
  let passports = getPassports(input);
  return passports.filter(passport => hasRequiredAttributes(passport)).length;
}

const secondStar = function (input) {
  let passports = getPassports(input);
  return passports
    .filter(passport => hasRequiredAttributes(passport))
    .filter(passport => hasRequiredValues(passport))
    .length;
}

const getPassports = function (input) {
  let passport = '';
  let passports = new Array();
  for (let i = 0; i < input.length; i++) {
    if (input[i].trim() === '') {
      passports.push(passport);
      passport = '';
    } else {
      if (passport !== '') {
        passport += ' ';
      }
      passport += input[i];
    }
  }
  passports.push(passport);
  return passports;
}

const hasRequiredAttributes = function (passport) {
  let passportAttr = passport.split(' ')
    .map(x => x.split(':')[0]);
  return requiredAttributes.every(x => passportAttr.includes(x));
}

const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
const hasRequiredValues = function (passport) {
  return passport.split(' ')
    .every(x => {
      let key = x.split(':')[0];
      let value = x.split(':')[1];
      switch (key) {
        case 'byr':
          // byr (Birth Year) - four digits; at least 1920 and at most 2002.
          let bYear = parseInt(value);
          return bYear >= 1920 && bYear <= 2002;
        case 'iyr':
          // iyr(Issue Year) - four digits; at least 2010 and at most 2020.
          let iYear = parseInt(value);
          return iYear >= 2010 && iYear <= 2020;
        case 'eyr':
          // eyr(Expiration Year) - four digits; at least 2020 and at most 2030.
          let eYear = parseInt(value);
          return eYear >= 2020 && eYear <= 2030;
        case 'hgt':
          // hgt(Height) - a number followed by either cm or in:
          // If cm, the number must be at least 150 and at most 193.
          // If in, the number must be at least 59 and at most 76.
          if (value.includes('cm')) {
            let height = parseInt(value.replace('cm', ''));
            return height >= 150 && height <= 193;
          } else {
            let height = parseInt(value.replace('in', ''));
            return height >= 59 && height <= 76;
          }
        case 'hcl':
          // hcl(Hair Color) - a # followed by exactly six characters 0 - 9 or a - f.
          const hclRegex = RegExp('^#[0-9a-f]{6}$');
          return hclRegex.test(value);
        case 'ecl':
          // ecl(Eye Color) - exactly one of: .
          return validEyeColors.includes(value);
        case 'pid':
          // pid(Passport ID) - a nine - digit number, including leading zeroes.
          const pidRegex = RegExp('^[0-9]{9}$');
          return pidRegex.test(value);
        case 'cid':
          // cid(Country ID) - ignored, missing or not.
          return true;
      }
    });
}


exports.run = function () {
  let input = utils.getInput('2020', 'day04', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
exports.hasRequiredValues = hasRequiredValues;