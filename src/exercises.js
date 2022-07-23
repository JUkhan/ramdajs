const R = require('ramda');

const { sum, pluck, pipe } = R;

const toUSD = (amount) =>
  amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

module.exports.getTotalPrice = pipe(pluck('price'), sum, toUSD);

module.exports.getCheapestItem = pipe(
  R.sortBy(R.prop('price')),
  R.head,
  R.prop('name')
);

module.exports.getTop3MealsFor = pipe(
  (price, menu) => R.filter(R.propSatisfies(R.gte(price), 'price'), menu),
  R.sort(R.descend(R.prop('rating'))),
  R.take(3)
);

module.exports.getMedianPaycheck = pipe(
  //R.map(R.prop('salary')),
  R.pluck('salary'),
  R.filter(R.lte(100000)),
  R.median,
  R.divide(R.__, 12),
  toUSD
);

module.exports.getCreditScoreRatings = R.map(
  R.cond([
    [R.lte(800), (score) => `${score} is excellent`],
    [R.lte(700), (score) => `${score} is good`],
    [R.lte(650), (score) => `${score} is fair`],
    [R.gte(649), (score) => `${score} is poor`],
  ])
);
const favoriteFlavor = R.lensPath([
  'interests',
  'foods',
  'sweets',
  'iceCream',
  'favoriteFlavor',
]);
module.exports.getFavorites = R.map(R.view(favoriteFlavor));
const emphasize = pipe(R.toUpper, R.concat(R.__, ' IS A GREAT FLAVOR'));

module.exports.emphasizeFlavors = R.pipe(
  R.map(R.over(favoriteFlavor, emphasize)),
  R.map(R.view(favoriteFlavor))
);
