# SingleLinkedList\<T> and DoubleLinkedList\<T>

Guide: [/guide/data-structures/linked-list](/guide/data-structures/linked-list)

## Generic Types

`T` - type of collection elements

## Implements interfaces

### [`ILinkedList`](/api/types/interfaces#ILinkedList)

### [`ILinearStorage`](/api/types/interfaces#ILinearStorage)

### [`ILinearStorageRA`](/api/types/interfaces#ILinearStorageRA)

## Methods

### `constructor(capacity?: number): IlinkedList<T>`

Creates empty instance

###### Params:

| Name     | Type     | Required | Default          | Description                                                |
|----------|----------|----------|------------------|------------------------------------------------------------|
| capacity | `number` | -        | Number.MAX_VALUE | Max capacity of list <br>(0 < capacity < Number.MAX_VALUE) |

<br><br>

### `peek(): T`

Returns value from top of list

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when list is empty

<br><br>

### `pop(): T`

Removes item from list end (head element) and returns its value

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when list is empty

<br><br>

### `push(value: T): void`

Add value to top of list

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

###### Throws: [`CollectionIsFullException`](/api/exceptions) when there is no space available

<br><br>

### `has(value: T): boolean`

Check is list has given value

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

<br><br>

### `peekFromStart(): T`

Get first element of list (tail)

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when list is empty

<br><br>

### `peekByIndex(index: number): T`

Get element by given index from list start

###### Params:

| Name  | Type     | Required | Default | Description                   |
|-------|----------|----------|---------|-------------------------------|
| index | `number` | +        | -       | 0 <= index <= list.length - 1 |

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when list is empty

###### Throws: [`IndexOutOfBoundsException`](/api/exceptions) when index is out of range

<br><br>

### `unshift(value: T): void`

Add new node into list start (node becomes tail)

###### Throws: [`CollectionIsFullException`](/api/exceptions) when there is no space available

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

<br><br>

### `pushFromIndex(value: T, fromIndex: number): void`

Add new node into list by index

###### Params:

| Name      | Type     | Required | Default | Description                   |
|-----------|----------|----------|---------|-------------------------------|
| value     | `T`      | +        | -       |                               |
| fromIndex | `number` | +        | -       | 0 <= index <= list.length - 1 |

###### Throws: [`CollectionIsFullException`](/api/exceptions) when there is no space available

###### Throws: [`IndexOutOfBoundsException`](/api/exceptions) when index is out of range

<br><br>

### `shift(): T`

Remove node from list start (tail element) and get its value

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when list is empty

<br><br>

### `deleteFromIndex(fromIndex: number): T`

Remove node from list by index

###### Params:

| Name      | Type     | Required | Default | Description                   |
|-----------|----------|----------|---------|-------------------------------|
| fromIndex | `number` | +        | -       | 0 <= index <= list.length - 1 |

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when list is empty

<br><br>

### `pushFromArray(elements: Array<T>): void`

Add elements from array collection in order from start

###### Params:

| Name     | Type       | Required | Default | Description |
|----------|------------|----------|---------|-------------|
| elements | `Array<T>` | +        | -       |             |

###### Throws: [`CollectionIsFullException`](/api/exceptions) when there is no space available

<br><br>

### `getAsArray(): Array<T>`

Convert linked list into array collection in order from start

###### Params:

| Name     | Type       | Required | Default | Description |
|----------|------------|----------|---------|-------------|
| elements | `Array<T>` | +        | -       |             |

<br><br>

### `clear(): void`

Remove all elements from list

<br><br>

### `isEmpty(): boolean`

Check is list has any value, returns true if list is empty

<br><br>

### `isFull(): boolean`

Check is list length exceed max capacity

<br><br>

### `length(): number`

Get list size

<br><br>

<br><br>













# IterableSingleLinkedList\<T>

Guide: [/guide/data-structures/linked-list](/guide/data-structures/linked-list)

## Generic Types

`T` - type of collection elements

## Extends
#### Extends `SingleLinkedList`

## Implements interfaces

### [`ILinkedList`](/api/types/interfaces#ILinkedList)

### [`ILinearStorage`](/api/types/interfaces#ILinearStorage)

### [`ILinearStorageRA`](/api/types/interfaces#ILinearStorageRA)

### [`IIterable`](/api/types/interfaces#IIterable)

## Methods

### `constructor(capacity?: number): IlinkedList<T>`

Creates empty instance

###### Params:

| Name     | Type     | Required | Default          | Description                                                |
|----------|----------|----------|------------------|------------------------------------------------------------|
| capacity | `number` | -        | Number.MAX_VALUE | Max capacity of list <br>(0 < capacity < Number.MAX_VALUE) |

<br><br>

### `iterator(fromIndex?: number): IIterator<T>`

###### Params:

| Name      | Type     | Required | Default | Description                   |
|-----------|----------|----------|---------|-------------------------------|
| fromIndex | `number` | +        | -       | 0 <= index <= list.length - 1 |

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when list is empty

###### Throws: [`IndexOutOfBoundsException`](/api/exceptions) when index is out of range

<br><br>

#### Methods

##### `current(): T`

Get current iterator element data
<br><br>

##### `next(): T`

Move to next element and get its data

###### Throws [`IllegalStateException`](/api/exceptions) when there is no next element

<br><br>

##### `hasNext(): boolean`

Check is there next element available

<br><br>







# IterableDoubleLinkedList\<T>

Guide: [/guide/data-structures/linked-list](/guide/data-structures/linked-list)

## Generic Types

`T` - type of collection elements

## Extends
#### Extends `DoubleLinkedList`

## Implements interfaces

### [`ILinkedList`](/api/types/interfaces#ILinkedList)

### [`ILinearStorage`](/api/types/interfaces#ILinearStorage)

### [`ILinearStorageRA`](/api/types/interfaces#ILinearStorageRA)

### [`IIterable`](/api/types/interfaces#IIterable)

### [`IBiDirectIterable`](/api/types/interfaces#IBiDirectIterable)

## Methods

### `constructor(capacity?: number): IlinkedList<T>`

Creates empty instance

###### Params:

| Name     | Type     | Required | Default          | Description                                                |
|----------|----------|----------|------------------|------------------------------------------------------------|
| capacity | `number` | -        | Number.MAX_VALUE | Max capacity of list <br>(0 < capacity < Number.MAX_VALUE) |

<br><br>

### `iterator(fromIndex?: number): IBiDirectIterator<T>`

###### Params:

| Name      | Type     | Required | Default | Description                   |
|-----------|----------|----------|---------|-------------------------------|
| fromIndex | `number` | +        | -       | 0 <= index <= list.length - 1 |

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when list is empty

###### Throws: [`IndexOutOfBoundsException`](/api/exceptions) when index is out of range

<br><br>

#### Methods

##### `current(): T`

Get current iterator element data
<br><br>

##### `next(): T`

Move to next element and get its data

###### Throws [`IllegalStateException`](/api/exceptions) when there is no next element

<br><br>

##### `hasNext(): boolean`

Check is there next element available
<br><br>

##### `prev(): T`

Move to prev element and get its data

###### Throws [`IllegalStateException`](/api/exceptions) when there is no prev element

<br><br>

##### `hasPrev(): boolean`

Check is there next element available

<br><br>
