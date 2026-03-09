# Queue\<T>

Guide: [/guide/data-structures/queue](/guide/data-structures/queue)

## Generic Types

`T` - type of collection elements

## Implements interfaces

### [`ILinearStorage`](/api/types/interfaces#ILinearStorage)

## Methods

### `constructor(capacity?: number): Queue<T>`

Creates empty instance

###### Params:

| Name     | Type     | Required | Default          | Description                      |
|----------|----------|----------|------------------|----------------------------------|
| capacity | `number` | -        | Number.MAX_VALUE | Max capacity of queue <br/>(> 0) |

<br><br>

### `peek(): T`

Returns value from top of queue

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when queue is empty

<br><br>

### `pop(): T`

Returns value from top of queue and removes it

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when queue is empty

<br><br>

### `push(value: T): void`

Add value to top of queue

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

###### Throws: [`CollectionIsFullException`](/api/exceptions) when there is no space available

<br><br>

### `has(value: T): boolean`

Check is queue has given value

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

<br><br>

### `clear(): void`

Remove all elements from queue

<br><br>

### `isEmpty(): boolean`

Check is queue has any value, returns true if queue is empty

<br><br>

### `isFull(): boolean`

Check is queue length exceed max capacity

<br><br>

### `length(): number`

Get queue size
