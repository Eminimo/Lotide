// without.js

// Function to compare arrays for equality
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Function to assert equality of arrays and log the result
const assertArraysEqual = function (arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  if (isEqual) {
    console.log("Arrays are equal!");
  } else {
    console.log("Arrays are NOT equal!");
  }
};

// Function to return a subset of a given array, removing unwanted elements
const without = function (source, itemsToRemove) {
  return source.filter(item => !itemsToRemove.includes(item));
};

// Test cases
const words = ["hello", "world", "lighthouse"];

// Test case 1: without([1, 2, 3], [1]) should return [2, 3]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

// Test case 2: without(["1", "2", "3"], [1, 2, "3"]) should return ["1", "2"]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// Test case 3: without(words, ["lighthouse"]) should not modify the original array
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

