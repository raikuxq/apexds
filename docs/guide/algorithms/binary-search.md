# Binary Search

Binary search algorithm is a search algorithm that finds the position of a target value within a sorted array.

Read full: [wiki/binary_search_algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm)

### Time complexity

O(log(n))

### Import

```ts
import {binarySearch} from "@apexds/core";
```

### API reference:

Binary search API: [/api/algorithms/binary-search](/api/algorithms/binary-search)

### Example usage

```ts
import {binarySearch} from "@apexds/core";

const arr = new Array(10).fill(undefined).map((item, index) => index + 1);

const foundElementIndex = binarySearch(arr, 5); // 4 (index is 4)
```
