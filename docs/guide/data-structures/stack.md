# Stack

In computer science, a stack is an abstract data type that serves as a collection of elements, with
the order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out).

Considered as a linear data structure, or more abstractly a sequential collection, the push and pop operations occur
only at one end of the structure, referred to as the top of the stack.

Read full: [wiki/stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

## API reference

:::tip API Reference

Stack API: [/api/data-structures/stack](/api/data-structures/stack)
:::

## Import

```ts
import {Stack} from "@apexds/core/lib/exports/data-structures";
```

## Example usage

```ts
import {Stack} from "@apexds/core/lib/exports/data-structures";

const stack = new Stack<string>();

stack.push("John");
stack.push("Mary");
stack.push("Kate");

stack.peek(); // Kate
stack.pop(); // Kate
stack.peek(); // Mary
stack.has("John"); // true
```
