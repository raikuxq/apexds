# Merge sorting algorithm

In computer science, merge sort (also commonly spelled as mergesort) is an efficient, general-purpose, and
comparison-based sorting algorithm.
Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and
output.
Merge sort is a divide-and-conquer algorithm

Read full: [wiki/merge_sort](https://en.wikipedia.org/wiki/Merge_sort)

### Time complexity

Best: `O(n * log(n))   `

Avg: `O(n * log(n))    `

Worst: `O(n * log(n))   `

### Memory complexity

Worst: `O(n)`

### Import

```ts
import {mergeSort} from "@apexds/core/lib/exports/algorithms";
```

### API reference

Sort API: [/api/algorithms/sort/merge](/api/algorithms/sort/merge)

### Example usage

```ts
import {mergeSort} from "@apexds/core/lib/exports/algorithms";

mergeSort([-1, 3, -2, 1, 2, 0, -3]); // [-3, -2, -1, 0, 1, 2, 3]
```
