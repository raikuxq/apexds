# Undirected Graph

An undirected graph is a graph where edges have no direction, meaning that an edge between vertex A and vertex B is the same as an edge between vertex B and vertex A.

## Creating an Undirected Graph

```typescript
import { createGraph, EnumGraphType } from "@apexds/core";

// Create an undirected graph (default type)
const graph = createGraph();
// or explicitly
const graph = createGraph(EnumGraphType.UNDIRECTED);

// 2. Using class
import { UndirectedGraph } from "@apexds/core";

const graph = new UndirectedGraph<string>();
```

## Symmetric Relationships

In an undirected graph, edges represent symmetric relationships:

```typescript
// Add an edge between A and B
graph.addEdge("A", "B");

// The connection is bidirectional
console.log(graph.hasEdge("A", "B")); // true
console.log(graph.hasEdge("B", "A")); // true

// You don't need to add the reverse edge
// It's automatically available in both directions
```

## Use Cases

Undirected graphs are used when relationships are mutual:

- **Friendship Networks**: Representing friendships where if A is friends with B, then B is friends with A
- **Physical Connections**: Modeling roads between cities, wires between devices, or any physical connection
- **Collaboration Networks**: Representing co-authorship or team collaborations
- **Molecular Structures**: Modeling chemical bonds between atoms
- **Network Topology**: Representing bidirectional network connections

## Properties

### Symmetric Adjacency

The adjacency relationship is symmetric - if vertex A is adjacent to vertex B, then vertex B is adjacent to vertex A.

```typescript
const socialGraph = createGraph(EnumGraphType.UNDIRECTED);
socialGraph.addVertex("Alice");
socialGraph.addVertex("Bob");
socialGraph.addVertex("Charlie");

// Alice and Bob are friends
socialGraph.addEdge("Alice", "Bob");

// The friendship is mutual
console.log(socialGraph.hasEdge("Alice", "Bob")); // true
console.log(socialGraph.hasEdge("Bob", "Alice")); // true

// Alice and Charlie are friends
socialGraph.addEdge("Alice", "Charlie");

// Bob and Charlie are friends
socialGraph.addEdge("Bob", "Charlie");
```

### Complete Graphs

A complete graph is one where every pair of distinct vertices is connected by a unique edge:

```typescript
// In a complete graph with n vertices, there are n*(n-1)/2 edges
const completeGraph = createGraph(EnumGraphType.UNDIRECTED);

// Add vertices
for (let i = 0; i < 4; i++) {
  completeGraph.addVertex(`V${i}`);
}

// Connect every pair
const vertices = completeGraph.vertices();
for (let i = 0; i < vertices.length; i++) {
  for (let j = i + 1; j < vertices.length; j++) {
    completeGraph.addEdge(vertices[i], vertices[j]);
  }
}

// Number of edges should be 4*3/2 = 6
console.log(completeGraph.edgesCount()); // 6
```

## Graph Density

The density of an undirected graph is the ratio of the number of edges to the maximum possible number of edges:

```typescript
const calculateDensity = (graph) => {
  const verticesCount = graph.verticesCount();
  if (verticesCount < 2) return 0;
  
  const maxPossibleEdges = (verticesCount * (verticesCount - 1)) / 2;
  const actualEdges = graph.edgesCount();
  
  return actualEdges / maxPossibleEdges;
};

console.log(calculateDensity(completeGraph)); // 1.0 (100% dense)
```

## Connected Components

An undirected graph may consist of multiple connected components:

```typescript
// Create a graph with two separate components
const disconnectedGraph = createGraph(EnumGraphType.UNDIRECTED);

disconnectedGraph.addVertex("A");
disconnectedGraph.addVertex("B");
disconnectedGraph.addVertex("C");
disconnectedGraph.addVertex("X");
disconnectedGraph.addVertex("Y");

disconnectedGraph.addEdge("A", "B");
disconnectedGraph.addEdge("B", "C");
// Component 1: A-B-C

disconnectedGraph.addEdge("X", "Y");
// Component 2: X-Y

// Vertices in different components are not connected
console.log(graph.hasPath("A", "X")); // false
```

## Performance Characteristics

- **Space Complexity**: O(V + E) where V is the number of vertices and E is the number of edges
- **Time Complexity**:
  - Adding a vertex: O(1)
  - Adding an edge: O(1)
  - Checking edge existence: O(1)
  - Edge removal: O(1)

The implementation uses adjacency lists with symmetric edge storage to efficiently represent bidirectional relationships.