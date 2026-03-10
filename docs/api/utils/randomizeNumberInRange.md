# randomizeNumberInRange

## Description
The `randomizeNumberInRange` function generates a random integer within a specified range (inclusive of the minimum, exclusive of the maximum).

## Usage
```typescript
import { randomizeNumberInRange } from "@apexds/core";

const randomNum = randomizeNumberInRange(1, 10);
console.log(randomNum); // Output: random number between 1 and 9
```

## Parameters
- `min`: number - The minimum value of the range (inclusive).
- `max`: number - The maximum value of the range (exclusive).

## Returns
Returns a random integer between `min` (inclusive) and `max` (exclusive).

## Examples

```typescript
// Example 1: Basic usage
console.log(randomizeNumberInRange(1, 10)); // Random number from 1 to 9
console.log(randomizeNumberInRange(0, 100)); // Random number from 0 to 99

// Example 2: Generating dice rolls (1-6)
diceRoll = randomizeNumberInRange(1, 7);
console.log(diceRoll); // Random number from 1 to 6

// Example 3: Array indexing
const array = ['a', 'b', 'c', 'd', 'e'];
const randomIndex = randomizeNumberInRange(0, array.length);
console.log(array[randomIndex]); // Random element from the array

// Example 4: Negative ranges
console.log(randomizeNumberInRange(-5, 5)); // Random number from -5 to 4
```

## Notes
- The function uses `Math.random()` to generate random values.
- The range is half-open: [min, max), meaning min is included but max is excluded.
- To include the maximum value, add 1 to the max parameter.
- The function returns integers only (using `Math.floor`).
- The implementation uses the formula: `Math.floor(Math.random() * (max - min)) + min`.