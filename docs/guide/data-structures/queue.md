# Queue

In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the
addition of entities at one end of the sequence and the removal of entities from the other end of the sequence.

By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and
the end at which elements are removed is called the head or front of the queue, analogously to the words used when
people line up to wait for goods or services.

Read full: [wiki/queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))

## Import

```ts
import {Queue} from "@apexds/core";
```

## API reference

Queue API: [/api/data-structures/queue](/api/data-structures/queue)

## Example usage

```ts
import {Queue} from "@apexds/core";

const queue = new Queue<string>();

queue.push("John");
queue.push("Mary");
queue.push("Kate");

queue.peek(); // John
queue.pop(); // John
queue.peek(); // Mary
queue.has("John"); // false
```
