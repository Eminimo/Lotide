// test/headTest.js

const assertEqual = require('../assertEqual');

// TEST CODE for head function
// ... move the test code for head function here
// test/headTest.js

const assertEqual = require('../assertEqual'); // Require assertEqual from the external module
const head = require('../head'); // Require the head function from the external module

// TEST CODE for head function
// Example test
assertEqual(head([5, 6, 7]), 5); // ✅✅✅ Assertion Passed: 5 === 5

// Additional test cases
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // ✅✅✅ Assertion Passed: Hello === Hello
assertEqual(head([1]), 1); // ✅✅✅ Assertion Passed: 1 === 1 (Single-element array)
assertEqual(head([]), undefined); // ✅✅✅ Assertion Passed: undefined === undefined (Empty array)

