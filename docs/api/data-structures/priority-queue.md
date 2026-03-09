# PriorityQueue\<T>

Guide: [/guide/data-structures/priority-queue](/guide/data-structures/priority-queue)

## Generic Types

`T` - type of collection elements

## Methods

### `constructor(): PriorityQueue<T>`

Creates a new PriorityQueue instance with default min-heap behavior.

<br><br>

### `isEmpty(): boolean`

Returns true if the queue is empty.

<br><br>

### `enqueue(value: T, priority: number): void`

Adds an element to the queue with a specific priority.

###### Params:

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| value | `T` | + | - | The data to store. |
| priority | `number` | + | - | The priority level (lower value = higher priority). |

<br><br>

### `dequeue(): T`

Removes and returns the element with the highest priority (lowest priority number).

###### Throws: [`CollectionIsEmptyException`](/api/exceptions/state) when queue is empty

<br><br>

### `peek(): T`

Returns the highest priority element without removing it.

###### Throws: [`CollectionIsEmptyException`](/api/exceptions/state) when queue is empty

<br><br>

### `clear(): void`

Clears all elements from the queue.

<br><br>

### `size`

**Type:** `number`

Number of elements in the queue.

<br><br>