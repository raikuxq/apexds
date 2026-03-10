# Graph Iterator Creation Guide

## Introduction
This guide covers how to create and use graph iterators in ApexDS. Graph iterators provide a clean interface for traversing graphs using various algorithms, making it easy to explore graph structures and implement graph-based algorithms.

## Creating Graph Iterators

The `createGraphIterator` function is the factory method for creating specialized graph iterators. It follows the strategy pattern, allowing you to select the traversal algorithm at runtime.

### Basic Usage

```typescript
import { createGraph, createGraphIterator } from "@apexds/core";
import { EnumGraphType, EnumGraphTraversalType } from "@apexds/core";

// Create a graph
const graph = createGraph<number>(EnumGraphType.DIRECTED);
// ... add vertices and edges

// Create iterators with different traversal strategies
const bfsIterator = createGraphIterator(graph, EnumGraphTraversalType.BFS);
const dfsIterator = createGraphIterator(graph, EnumGraphTraversalType.DFS);
const dijkstraIterator = createGraphIterator(graph, EnumGraphTraversalType.DIJKSTRA);
```

## Traversal Strategies

### Breadth-First Search (BFS)

BFS explores the graph level by level, starting from the initial vertex. It's ideal for finding the shortest path in unweighted graphs.

```typescript
const bfs = createGraphIterator(graph, EnumGraphTraversalType.BFS);
bfs.initIterator(startVertex);

console.log("BFS traversal:");
while (bfs.hasNext()) {
  console.log(bfs.next());
}
```

**Use cases for BFS:**
- Finding shortest paths in unweighted graphs
- Level-order traversal of trees
- Web crawling
- Social network friend suggestions (friends of friends)
- Network broadcasting

### Depth-First Search (DFS)

DFS explores as far as possible along each branch before backtracking. It's useful for exploring all possible paths.

```typescript
const dfs = createGraphIterator(graph, EnumGraphTraversalType.DFS);
dfs.initIterator(startVertex);

console.log("DFS traversal:");
while (dfs.hasNext()) {
  console.log(dfs.next());
}
```

**Use cases for DFS:**
- Path finding
- Topological sorting
- Detecting cycles in graphs
- Solving puzzles (like mazes)
- Connected components detection
- Tree traversals (pre-order, in-order, post-order)

### Dijkstra's Algorithm

Dijkstra's algorithm finds the shortest paths from a starting vertex to all other vertices in a weighted graph.

```typescript
const dijkstra = createGraphIterator(graph, EnumGraphTraversalType.DIJKSTRA);
dijkstra.initIterator(startVertex);

// Get shortest path to target
const shortestPath = dijkstra.getPath(startVertex, targetVertex);
console.log("Shortest path:", shortestPath);
```

**Use cases for Dijkstra:**
- GPS navigation systems
- Network routing protocols
- Flight reservation systems
- Any scenario requiring shortest path in weighted graphs

## Practical Examples

### Social Network Analysis

```typescript
// Create a social network graph
const socialGraph = createGraph<string>(EnumGraphType.UNDIRECTED);
// ... add users and friendships

// Find friends of friends using BFS
function findFriendsOfFriends(graph: IGraph<string>, user: string, maxDistance: number = 2) {
  const bfs = createGraphIterator(graph, EnumGraphTraversalType.BFS);
  bfs.initIterator(user);
  
  const connections: Record<string, number> = {};
  let distance = 0;
  
  while (bfs.hasNext() && distance < maxDistance) {
    const current = bfs.next();
    if (current !== user) {
      connections[current] = distance;
    }
    // In a real implementation, you would track the current level
    distance++;
  }
  
  return connections;
}

const suggestions = findFriendsOfFriends(socialGraph, "Alice", 2);
```

### Pathfinding in Games

```typescript
// Create a game map as a graph
const gameMap = createGraph<string>(EnumGraphType.DIRECTED);
// ... define rooms and connections with movement costs

// Find shortest path between rooms
function findPath(start: string, end: string): string[] | null {
  try {
    const dijkstra = createGraphIterator(gameMap, EnumGraphTraversalType.DIJKSTRA);
    dijkstra.initIterator(start);
    return dijkstra.getPath(start, end);
  } catch (error) {
    console.log("No path found between", start, "and", end);
    return null;
  }
}

const path = findPath("Entrance", "Treasure Room");
if (path) {
  console.log("Path to treasure:", path.join(" -> "));
}
```

### Web Crawling Simulation

```typescript
// Create a web graph
const webGraph = createGraph<string>(EnumGraphType.DIRECTED);
// ... add web pages and hyperlinks

// Crawl the web using BFS
function crawlWebsite(startUrl: string, maxPages: number) {
  const bfs = createGraphIterator(webGraph, EnumGraphTraversalType.BFS);
  bfs.initIterator(startUrl);
  
  const crawled: string[] = [];
  let count = 0;
  
  while (bfs.hasNext() && count < maxPages) {
    const page = bfs.next();
    crawled.push(page);
    count++;
    
    // Simulate page processing
    console.log("Crawling:", page);
  }
  
  return crawled;
}

const crawledPages = crawlWebsite("https://example.com", 100);
```

## Iterator Lifecycle

### Initialization

All graph iterators must be initialized with a starting vertex before use:

```typescript
iterator.initIterator(startVertex);
```

### State Management

Each iterator maintains its own traversal state:

```typescript
// Multiple iterators can traverse the same graph differently
const bfs1 = createGraphIterator(graph, EnumGraphTraversalType.BFS);
const bfs2 = createGraphIterator(graph, EnumGraphTraversalType.BFS);

bfs1.initIterator("A");
bfs2.initIterator("B");

// These will produce different traversal orders
```

### Path Retrieval

Dijkstra's iterator can retrieve shortest paths between vertices:

```typescript
const dijkstra = createGraphIterator(graph, EnumGraphTraversalType.DIJKSTRA);
dijkstra.initIterator(start);

// Get path to any reachable vertex
dijkstra.getPath(start, destination);
```

## Best Practices

### Choose the Right Algorithm

- Use BFS for shortest paths in unweighted graphs
- Use DFS for exhaustive search and path exploration
- Use Dijkstra for shortest paths in weighted graphs

### Error Handling

```typescript
try {
  const iterator = createGraphIterator(graph, traversalType);
  iterator.initIterator(startVertex);
} catch (error) {
  if (error instanceof IllegalArgumentException) {
    console.error("Invalid traversal mode:", error.message);
  }
}
```

### Performance Considerations

- BFS and DFS: O(V + E) time complexity
- Dijkstra: O((V + E) log V) time complexity
- BFS uses more memory (queue) than DFS (stack)
- For very large graphs, consider iterative implementations to avoid stack overflow

## Next Steps

After mastering graph iterators, explore:

- [Graph Presenters](/guide/algorithms/graph/presenter-json) for visualizing your graphs
- [Topological Sort](/guide/algorithms/graph/topological-sort) for ordering dependent tasks
- Custom graph algorithms built on top of these iterators
- Performance optimization techniques for large-scale graph processing