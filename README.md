# JavaScript: Unexpected Input Handling Bug

This repository demonstrates a common error in JavaScript related to input validation.  The `foo` function is intended to add 1 to a numeric input. However, it lacks proper validation for non-numeric inputs, causing an error when a non-numeric value (like a string) is passed as an argument. The solution demonstrates how to use type checking to gracefully handle such situations and prevent runtime errors.

## Bug
The `bug.js` file shows the problematic code.  The function does not correctly handle non-numeric input and will throw a TypeError when a string is passed.

## Solution
The `bugSolution.js` file provides a corrected version.  It includes checks to ensure the input is a number before performing the addition.