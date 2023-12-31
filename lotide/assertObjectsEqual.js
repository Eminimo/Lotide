// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Example usage:
// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // This should pass
// assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2, c: '3' }); // This should fail
