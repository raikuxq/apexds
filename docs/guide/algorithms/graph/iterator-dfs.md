# Graph iterator depth-first

Depth-first search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at
the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible
along each branch before backtracking.

Read full: [wiki/depth-first_search](https://en.wikipedia.org/wiki/Depth-first_search)

### Import

```ts
import {GraphIteratorDFS} from "@apexds/core";
```

### API reference

API: [/api/algorithms/graph/iterator-dfs](/api/algorithms/graph/iterator-dfs)

### Example usage

```ts
import {Graph} from "@apexds/core";
import {GraphIteratorDFS} from "@apexds/core";

const graph = new Graph<string>();
const iterator = new GraphIteratorDFS(graph);

iterator.initIterator();

while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
        break;
    }
}

const path = iterator.getPath(from, to);
```
