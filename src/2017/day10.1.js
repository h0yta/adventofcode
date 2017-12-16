var fs = require('fs')

var data = '130,126,1,11,140,2,255,207,18,254,246,164,29,104,0,224';

var run_round = (list, lengths, current, skip) => {
  for (var size of lengths) {
    // extract subset of elements to reverse
    var culprit = list.slice(current, current + size)
    var pos = culprit.length

    if (list.length < current + size + 1)
      culprit.push(...list.slice(0, (current + size) - list.length))

    // reverse elements!
    culprit.reverse();

    // re-incorporate elements back into list
    list.splice(current, size, ...culprit.splice(0, pos));
    list.splice(0, culprit.length, ...culprit)

    // update values of current and skip
    current = (current + (size + skip++)) % list.length
  }

  return [current, skip]
}

var run_rounds = (list, lengths, rounds) => {
  var current = 0, skip = 0

  for (var i = 0; i < rounds; i++) {
    // run a single round on length sequence
    [current, skip] = run_round(list, lengths, current, skip)
  }
}


// part 1
var lengths = data.split(',').map(n => +n)
var list = [...Array(256).keys()]

run_rounds(list, lengths, 1)

console.log('The answer to part 1 is:', list[0] * list[1])

// part 2
lengths = [...data].map(n => String(n).charCodeAt(0))
  .concat(17, 31, 73, 47, 23)

list = [...Array(256).keys()]

run_rounds(list, lengths, 64)

for (var i = 0; i < 16; i++)
  list.splice(i, 16, list.slice(i, i + 16)
    .reduce((a, b) => a ^ b))

console.log('The answer to part 2 is:',
  list.map(a => {
    var ascii = a.toString(16);
    return ascii.padStart(2 - ascii.length + 1, '0');
  }).join(""))