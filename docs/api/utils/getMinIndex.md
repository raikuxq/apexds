# getMinIndex

## Description
The `getMinIndex` function finds the index of the minimum value in an array. The `getMinIndexFromIndex` function finds the index of the minimum value in a subarray starting from a specified index.

## Usage

### getMinIndex
```typescript
import { getMinIndex } from "@apexds/core";

const array = [5, 2, 8, 1, 9];
const minIndex = getMinIndex(array);
console.log(minIndex); // Output: 3
```

### getMinIndexFromIndex
```typescript
import { getMinIndexFromIndex } from "@apexds/core";

const array = [5, 2, 8, 1, 9];
const minIndex = getMinIndexFromIndex(array, 2);
console.log(minIndex); // Output: 3
```

## Parameters

### getMinIndex
- `arr`: Array<number> - The input array to search for the minimum value.

### getMinIndexFromIndex
- `arr`: Array<number> - The input array to search for the minimum value.
- `fromIndex`: number - The starting index for the search.

## Returns

### getMinIndex
Returns the index of the minimum value in the array.

### getMinIndexFromIndex
Returns the index of the minimum value in the subarray starting from `fromIndex`.

## Examples

```typescript
// Example 1: Basic usage
const numbers = [10, 5, 8, 3, 6];
console.log(getMinIndex(numbers)); // 3

// Example 2: Using getMinIndexFromIndex
const values = [7, 9, 2, 4, 1, 8];
console.log(getMinIndexFromIndex(values, 2)); // 4 (minimum in [2, 4, 1, 8] is 1 at index 4)

// Example 3: Edge case - single element
const single = [42];
console.log(getMinIndex(single)); // 0
```

## Notes
- Both functions use zero-based indexing.
- If the array is empty, the behavior is undefined.
- The functions perform a linear search with O(n) time complexity.