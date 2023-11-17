const eqObjects = function(object1, object2) {
  // Implement your eqObjects function here (assuming you've already done this)
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Call the function with your test cases
// For example:
// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });

