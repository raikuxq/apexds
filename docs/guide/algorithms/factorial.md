# Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less
than or equal to n.

Read full: [wiki/factorial](https://en.wikipedia.org/wiki/Factorial)

### Time complexity

`factorial`: O(n!)  
`memoizedFactorial`: O(n)

### Import

```ts
import {factorial, memoizedFactorial} from "@apexds/core";
```

### API reference

Factorial API: [/api/algorithms/factorial](/api/algorithms/factorial)

### Example usage

```ts
import {memoizedFactorial} from "@apexds/core";

memoizedFactorial(6); // 720
memoizedFactorial(10); // 3628800
```
