const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailResult = tail(words);
assertEqual(tailResult.length, 2); // The result should have length 2
assertEqual(tailResult[0], "Lighthouse"); // The first element should be "Lighthouse"
assertEqual(tailResult[1], "Labs"); // The second element should be "Labs"

// Additional Test Cases
assertEqual(JSON.stringify(tail(["Hello", "Lighthouse"])), JSON.stringify(["Lighthouse"])); // The result should be ["Lighthouse"]
assertEqual(JSON.stringify(tail(["Solo"])), JSON.stringify([])); // The result should be an empty array

// Add more test cases if needed

