const utils = require('../util/fileUtil');

const firstStar = function (input) {
    return input
        .reduce((pre, cur) => pre + cur === '(' ? 1 : -1, 0);
}

const secondStar = function (input) {
    let nums = input.map(Number);
    let seen = [0];
    let current = 0;
    while (true) {
        for (i = 0; i < nums.length; i++) {
            current += parseInt(nums[i]);
            if (seen.includes(current)) {
                return current;
            }
            seen.push(current);
        }
    }
}

exports.run = function () {
    let input = utils.getInput('2015', 'day01', '');
    console.log('Answer for first star', firstStar(input));
    console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;