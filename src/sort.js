const R = require('ramda');
const { sort, sortBy, sortWith, ascend, prop } = R;

const nums = [3, 2, 4, 1];

const people = [
  {
    name: 'Bobo',
    age: 25,
  },
  {
    name: 'Cam',
    age: 25,
  },
  {
    name: 'Al',
    age: 29,
  },
];

module.exports.sort = sort((a, b) => a - b, nums);

module.exports.sortBy = sortBy(Math.abs, [-100, -50, 1, 0]);

module.exports.sortWith = sortWith(
  [ascend(prop('age')), ascend(prop('name'))],
  people
);
