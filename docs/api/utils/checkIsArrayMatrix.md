# checkIsArrayMatrix

## Description
The `checkIsArrayMatrix` function verifies whether a given 2D array is a valid matrix by ensuring all rows have the same length. An empty array is considered invalid.

## Usage
```typescript
import { checkIsArrayMatrix } from "@apexds/core";

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const isValid = checkIsArrayMatrix(matrix);
console.log(isValid); // Output: true
```

## Parameters
- `array`: Array<Array<T>> - The 2D array to validate as a matrix.

## Returns
Returns `true` if the array is a valid matrix (all rows have the same length and array is not empty), `false` otherwise.

## Examples

```typescript
// Example 1: Valid matrix
const validMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(checkIsArrayMatrix(validMatrix)); // true

// Example 2: Invalid matrix (jagged array)
const invalidMatrix = [[1, 2], [3, 4, 5], [6, 7]];
console.log(checkIsArrayMatrix(invalidMatrix)); // false

// Example 3: Single row matrix
const singleRow = [[1, 2, 3, 4]];
console.log(checkIsArrayMatrix(singleRow)); // true

// Example 4: Empty array
const empty = [];
console.log(checkIsArrayMatrix(empty)); // false

// Example 5: Matrix with empty rows
const emptyRows = [[], [], []];
console.log(checkIsArrayMatrix(emptyRows)); // true (all rows have same length - 0)
```

## Notes
- The function returns `false` for empty arrays.
- It compares each row's length with the first row's length.
- Returns `true` for arrays where all rows have the same length, including zero-length rows.
- The time complexity is O(n) where n is the number of rows.
- This function is useful for validating input data before matrix operations.