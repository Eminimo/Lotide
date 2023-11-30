const eqArrays = function(arr1, arr2) {
  // Copy your eqArrays function code here
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal!");
  } else {
    console.log("❌ Arrays are NOT equal!");
  }
};

// Call assertArraysEqual with sample arrays to visually verify its output
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

