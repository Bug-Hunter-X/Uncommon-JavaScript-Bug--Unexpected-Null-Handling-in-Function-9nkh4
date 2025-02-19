function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw error for nulls
  }
  return a + b; // Normal addition
}

// Or using optional chaining and nullish coalescing:

function foo2(a, b) {
  const numA = a ?? 0; // Use 0 if a is null or undefined
  const numB = b ?? 0; // Use 0 if b is null or undefined
  return numA + numB;
}

console.log(foo2(1, 2)); // Output: 3
console.log(foo2(null, 2)); // Output: 2
console.log(foo2(1, null)); // Output: 1
console.log(foo2(null, null)); // Output: 0
console.log(foo(1,2)); // Throws an error
console.log(foo(null,2)); // Throws an error