function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (typeof x !== 'number') {
    return NaN; // Handle non-numeric input gracefully
  } else if (isNaN(x)) {
    return NaN; //Handle NaN input
  }

  return x + 1;
}

console.log(foo(5)); // Output: 6
console.log(foo(null)); // Output: 0
console.log(foo('hello')); // Output: NaN
console.log(foo(NaN)); // Output: NaN