# createGraph

## Description
The `createGraph` function creates a new graph instance based on the specified graph type (directed or undirected).

## Usage
```typescript
import { createGraph } from "@apexds/core";
import { EnumGraphType } from "@apexds/core";

// Create a directed graph
const directedGraph = createGraph<number>(EnumGraphType.DIRECTED);

directedGraph.addVertex(1);
directedGraph.addVertex(2);
directedGraph.addEdge(1, 2, 5);

// Create an undirected graph
const undirectedGraph = createGraph<string>(EnumGraphType.UNDIRECTED);

undirectedGraph.addVertex("A");
undirectedGraph.addVertex("B");
undirectedGraph.addEdge("A", "B", 10);
```

## Parameters
- `type`: EnumGraphType - The type of graph to create (DIRECTED or UNDIRECTED)

## Returns
Returns a new `IGraph<T>` instance of the specified type.

## Examples

```typescript
// Example 1: Creating a directed graph for task dependencies
const taskGraph = createGraph<string>(EnumGraphType.DIRECTED);
taskGraph.addVertex("Build");
taskGraph.addVertex("Test");
taskGraph.addVertex("Deploy");
taskGraph.addEdge("Build", "Test");
taskGraph.addEdge("Test", "Deploy");

// Example 2: Creating an undirected graph for social network
const socialGraph = createGraph<string>(EnumGraphType.UNDIRECTED);
socialGraph.addVertex("Alice");
socialGraph.addVertex("Bob");
socialGraph.addVertex("Charlie");
socialGraph.addEdge("Alice", "Bob");
socialGraph.addEdge("Bob", "Charlie");

// Example 3: Working with numeric data
const numberGraph = createGraph<number>(EnumGraphType.DIRECTED);
for (let i = 1; i <= 5; i++) {
  numberGraph.addVertex(i);
}
numberGraph.addEdge(1, 2);
numberGraph.addEdge(2, 3);
numberGraph.addEdge(1, 3);
```

## Notes
- The function uses generics to support any data type for vertices
- The returned graph implements the `IGraph<T>` interface with all standard graph operations
- Directed graphs have edges with direction (from -> to)
- Undirected graphs have bidirectional edges
- Both graph types support weighted edges
- Time complexity for creation is O(1)