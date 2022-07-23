const { sort, sortBy, sortWith } = require('./sort');
const { logAccess, when, unless, findAnimal } = require('./conditiona-logic');
const {
  getTotalPrice,
  getCheapestItem,
  getTop3MealsFor,
  getMedianPaycheck,
  getCreditScoreRatings,
  getFavorites,
  emphasizeFlavors,
} = require('./exercises');
const { cart } = require('./cart');
const { menu } = require('./menu');
const { employees, employees2 } = require('./employees');

function main() {
  console.log('SORTING:');
  console.log(sort);
  console.log(sortBy);
  console.log(sortWith);

  console.log('CONDITIONAL LOGIC:');
  console.log(logAccess(true));
  console.log(when(2));
  console.log(unless(2));
  console.log(findAnimal('lion'));

  console.log('EXERCISES:');
  console.log(getTotalPrice(cart));
  console.log(getCheapestItem(cart));
  console.log(getTop3MealsFor(20, menu));
  console.log(getMedianPaycheck(employees));
  console.log(getCreditScoreRatings([740, 550, 681, 805]));

  console.log('LENS:');
  console.log(getFavorites(employees2));
  console.log(emphasizeFlavors(employees2));
}

main();
