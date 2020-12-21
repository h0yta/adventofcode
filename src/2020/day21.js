const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let ingredients = input.map(row => parseInput(row));
  let allergens = [...new Set(ingredients.flatMap(x => x.allergens))];
  let allIngredients = [...new Set(ingredients.flatMap(x => x.ingredients))];

  allergens = allergens.map(allergen => {
    let ingredientsWithAllergen = ingredients
      .filter(x => x.allergens.includes(allergen))
      .map(x => x.ingredients);
    let all = [...new Set(ingredients.filter(x => x.allergens.includes(allergen))
      .flatMap(x => x.ingredients))];

    let intersect = all.filter(x => {
      return ingredientsWithAllergen.every(y => y.includes(x));
    });

    return { allergen: allergen, ingredients: intersect, done: intersect.length === 1 };
  })

  let count = 0;
  while (allergens.filter(x => !x.done)) {
    if (count++ > 10) break;
    allergens.forEach(allergen => {
      if (allergen.done) {
        allergens.forEach(mA => {
          if (!mA.done) {
            mA.ingredients = mA.ingredients.filter(i => i !== allergen.ingredients[0]);
            mA.done = mA.ingredients.length === 1;
          }
        })
      }
    });
  }

  let allIngredientsWithAllergens = allergens.map(a => a.ingredients.pop());
  let ingredientsWithoutAllergens = allIngredients.filter(i => !allIngredientsWithAllergens.includes(i));
  let occurensesOfNonAllergenIngredients = ingredients
    .flatMap(i => i.ingredients.filter(ii => ingredientsWithoutAllergens.includes(ii)))
  return occurensesOfNonAllergenIngredients.length;
}

const secondStar = function (input) {
  let ingredients = input.map(row => parseInput(row));
  let allergens = [...new Set(ingredients.flatMap(x => x.allergens))];

  allergens = allergens.map(allergen => {
    let ingredientsWithAllergen = ingredients
      .filter(x => x.allergens.includes(allergen))
      .map(x => x.ingredients);
    let all = [...new Set(ingredients.filter(x => x.allergens.includes(allergen))
      .flatMap(x => x.ingredients))];

    let intersect = all.filter(x => {
      return ingredientsWithAllergen.every(y => y.includes(x));
    });

    return { allergen: allergen, ingredients: intersect, done: intersect.length === 1 };
  })

  let count = 0;
  while (allergens.filter(x => !x.done)) {
    if (count++ > 10) break;
    allergens.forEach(allergen => {
      if (allergen.done) {
        allergens.forEach(mA => {
          if (!mA.done) {
            mA.ingredients = mA.ingredients.filter(i => i !== allergen.ingredients[0]);
            mA.done = mA.ingredients.length === 1;
          }
        })
      }
    });
  }

  return allergens
    .sort((a, b) => a.allergen < b.allergen ? -1 : a.allergen > b.allergen ? 1 : 0)
    .map(a => a.ingredients.pop())
    .join(',');
}

const parseInput = (row) => {
  // mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
  let ruleRegexp = /^(.*)\(contains(.*)\)$/;
  let match = ruleRegexp.exec(row);
  if (match === null) {
    console.log('Found no match for', row);
  } else {
    return {
      ingredients: match[1].trim().split(' '),
      allergens: match[2].trim().split(', ')
    }
  }
}

exports.run = function () {
  let input = utils.getInput('2020', 'day21', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
