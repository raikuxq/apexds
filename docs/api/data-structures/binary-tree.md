# BinarySearchTree\<T>

Guide: [/guide/data-structures/binary-tree](/guide/data-structures/binary-tree)

## Generic Types

`T` - type of collection elements

## Implements interfaces

### [`IBinaryTree`](/api/types/interfaces#IBinaryTree)

## Methods

### `constructor(fnCompare?: number): Stack<T>`

Creates empty instance

###### Params:

| Name      | Type                               | Required | Default                 | Description                                                              |
|-----------|------------------------------------|----------|-------------------------|--------------------------------------------------------------------------|
| fnCompare | [`FnCompareTwo`](/api/types/types) | -        | `(a: T, b: T) => a > b` | Callback function that will be called for comparing LEFT and RIGHT nodes |

<br><br>

### `insert(value: T): void`

Add value to top of tree

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

###### Throws: [`IsAlreadyExistsException`](/api/exceptions)

<br><br>

### `has(value: T): boolean`

Check is tree has given value

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

<br><br>

### `delete(value: T): void`

Delete value from tree and restructure it

###### Throws: [`IsNotFoundException`](/api/exceptions) when node to delete was not found

<br><br>

### `subtree(value: T): IBinaryTree<T>`

Copy subtree from given root node

###### Params:

| Name  | Type | Required | Default | Description            |
|-------|------|----------|---------|------------------------|
| value | `T`  | +        | -       | Root node of copy tree |

<br><br>

### `max(): T`

Find maximum value in the tree

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when tree is empty

<br><br>

### `min(): T`

Find minimum value in the tree

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when tree is empty

<br><br>

### `traverse(type: EnumTreeTraversalType): Array<T>`

Convert a tree into array by using given traversing method

###### Params:

| Name | Type                                                                   | Required | Default | Description                |
|------|------------------------------------------------------------------------|----------|---------|----------------------------|
| type | [`EnumTreeTraversalType`](/api/types/enumerable#EnumTreeTraversalType) | +        | -       | preorder/inorder/postorder |

###### Throws: [`CollectionIsEmptyException`](/api/exceptions) when tree is empty

<br><br>

### `length(): number`

Get count of nodes in a tree
<br><br>

### `height(): number`

Get max length from all branches in a tree
<br><br>
