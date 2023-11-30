// FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual'); // Assuming assertEqual is in the parent directory

const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should have 3 elements

// Additional Test Cases
assertEqual(JSON.stringify(tail(["Hello", "Lighthouse"])), JSON.stringify(["Lighthouse"]));

assertEqual(JSON.stringify(tail(["Solo"])), JSON.stringify([]));

// Add more test cases if needed

