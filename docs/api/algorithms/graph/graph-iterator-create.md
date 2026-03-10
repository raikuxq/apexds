# createGraphIterator

## Description
The `createGraphIterator` function creates a specialized iterator for traversing graphs using different traversal strategies (BFS, DFS, Dijkstra).

## Usage
```typescript
import { createGraph, createGraphIterator } from "@apexds/core";
import { EnumGraphType, EnumGraphTraversalType } from "@apexds/core";

// Create a graph
const graph = createGraph<number>(EnumGraphType.DIRECTED);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

// Create different types of iterators
const bfsIterator = createGraphIterator(graph, EnumGraphTraversalType.BFS);
const dfsIterator = createGraphIterator(graph, EnumGraphTraversalType.DFS);
const dijkstraIterator = createGraphIterator(graph, EnumGraphTraversalType.DIJKSTRA);

// Initialize iterator with starting vertex
bfsIterator.initIterator(1);

// Traverse the graph
while (bfsIterator.hasNext()) {
  console.log(bfsIterator.next());
}
```

## Parameters
- `graph`: `IGraph<T>` - The graph to iterate over
- `mode`: `EnumGraphTraversalType` - The traversal strategy to use (BFS, DFS, or DIJKSTRA)

## Returns
Returns a new `IGraphIterator<T>` instance configured with the specified traversal strategy.

## Examples

```typescript
// Example 1: BFS traversal for level-order processing
const socialGraph = createGraph<string>(EnumGraphType.UNDIRECTED);
// ... add vertices and edges

const bfs = createGraphIterator(socialGraph, EnumGraphTraversalType.BFS);
bfs.initIterator("Alice");

console.log("Friends at each level:");
let level = 0;
while (bfs.hasNext()) {
  const current = bfs.next();
  // In a real implementation, you would track levels
  console.log(`Level ${level}: ${current}`);
}

// Example 2: DFS traversal for path exploration
const maze = createGraph<number>(EnumGraphType.DIRECTED);
// ... setup maze connections

const dfs = createGraphIterator(maze, EnumGraphTraversalType.DFS);
dfs.initIterator(startPosition);

const path: number[] = [];
while (dfs.hasNext()) {
  const current = dfs.next();
  path.push(current);
  if (current === goalPosition) {
    console.log("Path found:", path);
    break;
  }
}

// Example 3: Dijkstra traversal for shortest path
const cityMap = createGraph<string>(EnumGraphType.DIRECTED);
// ... add cities and road distances

const dijkstra = createGraphIterator(cityMap, EnumGraphTraversalType.DIJKSTRA);
dijkstra.initIterator("New York");

// Get shortest path to Los Angeles
dijkstra.getPath("New York", "Los Angeles");
```

## Notes
- The function uses the strategy pattern to provide different traversal algorithms
- Each iterator maintains its own state and can be used independently
- BFS (Breadth-First Search) explores vertices level by level
- DFS (Depth-First Search) explores as far as possible along each branch before backtracking
- Dijkstra's algorithm finds shortest paths in weighted graphs
- All iterators implement the `IGraphIterator<T>` interface
- Time complexity varies by algorithm: BFS and DFS are O(V + E), Dijkstra is O((V + E) log V)
- The iterator must be initialized with a starting vertex using initIterator() before use