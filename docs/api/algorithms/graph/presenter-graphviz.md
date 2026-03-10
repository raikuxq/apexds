<div v-pre>

# presenterGraphviz

## Description
The `presenterGraphviz` function converts a graph into Graphviz DOT format, enabling visualization of graph structures using Graphviz tools.

## Usage
```typescript
import { createGraph, presenterGraphviz } from "@apexds/core";
import { EnumGraphType } from "@apexds/core";

// Create a graph
const graph = createGraph<string>(EnumGraphType.DIRECTED);
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B", 5);
graph.addEdge("B", "C", 3);
graph.addEdge("A", "C", 10);

// Convert to Graphviz DOT format
const dotFormat = presenterGraphviz(graph);
console.log(dotFormat);

// With custom graph name
const dotWithCustomName = presenterGraphviz(graph, "MyWorkflow");
```

## Parameters
- `graph`: `IGraph<T>` - The graph to convert to DOT format
- `graphName`: `string` (optional, default: "G") - The name of the graph in the DOT output

## Returns
Returns a string containing the graph in Graphviz DOT format.

## Examples

```typescript
// Example 1: Basic directed graph
const workflow = createGraph<string>(EnumGraphType.DIRECTED);
workflow.addVertex("Start");
workflow.addVertex("Process");
workflow.addVertex("Review");
workflow.addVertex("End");
workflow.addEdge("Start", "Process", 2);
workflow.addEdge("Process", "Review", 5);
workflow.addEdge("Review", "End", 1);

const dotWorkflow = presenterGraphviz(workflow, "Workflow");
console.log(dotWorkflow);
/* Output:
digraph Workflow {
  rankdir=LR;
  node [shape=circle, fontname="Arial", style=filled, fillcolor="#f9f9f9"];
  edge [fontname="Arial", fontsize=10];
  "Start";
  "Process";
  "Review";
  "End";
  "Start" -> "Process" [label="2", color="#333333"];
  "Process" -> "Review" [label="5", color="#333333"];
  "Review" -> "End" [label="1", color="#333333"];
}
*/

// Example 2: Undirected social network
const socialGraph = createGraph<string>(EnumGraphType.UNDIRECTED);
socialGraph.addVertex("Alice");
socialGraph.addVertex("Bob");
socialGraph.addVertex("Charlie");
socialGraph.addEdge("Alice", "Bob", 1);
socialGraph.addEdge("Bob", "Charlie", 1);
socialGraph.addEdge("Alice", "Charlie", 1);

const dotSocial = presenterGraphviz(socialGraph, "SocialNetwork");
console.log(dotSocial);
/* Output:
graph SocialNetwork {
  rankdir=LR;
  node [shape=circle, fontname="Arial", style=filled, fillcolor="#f9f9f9"];
  edge [fontname="Arial", fontsize=10];
  "Alice";
  "Bob";
  "Charlie";
  "Alice" -- "Bob" [label="1", color="#333333"];
  "Bob" -- "Charlie" [label="1", color="#333333"];
  "Alice" -- "Charlie" [label="1", color="#333333"];
}
*/

// Example 3: Weighted transportation network
const transport = createGraph<string>(EnumGraphType.DIRECTED);
transport.addVertex("New York");
transport.addVertex("Chicago");
transport.addVertex("Los Angeles");
transport.addEdge("New York", "Chicago", 800);
transport.addEdge("Chicago", "Los Angeles", 2000);
transport.addEdge("New York", "Los Angeles", 2500);

const dotTransport = presenterGraphviz(transport, "TransportNetwork");
```

## Notes
- The function generates valid Graphviz DOT syntax that can be rendered by Graphviz tools
- Directed graphs use "digraph" and "->" notation
- Undirected graphs use "graph" and "--" notation
- The output includes styling attributes for better visualization
- Edge weights are included as labels when non-zero
- All edges are colored with #333333 for consistency
- The rankdir=LR attribute sets left-to-right layout direction
- Nodes are styled with circle shape and light gray fill
- The function handles both directed and undirected graphs appropriately
- Time complexity is O(V + E) where V is the number of vertices and E is the number of edges

</div>