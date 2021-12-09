const utils = require('../util/fileUtil');

const firstStar = (input) => {
  input = input.map(parseInput);
  return input.map(values => {
    return values.output.filter(out =>
      out.length === 2 || out.length === 3 || out.length === 4 || out.length === 7
    ).length
  }).reduce((acc, cur) => acc += cur);
}

const secondStar = (input) => {
  input = input.map(parseInput);
  return input.map(values => {
    let mapping = constructMapping(values.input);
    let newOutput = values.output.map(chars => {
      let value = mapping.indexOf(chars);
      return value + '';
    }).reduce((acc, cur) => acc += cur);
    return parseInt(newOutput)
  }).reduce((acc, cur) => acc += cur);
}

const constructMapping = (input) => {
  let mapping = new Array(10);
  mapping[1] = input.filter(x => x.length === 2)[0];
  mapping[4] = input.filter(x => x.length === 4)[0];
  mapping[7] = input.filter(x => x.length === 3)[0];
  mapping[8] = input.filter(x => x.length === 7)[0];

  // Includes easy ones
  mapping[9] = input.filter(x => x.length === 6
    && completlyIncludes(x, mapping[4]))[0];
  mapping[0] = input.filter(x => x.length === 6
    && completlyIncludes(x, mapping[7])
    && !completlyIncludes(x, mapping[4]))[0];
  mapping[6] = input.filter(x => x.length === 6
    && !completlyIncludes(x, mapping[4])
    && !completlyIncludes(x, mapping[7]))[0];

  // Includes others
  mapping[3] = input.filter(x => x.length === 5
    && completlyIncludes(x, mapping[7]))[0];
  mapping[5] = input.filter(x => x.length === 5
    && completlyIncludes(mapping[6], x))[0];
  mapping[2] = input.filter(x => x.length === 5
    && !completlyIncludes(x, mapping[7])
    && !completlyIncludes(mapping[6], x))[0];

  return mapping;
}

/**
 * Returns TRUE if all characters in the second string is included in the first string.
 * @param {String} one 
 * @param {String} two 
 * @returns TRUE / FALSE
 */
const completlyIncludes = (one, two) => {
  return two.length - two.split('').filter(x => one.includes(x)).length === 0;
}

const parseInput = (input) => {
  let inputParts = input.split('\|');
  return {
    input: inputParts[0].trim().split(/\s/).map(x => x.split('').sort().join('')),
    output: inputParts[1].trim().split(/\s/).map(x => x.split('').sort().join(''))
  }
}

exports.run = () => {
  let input = utils.getInput('2021', 'day08', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;