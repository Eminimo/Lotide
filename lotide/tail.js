// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!

// Additional Test Cases
assertEqual(JSON.stringify(tail(["Hello", "Lighthouse", "Labs"])), JSON.stringify(["Lighthouse", "Labs"]));
assertEqual(JSON.stringify(tail(["Solo"])), JSON.stringify([]));
assertEqual(JSON.stringify(tail([])), JSON.stringify([]));

// ESLint: No errors or warnings

