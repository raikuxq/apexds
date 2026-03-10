# Topological Sort Guide

## Introduction
This guide covers how to use the `topologicalSort` function to order vertices in a Directed Acyclic Graph (DAG) such that for every directed edge from vertex A to vertex B, A comes before B in the ordering. This is essential for resolving dependencies and determining execution order.

## Basic Usage

The `topologicalSort` function provides a simple way to determine the correct order of operations in dependency graphs.

### Simple Example

```typescript
import { createGraph, topologicalSort } from "@apexds/core";
import { EnumGraphType } from "@apexds/core";

// Create a simple dependency graph
const graph = createGraph<string>(EnumGraphType.DIRECTED);
graph.addVertex("Task A");
graph.addVertex("Task B");
graph.addVertex("Task C");

// Define dependencies
graph.addEdge("Task A", "Task B"); // B depends on A
graph.addEdge("Task B", "Task C"); // C depends on B

// Get execution order
const order = topologicalSort(graph);
console.log(order); // ["Task A", "Task B", "Task C"]
```

## Algorithm Overview

Topological sorting arranges vertices in a linear order that respects the graph's dependencies. The algorithm uses depth-first search (DFS) to traverse the graph and build the ordering.

### How It Works

1. Start with any vertex that has no incoming edges
2. Add it to the result and remove it from the graph
3. Repeat with remaining vertices
4. Continue until all vertices are processed

The implementation uses a DFS-based approach with a recursion stack to detect cycles.

## Practical Examples

### Build System Pipeline

Model a software build process with dependencies:

```typescript
// Create a build pipeline graph
const buildGraph = createGraph<string>(EnumGraphType.DIRECTED);

// Define build stages
const stages = ["Initialize", "Lint", "Compile", "Test", "Package", "Deploy"];
stages.forEach(stage => buildGraph.addVertex(stage));

// Define dependencies
buildGraph.addEdge("Initialize", "Lint");
buildGraph.addEdge("Initialize", "Compile");
buildGraph.addEdge("Lint", "Compile");
buildGraph.addEdge("Compile", "Test");
buildGraph.addEdge("Test", "Package");
buildGraph.addEdge("Package", "Deploy");

// Get build order
const buildOrder = topologicalSort(buildGraph);
console.log("Build execution order:", buildOrder);

// Execute the build pipeline
async function runBuild() {
  for (const stage of buildOrder) {
    console.log("Running:", stage);
    await executeStage(stage);
  }
}
```

### Course Prerequisite Planning

Help students plan their course schedule based on prerequisites:

```typescript
// Create a course dependency graph
const curriculum = createGraph<string>(EnumGraphType.DIRECTED);

// Add computer science courses
const courses = [
  "CS101: Introduction to Programming",
  "CS201: Data Structures",
  "CS301: Algorithms",
  "CS302: Database Systems",
  "CS401: Web Development",
  "CS402: Machine Learning"
];

courses.forEach(course => curriculum.addVertex(course));

// Define prerequisites
curriculum.addEdge("CS101: Introduction to Programming", "CS201: Data Structures");
curriculum.addEdge("CS201: Data Structures", "CS301: Algorithms");
curriculum.addEdge("CS201: Data Structures", "CS302: Database Systems");
curriculum.addEdge("CS201: Data Structures", "CS401: Web Development");
curriculum.addEdge("CS301: Algorithms", "CS402: Machine Learning");
curriculum.addEdge("CS302: Database Systems", "CS402: Machine Learning");
curriculum.addEdge("CS401: Web Development", "CS402: Machine Learning");

// Get recommended study order
const studyPlan = topologicalSort(curriculum);
console.log("Recommended semester-by-semester plan:");

// Group by semester (simplified)
const semesters: string[][] = [[], [], [], [], [], []];
studyPlan.forEach(course => {
  // In a real implementation, you would use more sophisticated grouping
  const semesterIndex = Math.min(Math.floor(studyPlan.indexOf(course) / 2), 5);
  semesters[semesterIndex].push(course);
});

semesters.forEach((semester, index) => {
  if (semester.length > 0) {
    console.log(`Semester ${index + 1}: ${semester.join(', ')}`);
  }
});
```

### Package Dependency Resolution

Model package manager dependency resolution:

```typescript
// Create a package dependency graph
const packageManager = createGraph<string>(EnumGraphType.DIRECTED);

// Add packages
const packages = [
  "lodash", "axios", "react", "react-dom", "redux", "react-redux", "typescript"
];

packages.forEach(pkg => packageManager.addVertex(pkg));

// Define dependencies
packageManager.addEdge("react", "react-dom");
packageManager.addEdge("react-redux", "react");
packageManager.addEdge("react-redux", "redux");
packageManager.addEdge("redux", "lodash");

// Get installation order
const installOrder = topologicalSort(packageManager);
console.log("Package installation order:", installOrder);

// Generate installation commands
installOrder.forEach(pkg => {
  console.log(`npm install ${pkg}`);
});
```

### Task Scheduler

Create a task scheduler for a project management system:

