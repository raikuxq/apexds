# Memoization util function

Memoization is an optimization technique used primarily to speed up computer programs by storing the results of
expensive
function calls and returning the cached result when the same inputs occur again

Read full: [wiki/memoization](https://en.wikipedia.org/wiki/Memoization)

### Import

```ts
import {memoize} from "@apexds/core/lib/exports/algorithms";

const memoizedFn = memoize(fn);
```

### API reference

Memoize API: [/api/algorithms/memoize](/api/algorithms/memoize)

### Example usage

```ts
const memoizedFactorial: FnToMemoize<number, number> = memoize(
    (n: number) => {
        return n > 1 ? n * memoizedFactorial(n - 1) : n;
    }
);
```
