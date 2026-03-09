# Stack\<T>

Guide: [/guide/data-structures/stack](/guide/data-structures/stack)

## Generic Types

`T` - type of collection elements

## Implements interfaces

### [`ILinearStorage`](/api/types/interfaces#ILinearStorage)

## Methods

### `constructor(capacity?: number): Stack<T>`

Creates empty instance

###### Params:

| Name     | Type     | Required | Default          | Description                                                  |
|----------|----------|----------|------------------|--------------------------------------------------------------|
| capacity | `number` | -        | Number.MAX_VALUE | Max capacity of stack <br/>(0 < capacity < NUMBER.MAX_VALUE) |

<br><br>

### `peek(): T`

Returns value from top of stack

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when stack is empty

<br><br>

### `pop(): T`

Returns value from top of stack and removes it

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when stack is empty

<br><br>

### `push(value: T): void`

Add value to top of stack

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

###### Throws: [`CollectionIsFullException`](/api/exceptions) when there is no space available

<br><br>

### `has(value: T): boolean`

Check is stack has given value

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

<br><br>

### `clear(): void`

Remove all elements from stack

<br><br>

### `isEmpty(): boolean`

Check is stack has any value, returns true if stack is empty

<br><br>

### `isFull(): boolean`

Check is stack length exceed max capacity (>=)

<br><br>

### `length(): number`

Get stack size
