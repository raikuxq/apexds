# Insertion sorting algorithm

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.

Read full: [wiki/insertion_sort](https://en.wikipedia.org/wiki/insertion_sort)

### Time complexity

Best: `O(n)  `

Avg: `O(n^2)  `

Worst: `O(n^2)`

### Memory complexity

Worst : `O(1)`

### Import

```ts
import {insertionSort} from "@apexds/core/lib/exports/algorithms";
```

### API reference

Sort API: [/api/algorithms/sort/insertion](/api/algorithms/sort/insertion)

### Example usage

```ts
import {insertionSort} from "@apexds/core/lib/exports/algorithms";

insertionSort([-1, 3, -2, 1, 2, 0, -3]); // [-3, -2, -1, 0, 1, 2, 3]
```
