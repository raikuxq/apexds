# Bubble sorting algorithm

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps
them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

Read full: [wiki/bubble_sort](https://en.wikipedia.org/wiki/Bubble_sort)

### Time complexity

Best: `O(n) `

Avg: `O(n^2)  `

Worst: `O(n^2)`

### Memory complexity

Worst: `O(1)`

### Import

```ts
import {bubbleSort} from "@apexds/core/lib/exports/algorithms";
```

### API reference

Sort API: [/api/algorithms/sort/bubble](/api/algorithms/sort/bubble)

### Example usage

```ts
import {bubbleSort} from "@apexds/core/lib/exports/algorithms";

bubbleSort([-1, 3, -2, 1, 2, 0, -3]); // [-3, -2, -1, 0, 1, 2, 3]
```
