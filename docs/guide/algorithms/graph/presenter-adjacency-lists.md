# Presenter adjacency lists

Adjacency list is a collection of unordered lists used to represent a finite graph. Each unordered list within an
adjacency list
describes the set of neighbors of a particular vertex in the graph.

[wiki/adjacency_list](https://en.wikipedia.org/wiki/Adjacency_list)

### Import

```ts
import {presenterAdjacencyLists} from "@apexds/core";
```

### API reference

API: [/api/algorithms/graph/presenter-adjacency-lists](/api/algorithms/graph/presenter-adjacency-lists)

### Example usage

```ts
import {presenterAdjacencyLists} from "@apexds/core";
import {DirectedGraph} from "@apexds/core";

const graph: IGraph<number> = new UndirectedGraph();

graph
    .addVertex(1)
    .addVertex(2)
    .addVertex(3)
    .addVertex(4)
    .addEdge(1, 2)
    .addEdge(1, 3)
    .addEdge(3, 4);

const list = presenterAdjacencyLists(graph);

/**
 list:

 1 => [2, 3]
 2 => [1]
 3 => [1, 4]
 4 => [3]
 */
```
