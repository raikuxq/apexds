# Matrix transpose

In linear algebra, the transpose of a matrix is an operator which flips a matrix over its diagonal; that is, it
switches the row and column indices of the matrix

Read full: [wiki/transpose](https://en.wikipedia.org/wiki/Transpose)

## Time complexity

O(n^2)

## Import

```ts
import {transposeMatrix} from "@apexds/core";
```

## API reference

Transpose matrix API: [/api/algorithms/transpose-matrix](/api/algorithms/transpose-matrix)

## Example usage

```ts
import {transposeMatrix} from "@apexds/core";

const srcMatrix = [
    [0, 1, 1],
    [0, 0, 1],
    [1, 0, 0],
];

const transposed = transposeMatrix(srcMatrix);
/*
    [0, 0, 1],
    [1, 0, 0],
    [1, 1, 0],
*/
```
