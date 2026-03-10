# topologicalSort

## Description
The `topologicalSort` function performs a topological sort on a Directed Acyclic Graph (DAG), returning vertices in an order where each vertex comes before all vertices it has edges to.

## Usage
```typescript
import { createGraph, topologicalSort } from "@apexds/core";
import { EnumGraphType } from "@apexds/core";

// Create a directed acyclic graph
const graph = createGraph<string>(EnumGraphType.DIRECTED);
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");

// Perform topological sort
const sorted = topologicalSort(graph);
console.log(sorted); // ["A", "B", "C"]
```

## Parameters
- `graph`: `IGraph<T>` - The directed acyclic graph to sort

## Returns
Returns an array of vertices in topological order.

## Examples

```typescript
// Example 1: Basic topological sort
const dependencyGraph = createGraph<string>(EnumGraphType.DIRECTED);

// Add tasks
const tasks = ["Initialize", "Compile", "Test", "Package", "Deploy"];
tasks.forEach(task => dependencyGraph.addVertex(task));

// Define dependencies
dependencyGraph.addEdge("Initialize", "Compile");
dependencyGraph.addEdge("Compile", "Test");
dependencyGraph.addEdge("Test", "Package");
dependencyGraph.addEdge("Package", "Deploy");

// Get execution order
const executionOrder = topologicalSort(dependencyGraph);
console.log("Build pipeline order:", executionOrder);
// Output: ["Initialize", "Compile", "Test", "Package", "Deploy"]

// Example 2: Course prerequisite planning
const courseGraph = createGraph<string>(EnumGraphType.DIRECTED);

// Add courses
const courses = [
  "Intro to CS", "Data Structures", "Algorithms", 
  "Database Systems", "Web Development", "Machine Learning"
];
courses.forEach(course => courseGraph.addVertex(course));

// Define prerequisites
courseGraph.addEdge("Intro to CS", "Data Structures");
courseGraph.addEdge("Data Structures", "Algorithms");
courseGraph.addEdge("Intro to CS", "Database Systems");
courseGraph.addEdge("Data Structures", "Web Development");
courseGraph.addEdge("Algorithms", "Machine Learning");
courseGraph.addEdge("Database Systems", "Machine Learning");

courseGraph.addEdge("Web Development", "Machine Learning");

// Get study plan
const studyPlan = topologicalSort(courseGraph);
console.log("Recommended study order:", studyPlan);

// Example 3: Package dependency resolution
const packageGraph = createGraph<string>(EnumGraphType.DIRECTED);

// Add packages
["lodash", "axios", "react", "react-dom", "redux", "react-redux"].forEach(
  pkg => packageGraph.addVertex(pkg)
);

// Define dependencies
packageGraph.addEdge("react", "react-dom");
packageGraph.addEdge("redux", "lodash");
packageGraph.addEdge("react-redux", "react");
packageGraph.addEdge("react-redux", "redux");

// Get installation order
const installOrder = topologicalSort(packageGraph);
console.log("Package installation order:", installOrder);
```

## Notes
- The function only works with directed graphs (throws error for undirected graphs)
- The graph must be acyclic (no cycles allowed)
- Uses depth-first search (DFS) algorithm with a recursion stack to detect cycles
- Returns vertices in reverse order of finishing times in DFS
- Time complexity is O(V + E) where V is the number of vertices and E is the number of edges
- Space complexity is O(V) for the visited and recursion stack maps
- Throws IllegalStateException if a cycle is detected
- Throws IllegalStateException if an undirected graph is provided
- The algorithm uses Kahn's algorithm variant with DFS
- For graphs with multiple valid topological orders, any valid order may be returned