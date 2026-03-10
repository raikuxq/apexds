<div v-pre>

# presenterJson

## Description
The `presenterJson` function serializes a graph into JSON format, making it easy to store, transmit, or visualize graph data.

## Usage
```typescript
import { createGraph, presenterJson } from "@apexds/core";
import { EnumGraphType } from "@apexds/core";

// Create a graph
const graph = createGraph<string>(EnumGraphType.DIRECTED);
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B", 5);
graph.addEdge("B", "C", 3);
graph.addEdge("A", "C", 10);

// Serialize to JSON string
const jsonString = presenterJson(graph);
console.log(jsonString);

// Serialize to JSON object
const jsonObject = presenterJson(graph, true);
console.log(jsonObject);
```

## Parameters
- `graph`: `IGraph<T>` - The graph to serialize
- `asObject`: `boolean` (optional, default: false) - If true, returns a JavaScript object; if false, returns a JSON string

## Returns
Returns either a JSON string or a JavaScript object representing the graph structure.

## Examples

```typescript
// Example 1: Basic serialization
const simpleGraph = createGraph<number>(EnumGraphType.UNDIRECTED);
simpleGraph.addVertex(1);
simpleGraph.addVertex(2);
simpleGraph.addEdge(1, 2, 7);

const jsonOutput = presenterJson(simpleGraph, true);
console.log(jsonOutput);
/* Output:
{
  "type": "undirected",
  "vertices": [1, 2],
  "edges": [
    {"from": "1", "to": "2", "weight": 7}
  ]
}
*/

// Example 2: Working with string vertices
const socialGraph = createGraph<string>(EnumGraphType.UNDIRECTED);
socialGraph.addVertex("Alice");
socialGraph.addVertex("Bob");
socialGraph.addVertex("Charlie");
socialGraph.addEdge("Alice", "Bob", 1);
socialGraph.addEdge("Bob", "Charlie", 1);
socialGraph.addEdge("Alice", "Charlie", 1);

const jsonString = presenterJson(socialGraph);
console.log(jsonString);
/* Output:
{
  "type": "undirected",
  "vertices": ["Alice", "Bob", "Charlie"],
  "edges": [
    {"from": "Alice", "to": "Bob", "weight": 1},
    {"from": "Bob", "to": "Charlie", "weight": 1},
    {"from": "Alice", "to": "Charlie", "weight": 1}
  ]
}
*/

// Example 3: Directed graph with different weights
const workflow = createGraph<string>(EnumGraphType.DIRECTED);
workflow.addVertex("Start");
workflow.addVertex("Process");
workflow.addVertex("Review");
workflow.addVertex("End");
workflow.addEdge("Start", "Process", 2);
workflow.addEdge("Process", "Review", 5);
workflow.addEdge("Review", "End", 1);
workflow.addEdge("Review", "Process", 3); // Feedback loop

const workflowJson = presenterJson(workflow, true);
console.log(workflowJson);
```

## Notes
- The function handles both directed and undirected graphs
- For undirected graphs, edges are deduplicated to avoid redundancy
- Vertex keys are converted to strings for consistent JSON representation
- The function uses the graph's getVertexKey method to identify vertices in edges
- When `asObject` is true, returns a plain JavaScript object
- When `asObject` is false, returns a formatted JSON string with 2-space indentation
- The output format is designed to be compatible with various graph visualization tools
- Time complexity is O(V + E) where V is the number of vertices and E is the number of edges

</div>