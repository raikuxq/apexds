# Graph Creation Guide

## Introduction
This guide covers how to create and initialize graphs using the `createGraph` function in ApexDS. Graphs are fundamental data structures for representing relationships between entities, and ApexDS provides a flexible way to create both directed and undirected graphs.

## Creating Graphs

The `createGraph` function is the primary way to create graph instances in ApexDS. It uses the factory pattern to return the appropriate graph implementation based on the specified type.

### Basic Usage

```typescript
import { createGraph } from "@apexds/core";
import { EnumGraphType } from "@apexds/core";

// Create a directed graph
const directedGraph = createGraph<number>(EnumGraphType.DIRECTED);

// Create an undirected graph
const undirectedGraph = createGraph<string>(EnumGraphType.UNDIRECTED);
```

## Graph Types

ApexDS supports two main types of graphs:

### Directed Graphs

Directed graphs (or digraphs) have edges with direction. An edge from vertex A to vertex B does not imply an edge from B to A.

```typescript
const flightRoutes = createGraph<string>(EnumGraphType.DIRECTED);
flightRoutes.addVertex("New York");
flightRoutes.addVertex("London");
flightRoutes.addVertex("Tokyo");

// Direct flights
flightRoutes.addEdge("New York", "London", 3500);
flightRoutes.addEdge("London", "Tokyo", 5900);

// Note: This doesn't mean you can fly back
console.log(flightRoutes.hasEdge("London", "New York")); // false
```

### Undirected Graphs

Undirected graphs have bidirectional edges. If there's an edge between A and B, you can traverse in both directions.

```typescript
const roadNetwork = createGraph<string>(EnumGraphType.UNDIRECTED);
roadNetwork.addVertex("House");
roadNetwork.addVertex("Store");
roadNetwork.addVertex("Park");

// Roads are bidirectional
roadNetwork.addEdge("House", "Store", 2); // 2km road
roadNetwork.addEdge("Store", "Park", 1); // 1km road

// You can travel in both directions
console.log(roadNetwork.hasEdge("House", "Store")); // true
console.log(roadNetwork.hasEdge("Store", "House")); // true
```

## Practical Examples

### Task Dependency Management

Directed graphs are perfect for representing task dependencies where certain tasks must be completed before others.

```typescript
const buildPipeline = createGraph<string>(EnumGraphType.DIRECTED);

// Define tasks
const tasks = ["Initialize", "Compile", "Test", "Package", "Deploy"];
tasks.forEach(task => buildPipeline.addVertex(task));

// Define dependencies
buildPipeline.addEdge("Initialize", "Compile");
buildPipeline.addEdge("Compile", "Test");
buildPipeline.addEdge("Test", "Package");
buildPipeline.addEdge("Package", "Deploy");

// Check if a task depends on another
function isDependent(graph: IGraph<string>, dependent: string, prerequisite: string): boolean {
  // Implementation using graph traversal
  return graph.hasEdge(prerequisite, dependent);
}
```

### Social Network Analysis

Undirected graphs work well for social networks where relationships are mutual.

```typescript
const socialNetwork = createGraph<string>(EnumGraphType.UNDIRECTED);

// Add users
["Alice", "Bob", "Charlie", "Diana", "Eve"].forEach(user => 
  socialNetwork.addVertex(user)
);

// Add friendships
socialNetwork.addEdge("Alice", "Bob");
socialNetwork.addEdge("Alice", "Charlie");
socialNetwork.addEdge("Bob", "Diana");
socialNetwork.addEdge("Charlie", "Diana");
socialNetwork.addEdge("Diana", "Eve");

// Find mutual friends
function getMutualFriends(graph: IGraph<string>, user1: string, user2: string): string[] {
  const friends1 = new Set(graph.getVertexNeighbors(user1));
  return graph.getVertexNeighbors(user2).filter(friend => friends1.has(friend));
}

console.log(getMutualFriends(socialNetwork, "Alice", "Diana")); // ["Bob", "Charlie"]
```

## Best Practices

### Type Safety

Always specify the type parameter when creating a graph to ensure type safety:

```typescript
// Good: Explicit type parameter
const stringGraph = createGraph<string>(EnumGraphType.DIRECTED);

// Avoid: Letting TypeScript infer the type
const graph = createGraph(EnumGraphType.DIRECTED); // T is unknown
```

### Error Handling

The `createGraph` function doesn't throw errors during creation, but be aware of limitations when working with the created graphs:

- Directed graphs cannot represent symmetric relationships efficiently
- Undirected graphs cannot represent one-way relationships
- Both types require unique vertex values

## Performance Considerations

- Graph creation is O(1) - very fast
- Memory usage depends on the number of vertices and edges
- For large graphs, consider the memory implications of storing adjacency lists
- The implementation uses efficient data structures for vertex lookup and edge management

## Next Steps

After creating a graph, you can:

1. Add vertices and edges
2. Perform graph traversals
3. Use algorithms like topological sort (for directed acyclic graphs)
4. Serialize the graph to JSON or Graphviz format
5. Implement custom graph algorithms

Explore the [Graph Iterators](/guide/algorithms/graph/graph-iterator-create) guide to learn about traversing your graphs.