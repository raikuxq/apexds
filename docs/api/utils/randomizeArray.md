# randomizeArray

## Description
The `randomizeArray` function generates a random array of specified length filled with random integers. Each element is a random number between 0 and the specified maximum value (inclusive).

## Usage
```typescript
import { randomizeArray } from "@apexds/core";

const randomArr = randomizeArray(5, 10);
console.log(randomArr); // Output: array of 5 random numbers between 0 and 10
```

## Parameters
- `length`: number - The length of the array to generate.
- `max`: number - The maximum value for random numbers (inclusive).

## Returns
Returns a new array of the specified length filled with random integers from 0 to `max` (inclusive).

## Examples

```typescript
// Example 1: Basic usage
const arr1 = randomizeArray(3, 5);
console.log(arr1); // e.g., [2, 5, 1]

// Example 2: Larger array with higher values
const arr2 = randomizeArray(10, 100);
console.log(arr2); // e.g., [42, 17, 89, 3, 65, 28, 91, 54, 7, 36]

// Example 3: Array with maximum value of 1 (binary-like)
const binaryArr = randomizeArray(8, 1);
console.log(binaryArr); // e.g., [1, 0, 1, 1, 0, 0, 1, 0]

// Example 4: Single element array
const single = randomizeArray(1, 50);
console.log(single); // e.g., [23]

// Example 5: Zero maximum value
const zeros = randomizeArray(5, 0);
console.log(zeros); // [0, 0, 0, 0, 0]
```

## Notes
- The function uses `Math.random()` to generate random values.
- All generated numbers are integers (using `Math.round()`).
- The range is from 0 to `max` inclusive.
- Each call produces a different random array (unless the same random seed is used).
- The implementation uses `Array.fill()` and `Array.map()` for concise code.
- This function is useful for testing algorithms with random data.