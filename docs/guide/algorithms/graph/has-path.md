# Has path algorithm

Check if graph has a path between two vertices

### Import

```ts
import {hasPath} from "@apexds/core/lib/exports/algorithms";
```

### API reference

API: [/api/algorithms/graph/has-path](/api/algorithms/graph/has-path)

### Example usage

```ts
import {hasPath} from "@apexds/core/lib/exports/algorithms";
import {Graph} from "@apexds/core/lib/exports/data-structures";
import {BFSIterationStrategy} from "@apexds/core/lib/exports/algorithms";

const graph = new Graph<string>();
graph.addVertex('A').addVertex('B').addEdge('A', 'B');

const strategy = new BFSIterationStrategy();
const graphHasPath = hasPath<string>(graph, 'A', 'B', strategy); // true
```
