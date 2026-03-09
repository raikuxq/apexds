# BinaryHeap\<T>

Guide: [/guide/data-structures/binary-heap](/guide/data-structures/binary-heap)

## Generic Types

`T` - type of collection elements

## Methods

### `constructor(comparator?: (a: T, b: T) => number): BinaryHeap<T>`

Creates a new BinaryHeap instance

###### Params:

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| comparator | `(a: T, b: T) => number` | - | Default comparator | Function to determine element priority. Returns negative if a < b, positive if a > b, zero if equal. |

<br><br>

### `isEmpty(): boolean`

Returns true if the heap contains no elements

<br><br>

### `peek(): T`

Retrieves the root element without removing it

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when heap is empty

<br><br>

### `insert(value: T): void`

Adds a new value and restores heap properties

###### Params:

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| value | `T` | + | - | The value to insert |

<br><br>

### `extractMin(): T`

Removes and returns the root element (minimum based on comparator)

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when heap is empty

<br><br>

### `[Symbol.iterator](): IterableIterator<T>`

Returns an iterator over the underlying array

<br><br>

### `size`

**Type:** `number`

Current number of elements in the heap

<br><br>