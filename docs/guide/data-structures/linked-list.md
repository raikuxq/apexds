# Linked List

In computer science, a linked list is a linear collection of data elements whose order is not given by their physical
placement in memory. Instead, each element points to the next.

It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form,
each node contains: data, and a reference (in other words, a link) to the next node in the sequence.

Read full: [wiki/linked_list](https://en.wikipedia.org/wiki/Linked_list)

## Difference between singly-linked and doubly-linked lists

#### Doubly-linked list

In a 'doubly linked list', each node contains, besides the next-node link, a second link field pointing to the '
previous' node in the sequence. The two links may be called 'forward('s') and 'backwards', or 'next' and 'prev'('
previous').

#### Singly-linked-list

Singly linked lists contain nodes which have a data field as well as 'next' field, which points to the next node in line
of nodes. Operations that can be performed on singly linked lists include insertion, deletion and traversal.

## Import

```ts
import {SingleLinkedList, DoubleLinkedList} from "@apexds/core";
```

## API reference

Linked List API: [/api/data-structures/linked-list](/api/data-structures/linked-list)

## Example linked list usage

```ts
import {DoubleLinkedList} from "@apexds/core";

const list = new LinkedList<string>();

list.push("John");
list.push("Mary");
list.push("Kate");

list.peek(); // John
list.pop(); // John
list.peek(); // Mary
list.has("John"); // false
```

## Example iterator usage

```ts
import {IterableDoubleLinkedList} from "@apexds/core";

const list = new IterableDoubleLinkedList<number>();
linkedList.pushFromArray([10, 20, 30]);

const iterator = linkedList.iterator(0);

iterator.current(); // 10
iterator.hasNext(); // true
iterator.next(); // 20
iterator.next(); // 30
iterator.current(); // 30
iterator.hasNext(); // false
iterator.hasPrev(); // true
iterator.prev(); // 20
iterator.prev(); // 10
iterator.hasPrev(); // false
```
