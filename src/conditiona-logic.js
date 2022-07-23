const R = require('ramda');
const { ifElse, when, unless, cond, equals, always, multiply } = R;

module.exports.logAccess = ifElse(
  equals(true),
  always('Access granted'),
  always('Access denied')
);
const isEven = (val) => val % 2 == 0;

module.exports.when = when(isEven, multiply(2));

module.exports.unless = unless(isEven, multiply(2));

module.exports.findAnimal = cond([
  [equals('lion'), always('Africa and India')],
  [equals('tiger'), always('China, Russia, India, Vietnam, and many more')],
  [equals('hyena'), always('African Savannah')],
  [equals('grizzly bear'), always('North America')],
  [always(true), always('Not sure, try Googling it!')],
]);
