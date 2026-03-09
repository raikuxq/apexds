# Selection sorting algorithm

In computer science, selection sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity, which
makes it inefficient on large lists, and generally performs worse than the similar insertion sort. SELECTION sort is
noted for its simplicity and has performance advantages over more complicated algorithms in certain situations,
particularly where auxiliary memory is limited.

Read full: [wiki/selection_sort](https://en.wikipedia.org/wiki/Selection_sort)

### Time complexity

Best: `O(n^2)  `

Avg: `O(n^2)  `

Worst: `O(n^2)`

### Memory complexity

Worst case: `O(1)`

### Import

```ts
import {selectionSort} from "@apexds/core";
```

### API reference

Sort API: [/api/algorithms/sort/selection](/api/algorithms/sort/selection)

### Example usage

```ts
import {selectionSort} from "@apexds/core";

selectionSort([-1, 3, -2, 1, 2, 0, -3]); // [-3, -2, -1, 0, 1, 2, 3]
```
