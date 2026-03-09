# Transpose directed graph

Transposed graph is another directed graph on the same set of vertices with all of the edges reversed compared to the
orientation of the corresponding edges in G

[wiki/transpose_graph](https://en.wikipedia.org/wiki/Transpose_graph)

### Import

```ts
import {transposeDirectedGraph} from "@apexds/core";
```

### API reference

API: [/api/algorithms/graph/transpose-directed-graph](/api/algorithms/graph/transpose-directed-graph)

### Example usage

```ts
import {transposeDirectedGraph} from "@apexds/core";
import {DirectedGraph} from "@apexds/core";

const sourceGraph = new DirectedGraph();

/**
 * Source graph
 *
 * *  V1 V2 V3 V4
 * V1  0  1  0  1
 * V2  0  0  0  0
 * V3  0  0  0  1
 * V4  0  0  0  0
 */
sourceGraph
    .addVertex("Vertex_1")
    .addVertex("Vertex_2")
    .addVertex("Vertex_3")
    .addVertex("Vertex_4")
    .addEdge("Vertex_1", "Vertex_2")
    .addEdge("Vertex_1", "Vertex_4")
    .addEdge("Vertex_3", "Vertex_4");

/**
 * Transposed graph
 *
 * *  V1 V2 V3 V4
 * V1  0  0  0  0
 * V2  1  0  0  0
 * V3  0  0  0  0
 * V4  1  0  1  0
 */
const transposedGraph = transposeDirectedGraph(sourceGraph);
```
