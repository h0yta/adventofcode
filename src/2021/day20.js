const utils = require('../util/fileUtil');

const firstStar = (input) => {
  let algorithm = getEnhancementAlgorithm(input[0]);
  let image = getInputImage(input[1]);
  for (let round = 0; round < 2; round++) {
    image = enhance(image, algorithm, calculateDefault(algorithm, round));
  }

  return countLitPixels(image);
}

const secondStar = (input) => {
  let algorithm = getEnhancementAlgorithm(input[0]);
  let image = getInputImage(input[1]);
  for (let round = 0; round < 50; round++) {
    image = enhance(image, algorithm, calculateDefault(algorithm, round));
  }

  return countLitPixels(image);
}

const calculateDefault = (algorithm, round) => {
  return round % 2 === 0 ? algorithm[0] === '.' ? algorithm[0] : algorithm[511] : algorithm[0];;
}

const getEnhancementAlgorithm = (input) => {
  return input.split(/\n/).join('').split('');
}

const getInputImage = (input) => {
  return input.split(/\n/).map(row => row.split(''));
}

const enhance = (image, algorithm, defaultValue) => {
  let expandedImage = expand(image, defaultValue);
  let enhanceImage = new Array(expandedImage.length).fill('.')
    .map(() => new Array(expandedImage[0].length).fill('.'));

  for (let y = 0; y < expandedImage.length; y++) {
    for (let x = 0; x < expandedImage[0].length; x++) {
      let outputIndex = getOutputIndex(expandedImage, y, x, defaultValue);
      enhanceImage[y][x] = algorithm[outputIndex];
    }
  }

  return enhanceImage;
}

const expand = (image, defaultValue) => {
  let newImage = new Array(image.length + 2).fill(defaultValue)
    .map(() => new Array(image[0].length + 2).fill(defaultValue));
  for (let y = 0; y < image.length; y++) {
    for (let x = 0; x < image[0].length; x++) {
      newImage[y + 1][x + 1] = image[y][x];
    }
  }
  return newImage;
}

const getOutputIndex = (image, y, x, defaultValue) => {
  let outputPixel = new Array();
  if (image[y - 1]) {
    outputPixel.push(image[y - 1][x - 1] ?? defaultValue);
    outputPixel.push(image[y - 1][x]);
    outputPixel.push(image[y - 1][x + 1] ?? defaultValue);
  } else {
    outputPixel.push(defaultValue);
    outputPixel.push(defaultValue);
    outputPixel.push(defaultValue);
  }

  outputPixel.push(image[y][x - 1] ?? defaultValue);
  outputPixel.push(image[y][x]);
  outputPixel.push(image[y][x + 1] ?? defaultValue);

  if (image[y + 1]) {
    outputPixel.push(image[y + 1][x - 1] ?? defaultValue);
    outputPixel.push(image[y + 1][x]);
    outputPixel.push(image[y + 1][x + 1] ?? defaultValue);
  } else {
    outputPixel.push(defaultValue);
    outputPixel.push(defaultValue);
    outputPixel.push(defaultValue);
  }
  return parseInt(outputPixel.map(x => x === '#' ? 1 : 0).join(''), 2);
}

const countLitPixels = (image) => {
  return image.flatMap(row => row.filter(x => x === '#')).filter(x => x === '#').length;
}

const printImage = (image) => {
  image.forEach(row => console.log(row.join('')));
}

exports.run = () => {
  let input = utils.getInput('2021', 'day20', '\n\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
