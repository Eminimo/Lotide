// head.js

// Copy and paste the assertEqual function here
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the head function
const head = function(array) {
  // Check if the array is not empty
  if (array && array.length > 0) {
    return array[0]; // Return the first element
  }
  // Return undefined for empty array
  return undefined;
};

// Test Cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1); // Single-element array
assertEqual(head([]), undefined); // Empty array

