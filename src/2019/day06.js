const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let planets = createPlanets(input);

  return calculateTotalWeight(planets, 'COM', 0);
}

const secondStar = function (input) {
  let planets = createPlanets(input);
  let youPath = findPathToGoal(planets, 'COM', 'YOU');
  let sanPath = findPathToGoal(planets, 'COM', 'SAN');

  let connectingPlanet = findConnectingPlanet(sanPath, youPath);

  let sanWeight = calculateWeightToGoal(planets, connectingPlanet, 'SAN', 0);
  let youWeight = calculateWeightToGoal(planets, connectingPlanet, 'YOU', 0);

  return sanWeight + youWeight;
}

const createPlanets = (input) => {
  let planets = new Array();
  for (i = 0; i < input.length; i++) {
    let planet = input[i].split(')');
    let orbit;
    if (planets[planet[0]]) {
      orbit = planets[planet[0]];
      orbit.orbits.push(planet[1]);
    } else {
      orbit = {
        orbits: [
          planet[1]
        ]
      }
    }
    planets[planet[0]] = orbit;
  }
  return planets;
}

const calculateTotalWeight = function (planets, start, weight) {
  if (planets[start]) {
    return planets[start].orbits
      .map(orbit => calculateTotalWeight(planets, orbit, (weight + 1)))
      .reduce((prev, curr) => prev + curr) + weight;
  } else {
    return weight;
  }
}

const findPathToGoal = function (planets, start, goal) {
  if (start === goal) {
    return goal;
  } else if (planets[start]) {
    let route = planets[start].orbits
      .map(orbit => findPathToGoal(planets, orbit, goal))
      .filter(x => x != null);
    route = [].concat.apply([], route);
    if (route.includes(goal)) {
      route.push(start);
    }
    return route.length > 0 ? route : null;
  } else {
    return null;
  }
}

const calculateWeightToGoal = function (planets, start, goal, weight) {
  if (start === goal) {
    return weight - 1;
  } else if (planets[start]) {
    return planets[start].orbits
      .map(orbit => calculateWeightToGoal(planets, orbit, goal, (weight + 1)))
      .reduce((prev, curr) => prev + curr);
  } else {
    return 0;
  }
}

const findConnectingPlanet = (sanPath, youPath) => {
  let reduce = 1;
  while (true) {
    if (sanPath[sanPath.length - reduce] != youPath[youPath.length - reduce]) {
      return sanPath[sanPath.length - reduce + 1];
    }

    reduce++;
  }
}

exports.run = () => {
  let input = utils.getInput('2019', 'day06', '\r\n');

  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;