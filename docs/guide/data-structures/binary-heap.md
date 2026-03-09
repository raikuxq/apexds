# Binary Heap

A Binary Heap is a complete binary tree that satisfies the heap property. This implementation uses a min-heap structure where the parent node is always less than or equal to its children, making it efficient for priority queue operations.

## Key Features

- **Complete Binary Tree**: All levels are fully filled except possibly the last level, which is filled from left to right
- **Heap Property**: Parent nodes are always smaller than or equal to child nodes (min-heap)
- **Array-based Storage**: Uses an array to represent the binary tree for memory efficiency
- **Custom Comparators**: Supports custom comparison functions for complex data types

## Time Complexity

| Operation | Time Complexity |
|-----------|----------------|
| Insert | O(log n) |
| Extract Min | O(log n) |
| Peek | O(1) |
| Size | O(1) |

## Usage

### Basic Usage

```ts
// Create a min-heap for numbers
const heap = new BinaryHeap<number>();

heap.insert(5);
heap.insert(2);
heap.insert(8);
heap.insert(1);

console.log(heap.peek()); // 1
console.log(heap.extractMin()); // 1
console.log(heap.extractMin()); // 2
```

### Custom Comparator

```ts
// Create a heap with custom comparison logic
const heap = new BinaryHeap<string>((a, b) => a.length - b.length);

heap.insert("hello");
heap.insert("hi");
heap.insert("hey");

console.log(heap.extractMin()); // "hi" (shortest string)
```

## Methods

### `constructor(comparator?)`

Creates a new BinaryHeap instance.

| Parameter | Type | Description |
|-----------|------|-------------|
| comparator | `(a: T, b: T) => number` | Optional function to determine element priority. Returns negative if a < b, positive if a > b, zero if equal. |

### `insert(value: T): void`

Adds a new value to the heap and restores the heap property.

### `extractMin(): T`

Removes and returns the minimum element (root) from the heap.

@throws {CollectionIsEmptyException} If the heap is empty.

### `peek(): T`

Returns the minimum element without removing it.

@throws {CollectionIsEmptyException} If the heap is empty.

### `isEmpty(): boolean`

Returns true if the heap contains no elements.

### `size`

Returns the current number of elements in the heap.

## Implementation Details

The BinaryHeap uses an array to store elements, where for any element at index `i`:

- Parent is at index `Math.floor((i-1)/2)`
- Left child is at index `2*i + 1`
- Right child is at index `2*i + 2`

When inserting, the new element is added at the end and "bubbled up" by comparing with its parent until the heap property is restored. When extracting the minimum, the root is replaced with the last element, which is then "bubbled down" by comparing with its children until the heap property is restored.