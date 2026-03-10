# roundNumber

## Description
The `roundNumber` function rounds a number to a specified number of decimal places. By default, it rounds to 3 decimal places.

## Usage
```typescript
import { roundNumber } from "@apexds/core";

const value = 3.14159;
const rounded = roundNumber(value, 2);
console.log(rounded); // Output: 3.14
```

## Parameters
- `num`: number - The number to be rounded.
- `digits`: number (optional, default: 3) - The number of decimal places to round to.

## Returns
Returns the number rounded to the specified number of decimal places.

## Examples

```typescript
// Example 1: Basic rounding
console.log(roundNumber(3.14159)); // 3.142 (default 3 decimal places)
console.log(roundNumber(3.14159, 2)); // 3.14
console.log(roundNumber(3.14159, 4)); // 3.1416

// Example 2: Rounding whole numbers
console.log(roundNumber(42)); // 42
console.log(roundNumber(42.12345, 1)); // 42.1

// Example 3: Rounding to different precision levels
console.log(roundNumber(1.23456789, 0)); // 1
console.log(roundNumber(1.23456789, 6)); // 1.234568
```

## Notes
- The function uses the standard mathematical rounding rules (round half up).
- If `digits` is 0, the number is rounded to the nearest integer.
- The function handles negative numbers correctly.
- The implementation uses `Math.round(num * 10 ** digits) / 10 ** digits` for accurate rounding.