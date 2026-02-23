# Binary Search Tree

## Difference between Binary Search Tree and Randomized BST implementations

#### Binary search tree

In computer science, a binary search tree (BST), also called an ordered or sorted binary tree, is a rooted binary tree
data structure with the key of each internal node being greater than all the keys in the respective node's left subtree
and less than the ones in its right subtree. The time complexity of operations on the binary search tree is directly
proportional to the height of the tree.

Read full: [wiki/binary_search_tree](https://en.wikipedia.org/wiki/Binary_search_tree)

#### Randomized binary search tree

In computer science and probability theory, a random binary tree is a binary tree selected at random from some
probability distribution on binary trees.

Read full: [wiki/randomized_bst](https://en.wikipedia.org/wiki/Random_binary_tree)

## Import

```ts
import {BinarySearchTree, RandBinarySearchTree} from "@apexds/core/lib/exports/data-structures";
```

## API reference

BST API: [/api/data-structures/binary-tree](/api/data-structures/binary-tree)

## Example usage

```ts
import {BinarySearchTree} from "@apexds/core/lib/exports/data-structures";
import {EnumTreeTraversalType} from "@apexds/core/lib/exports/types";

const tree: IBinaryTree<number> = new BinarySearchTree();

tree.insert(5);
tree.insert(12);
tree.insert(7);
tree.insert(20);

tree.max(); // 20
tree.min(); // 5
tree.traverse(EnumTreeTraversalType.IN_ORDER); // [5,7,12,20]

tree.has(20); // true
tree.delete(20);
tree.has(20); // false

```
