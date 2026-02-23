# Quicksort algorithm

Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the
other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason,
it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively. This can be done
in-place, requiring small additional amounts of memory to perform the sorting.

Read full: [wiki/selection_sort](https://en.wikipedia.org/wiki/Selection_sort)

### Time complexity

Best: `O(n * log(n))`

Avg: `O(n * log(n))`

Worst: `O(n^2)`

### Memory complexity

Worst: `O(1)`

### Import

```ts
import {quickSort} from "@apexds/core/lib/exports/algorithms";
```

### API reference

Sort API: [/api/algorithms/sort/quick](/api/algorithms/sort/quick)

### Example usage

```ts
import {quickSort} from "@apexds/core/lib/exports/algorithms";

quickSort([-1, 3, -2, 1, 2, 0, -3]); // [-3, -2, -1, 0, 1, 2, 3]
```
