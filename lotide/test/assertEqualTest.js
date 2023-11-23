// head.js

const assertEqual = require('./assertEqual'); // Require assertEqual from the external module

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
