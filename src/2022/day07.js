const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let computer = createComputer(input);
  let json = JSON.parse(JSON.stringify(computer, replacer, 2));
  return scanTree(json);
}

const secondStar = (input) => {
  let computer = createComputer(input);
  const TOTAL_DISK_SPACE = 70000000;
  let freeSpace = TOTAL_DISK_SPACE - computer.size;

  const SPACE_NEEDED = 30000000;
  let spaceToFree = 0;
  if (freeSpace < SPACE_NEEDED) {
    spaceToFree = SPACE_NEEDED - freeSpace;
  }

  let json = JSON.parse(JSON.stringify(computer, replacer, 2));
  let sizes = findDirSizes(json);

  return Math.min(...sizes.filter(size => size >= spaceToFree));
}

const createComputer = (input) => {
  let curr;
  let ls = false;
  for (let row = 0; row < input.length; row++) {
    if (input[row].indexOf('$') !== 0 && ls) {
      if (input[row].indexOf('dir') === 0) {
        let dirName = input[row].replace('dir', '').trim();
        curr[dirName] = {
          _isDir: true,
          '..': curr,
          dirName: dirName,
          size: 0
        }
      } else {
        let file = input[row].split(' ');
        curr[file[1]] = {
          _isDir: false,
          fileName: file[1],
          size: parseInt(file[0])
        }
        curr.size += parseInt(file[0]);
      }
      continue;
    } else if (ls) {
      ls = false;
    }

    if (input[row].indexOf('$ cd /') === 0) {
      let parent = {
        _isDir: true,
        dirName: '/',
        size: 0
      };
      curr = parent;
    } else if (input[row].indexOf('$ cd') === 0) {
      let dirName = input[row].replace('$ cd', '').trim();
      if (dirName === '..') {
        curr[dirName].size += curr.size;
      }
      curr = curr[dirName];
    } else if (input[row] === '$ ls') {
      ls = true;
    }
  }

  while (curr['..'] !== undefined) {
    curr['..'].size += curr.size
    curr = curr['..'];
  }

  return curr;
}

function replacer(key, value) {
  if (key === '..') {
    return undefined;
  } else if (key === 'dirName') {
    return undefined;
  } else if (key === 'fileName') {
    return undefined;
  }
  return value;
}

const scanTree = (json) => {
  let size = 0;
  if (json instanceof Object) {
    for (let k in json) {
      if (json.hasOwnProperty(k)) {
        if (json[k]._isDir) {
          if (json[k].size <= 100000) {
            size += json[k].size;
          }
          size += scanTree(json[k]);
        }
      }
    }
  }

  return size;
};

const findDirSizes = (json) => {
  let sizes = new Array();
  if (json._isDir) {
    sizes.push(json.size);
  }

  if (json instanceof Object) {
    for (let k in json) {
      if (json.hasOwnProperty(k)) {
        if (json[k]._isDir) {
          sizes = sizes.concat(findDirSizes(json[k]));
        }
      }
    }
  }

  return sizes;
};

exports.run = () => {
  let input = utils.getInput('2022', 'day07', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
