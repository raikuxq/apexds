# Graph iterator breadth-first

Breadth-first search is an algorithm for searching a tree data structure for a node that satisfies a given property. It
starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth
level.

Read full: [wiki/breadth-first_search](https://en.wikipedia.org/wiki/Breadth-first_search)

### Import

```ts
import {GraphIteratorBFS} from "@apexds/core/lib/exports/algorithms";
```

### API reference

API: [/api/algorithms/graph/iterator-dfs](/api/algorithms/graph/iterator-dfs)

### Example usage

```ts
import {Graph} from "@apexds/core/lib/exports/data-structures";
import {GraphIteratorBFS} from "@apexds/core/lib/exports/algorithms";

const graph = new Graph<string>();
const iterator = new GraphIteratorBFS(graph);

iterator.initIterator();

while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
        break;
    }
}

const path = iterator.getPath(from, to);
```
