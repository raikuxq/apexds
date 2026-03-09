# Priority Queue

A Priority Queue is an abstract data type where each element has a "priority" associated with it. Elements with higher priority are served before elements with lower priority. This implementation is based on a Binary Heap, ensuring efficient operations.

## Key Features

- **Min-Heap Based**: Uses BinaryHeap as the underlying data structure
- **Priority Ordering**: Lower priority numbers indicate higher priority (e.g., priority 1 is higher than priority 5)
- **Efficient Operations**: O(log n) insertion and extraction
- **Generic Support**: Works with any data type

## Time Complexity

| Operation | Time Complexity |
|-----------|----------------|
| Enqueue | O(log n) |
| Dequeue | O(log n) |
| Peek | O(1) |
| Size | O(1) |

## Usage

### Basic Usage

```ts
// Create a priority queue
const pq = new PriorityQueue<string>();

// Add elements with priorities
pq.enqueue("Task A", 3); // Lower priority
pq.enqueue("Task B", 1); // Higher priority
pq.enqueue("Task C", 2); // Medium priority

// Dequeue respects priority order
console.log(pq.dequeue()); // "Task B" (priority 1)
console.log(pq.dequeue()); // "Task C" (priority 2)
console.log(pq.dequeue()); // "Task A" (priority 3)
```

### Real-world Example: Task Scheduler

```ts
// Model tasks with priorities
const taskQueue = new PriorityQueue<{id: number, name: string}>();

taskQueue.enqueue({id: 1, name: "Send email"}, 2);
taskQueue.enqueue({id: 2, name: "Fix critical bug"}, 1);
taskQueue.enqueue({id: 3, name: "Write documentation"}, 3);

class TaskProcessor {
    processNext() {
        if (!taskQueue.isEmpty()) {
            const task = taskQueue.dequeue();
            console.log(`Processing task: ${task.name} (ID: ${task.id})`);
            // Process the task...
        }
    }
}
```

## Methods

### `constructor()`

Creates a new PriorityQueue instance with default min-heap behavior.

### `enqueue(value: T, priority: number): void`

Adds an element to the queue with the specified priority.

| Parameter | Type | Description |
|-----------|------|-------------|
| value | T | The data to store in the queue |
| priority | number | The priority level (lower number = higher priority) |

### `dequeue(): T`

Removes and returns the element with the highest priority (lowest priority number).

@throws {CollectionIsEmptyException} If the queue is empty.

### `peek(): T`

Returns the element with the highest priority without removing it.

@throws {CollectionIsEmptyException} If the queue is empty.

### `isEmpty(): boolean`

Returns true if the queue contains no elements.

### `size`

Returns the current number of elements in the queue.

### `clear(): void`

Removes all elements from the queue.

## Implementation Details

The `PriorityQueue` wraps a `BinaryHeap<PriorityQueueItem<T>>`, where `PriorityQueueItem` is an interface containing:

```ts
interface PriorityQueueItem<T> {
    value: T;
    priority: number;
}
```
The underlying `BinaryHeap` uses a comparator that compares items based on their priority property, ensuring that items with lower priority numbers (higher priority) are at the root of the heap.

