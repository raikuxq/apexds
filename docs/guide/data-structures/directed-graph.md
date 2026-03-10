# Directed Graph

A directed graph (or digraph) is a graph where edges have a direction, meaning that an edge from vertex A to vertex B is not the same as an edge from vertex B to vertex A.

## Creating a Directed Graph

```typescript
// 1. Using createGraph
import { createGraph, EnumGraphType } from "@apexds/core";

// Create a directed graph
const graph = createGraph(EnumGraphType.DIRECTED);


// 2. Using class
import { DirectedGraph } from "@apexds/core";

const graph = new DirectedGraph<string>();
```

## Directionality

In a directed graph, the direction of edges matters:

```typescript
// Add a directed edge from A to B
directedGraph.addEdge("A", "B");

// This creates a one-way connection
console.log(directedGraph.hasEdge("A", "B")); // true
console.log(directedGraph.hasEdge("B", "A")); // false

// To create a two-way connection, you need to add both edges
directedGraph.addEdge("B", "A");
console.log(directedGraph.hasEdge("B", "A")); // true
```

## Use Cases

Directed graphs are used when relationships have a specific direction:

- **Web Page Links**: Representing hyperlinks between web pages
- **Task Dependencies**: Modeling dependencies where Task A must complete before Task B
- **Social Media Following**: Representing "follow" relationships on platforms like Twitter
- **State Machines**: Modeling transitions between states
- **Network Routing**: Representing one-way network connections

## Properties

### Asymmetric Relationships

Directed graphs naturally represent asymmetric relationships where the connection from A to B doesn't imply a connection from B to A.

```typescript
// User A follows User B (but not vice versa)
const socialGraph = createGraph(EnumGraphType.DIRECTED);
socialGraph.addVertex("Alice");
socialGraph.addVertex("Bob");
socialGraph.addEdge("Alice", "Bob"); // Alice follows Bob

// Bob does not follow Alice
console.log(socialGraph.hasEdge("Bob", "Alice")); // false
```

### Cycles

Directed graphs can contain cycles, which are paths that start and end at the same vertex:

```typescript
const cycleGraph = createGraph(EnumGraphType.DIRECTED);
cycleGraph.addVertex("A");
cycleGraph.addVertex("B");
cycleGraph.addVertex("C");

cycleGraph.addEdge("A", "B");
cycleGraph.addEdge("B", "C");
cycleGraph.addEdge("C", "A"); // Completes the cycle
```

## Algorithms for Directed Graphs

### Topological Sorting

Topological sorting is only possible for Directed Acyclic Graphs (DAGs):

```typescript
import { topologicalSort } from "@apexds/core";

// Create a DAG for task dependencies
const taskGraph = createGraph(EnumGraphType.DIRECTED);
taskGraph.addVertex("Write Code");
taskGraph.addVertex("Compile");
taskGraph.addVertex("Test");

taskGraph.addEdge("Write Code", "Compile");
taskGraph.addEdge("Compile", "Test");

taskGraph.addEdge("Write Code", "Test");

// Get tasks in correct order
const orderedTasks = topologicalSort(taskGraph);
console.log(orderedTasks); // ["Write Code", "Compile", "Test"]
```

### Cycle Detection

You can check if a directed graph is acyclic:

```typescript
import { isDirectedAcyclicGraph } from "@apexds/core";

console.log(isDirectedAcyclicGraph(taskGraph)); // true
console.log(isDirectedAcyclicGraph(cycleGraph)); // false
```

## Performance Characteristics

- **Space Complexity**: O(V + E) where V is the number of vertices and E is the number of edges
- **Time Complexity**:
  - Adding a vertex: O(1)
  - Adding an edge: O(1)
  - Checking edge existence: O(1)
  - Edge removal: O(1)

The implementation uses adjacency lists with directional keys to efficiently store and query directed relationships.