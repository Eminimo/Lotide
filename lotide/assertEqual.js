// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // TEST SCENARIOS
  
  // Comparing identical strings
  assertEqual("hello", "hello"); // ✅✅✅ Assertion Passed: hello === hello
  
  // Comparing non-identical strings
  assertEqual("abc", "def"); // 🛑🛑🛑 Assertion Failed: abc !== def
  
  // Comparing identical numbers
  assertEqual(42, 42); // ✅✅✅ Assertion Passed: 42 === 42
  
  // Comparing non-identical numbers
  assertEqual(5, 10); // 🛑🛑🛑 Assertion Failed: 5 !== 10
  