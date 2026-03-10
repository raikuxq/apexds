# swapArrayItems

## Description
The `swapArrayItems` function swaps two elements in an array at specified indices. It performs the swap in-place and does nothing if the indices are the same.

## Usage
```typescript
import { swapArrayItems } from "@apexds/core";

const array = [2, 3, 5];
swapArrayItems(array, 1, 2);
console.log(array); // Output: [2, 5, 3]
```

## Parameters
- `arr`: `Array<T>` - The array containing the elements to swap.
- `leftIndex`: `number` - The index of the first element to swap.
- `rightIndex`: `number` - The index of the second element to swap.

## Returns
This function does not return a value (void). It modifies the array in-place.

## Examples

```typescript
// Example 1: Basic swapping
const numbers = [1, 2, 3, 4, 5];
swapArrayItems(numbers, 0, 4);
console.log(numbers); // [5, 2, 3, 4, 1]

// Example 2: Swapping adjacent elements
const letters = ['a', 'b', 'c', 'd'];
swapArrayItems(letters, 1, 2);
console.log(letters); // ['a', 'c', 'b', 'd']

// Example 3: No change when indices are the same
const colors = ['red', 'green', 'blue'];
swapArrayItems(colors, 1, 1); // No effect
console.log(colors); // ['red', 'green', 'blue']

// Example 4: Generic type usage
const mixed = [1, 'hello', true, 42];
swapArrayItems(mixed, 0, 3);
console.log(mixed); // [42, 'hello', true, 1]
```

## Notes
- The function uses a temporary variable to perform the swap.
- It includes a check to avoid unnecessary operations when swapping an element with itself.
- The function is generic and works with arrays of any type.
- No bounds checking is performed - ensure indices are valid before calling.
- This is a fundamental utility function commonly used in sorting algorithms.