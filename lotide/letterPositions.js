// letterPositions.js

// Copy/paste your assertArraysEqual and eqArrays functions here

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Skip spaces
    if (char !== ' ') {
      // If the character is not already in the results object, create an empty array
      if (!results[char]) {
        results[char] = [];
      }

      // Push the index to the array for the current character
      results[char].push(i);
    }
  }

  return results;
};

// Test again
assertArraysEqual(letterPositions("hello").e, [1]);