```typescript
// Create a project task graph
const project = createGraph<string>(EnumGraphType.DIRECTED);

// Define project tasks
const tasks = [
  "Project Kickoff",
  "Requirements Gathering",
  "System Design",
  "Database Design",
  "Frontend Development",
  "Backend Development",
  "Integration",
  "Testing",
  "Deployment",
  "Documentation"
];

tasks.forEach(task => project.addVertex(task));

// Define task dependencies
project.addEdge("Project Kickoff", "Requirements Gathering");
project.addEdge("Requirements Gathering", "System Design");
project.addEdge("System Design", "Database Design");
project.addEdge("System Design", "Frontend Development");
project.addEdge("System Design", "Backend Development");
project.addEdge("Database Design", "Backend Development");
project.addEdge("Frontend Development", "Integration");
project.addEdge("Backend Development", "Integration");
project.addEdge("Integration", "Testing");
project.addEdge("Testing", "Deployment");
project.addEdge("Testing", "Documentation");
project.addEdge("Deployment", "Documentation");

// Get project timeline
const timeline = topologicalSort(project);
console.log("Project execution timeline:", timeline);

// Calculate critical path (simplified)
const criticalPath: string[] = [];
timeline.forEach(task => {
  // In a real implementation, you would consider task durations
  // and calculate the longest path through the project
  criticalPath.push(task);
});
```

## Error Handling

The `topologicalSort` function includes robust error handling for common graph issues.

### Cycle Detection

```typescript
try {
  // Create a graph with a cycle
  const cyclicGraph = createGraph<string>(EnumGraphType.DIRECTED);
  cyclicGraph.addVertex("A");
  cyclicGraph.addVertex("B");
  cyclicGraph.addEdge("A", "B");
  cyclicGraph.addEdge("B", "A"); // This creates a cycle
  
  // This will throw an error
  const result = topologicalSort(cyclicGraph);
} catch (error) {
  if (error instanceof IllegalStateException) {
    console.error("Cycle detected in graph:", error.message);
    // Handle the error - perhaps by removing edges or notifying the user
  }
}
```

### Undirected Graphs

```typescript
try {
  // Topological sort is not defined for undirected graphs
  const undirected = createGraph<string>(EnumGraphType.UNDIRECTED);
  undirected.addVertex("A");
  undirected.addVertex("B");
  undirected.addEdge("A", "B");
  
  const result = topologicalSort(undirected);
} catch (error) {
  if (error instanceof IllegalStateException) {
    console.error("Topological sort requires a directed graph:", error.message);
  }
}
```

## Advanced Usage

### Partial Ordering

Sometimes you may want to sort only a subset of vertices:

```typescript
function topologicalSortSubset<T>(
  graph: IGraph<T>, 
  subset: T[]
): T[] {
  // Create a subgraph with only the subset vertices and their connections
  const subgraph = createGraph<T>(EnumGraphType.DIRECTED);
  
  // Add vertices from subset
  subset.forEach(vertex => subgraph.addVertex(vertex));
  
  // Add edges between subset vertices
  subset.forEach(from => {
    subset.forEach(to => {
      if (from !== to && graph.hasEdge(from, to)) {
        subgraph.addEdge(from, to, graph.getEdgeWeight(from, to));
      }
    });
  });
  
  return topologicalSort(subgraph);
}
```

### Multiple Valid Orderings

Graphs may have multiple valid topological orderings. You can implement strategies to choose among them:

```typescript
// Strategy: Prioritize vertices with more dependencies (higher in-degree)
function topologicalSortWithPriority<T>(
  graph: IGraph<T>,
  priorityFn: (vertex: T) => number = () => 0
): T[] {
  const baseOrder = topologicalSort(graph);
  
  // Sort vertices within the topological constraints by priority
n  // (Implementation would need to respect dependency constraints)
}
```

## Best Practices

### Validate Input

Always ensure your graph is a DAG before calling topologicalSort:

```typescript
function isAcyclic<T>(graph: IGraph<T>): boolean {
  try {
    topologicalSort(graph);
    return true;
  } catch (error) {
    return false;
  }
}

// Safe usage
if (isAcyclic(myGraph)) {
  const order = topologicalSort(myGraph);
  // Process the order
} else {
  console.log("Graph contains cycles - cannot perform topological sort");
}
```

### Handle Errors Gracefully

```typescript
function safeTopologicalSort<T>(
  graph: IGraph<T>
): T[] | null {
  try {
    return topologicalSort(graph);
  } catch (error) {
    console.error("Topological sort failed:", error);
    return null;
  }
}
```

## Performance Considerations

- Time complexity: O(V + E) where V is vertices and E is edges
- Space complexity: O(V) for the recursion stack and visited maps
- For very large graphs, consider iterative implementations to avoid stack overflow
- The algorithm efficiently handles sparse and dense graphs
- Edge weights are ignored in the sorting process

## Next Steps

After mastering topological sort, explore:

- [Graph Iterators](/guide/algorithms/graph/graph-iterator-create) for traversing your ordered graphs
- [Cycle Detection](#) algorithms for identifying problematic dependencies
- [Critical Path Method](#) for project management applications
- [Dependency Visualization](/guide/algorithms/graph/presenter-graphviz) to see your dependency graphs