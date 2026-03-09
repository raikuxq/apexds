# Shortest path algorithm

Find the shortest path between two vertices

The shortest path problem is the problem of finding a path between two vertices (or nodes) in a graph such that the sum
of the weights of its constituent edges is minimized.

[wiki/shortest_path_problem](https://en.wikipedia.org/wiki/Shortest_path_problem)

### Import

```ts
import {shortestPath} from "@apexds/core";
```

### API reference

API: [/api/algorithms/graph/shortest-path](/api/algorithms/graph/shortest-path)

### Example usage in weighted graph (Dijkstra)

```ts
import {shortestPath} from "@apexds/core";
import {Graph} from "@apexds/core";
import {DijkstraIterationStrategy} from "@apexds/core";

const graph = new Graph<string>();
const strategy = new DijkstraIterationStrategy();

graph
    .addVertex("Mike")
    .addVertex("Bob")
    .addVertex("Lisa")
    .addVertex("Aaron")
    .addVertex("James")
    .addVertex("Anna")
    .addEdge("Mike", "Bob", 5)
    .addEdge("Mike", "Lisa", 3)
    .addEdge("Lisa", "Aaron", 3)
    .addEdge("Lisa", "James", 3)
    .addEdge("James", "Aaron", 3)
    .addEdge("James", "Anna", 6)
    .addEdge("Bob", "Anna", 15);

/**
 * Bob -> Mike (5) -> Anna (15) = 20
 * Mike -> Lisa (3) -> James (3) -> Anna (6) = 12
 */
shortestPath(graph, 'A', 'B', strategy); // ["Mika", "Lisa", "James", "Anna"]

```

### Example usage in unweighted graph (BFS)

```ts
import {shortestPath} from "@apexds/core";
import {Graph} from "@apexds/core";
import {BFSIterationStrategy} from "@apexds/core";

const graph = new Graph<string>();
const strategy = new BFSIterationStrategy();

graph
    .addVertex("Mike")
    .addVertex("Bob")
    .addVertex("Lisa")
    .addVertex("Aaron")
    .addVertex("James")
    .addVertex("Anna")
    .addEdge("Mike", "Bob")
    .addEdge("Mike", "Aaron")
    .addEdge("Mike", "Lisa")
    .addEdge("Lisa", "James")
    .addEdge("Lisa", "Aaron")
    .addEdge("James", "Aaron")
    .addEdge("James", "Anna")
    .addEdge("Aaron", "Anna");

/**
 * Mike -> Aaron -> Lisa -> James -> Anna
 * Mike -> Aaron -> Anna
 * Mike -> Lisa -> James -> Anna
 */

shortestPath(graph, "Mike", "Anna", strategy); //["Mike", "Aaron", "Anna"])
```
