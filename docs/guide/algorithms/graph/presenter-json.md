# Graph JSON Presentation Guide

## Introduction
This guide covers how to use the `presenterJson` function to serialize graphs into JSON format. JSON serialization is essential for storing graph data, transmitting it over networks, or integrating with visualization tools.

## Basic Usage

The `presenterJson` function provides a simple way to convert your graph data into a standard JSON format.

### Serializing to JSON String

```typescript
import { createGraph, presenterJson } from "@apexds/core";
import { EnumGraphType } from "@apexds/core";

// Create a simple graph
const graph = createGraph<string>(EnumGraphType.DIRECTED);
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B", 5);

// Serialize to JSON string
const jsonString = presenterJson(graph);
console.log(jsonString);
/* Output:
{
  "type": "directed",
  "vertices": ["A", "B"],
  "edges": [
    {
      "from": "A",
      "to": "B",
      "weight": 5
    }
  ]
}
*/
```

### Serializing to JavaScript Object

```typescript
// Serialize to JavaScript object
const jsonObject = presenterJson(graph, true);
console.log(jsonObject.type); // "directed"
console.log(jsonObject.vertices.length); // 2
console.log(jsonObject.edges[0].weight); // 5

// Now you can manipulate the object directly
jsonObject.edges.push({
  from: "B",
  to: "A",
  weight: 3
});

// Convert back to string if needed
const updatedJson = JSON.stringify(jsonObject, null, 2);
```

## JSON Structure

The JSON output has a consistent structure with three main properties:

### Type

Indicates whether the graph is "directed" or "undirected".

```typescript
const graphType = jsonObject.type; // "directed" or "undirected"
```

### Vertices

An array containing all vertex values in the graph.

```typescript
const vertices = jsonObject.vertices;
console.log(`Graph has ${vertices.length} vertices`);
```

### Edges

An array of edge objects, each containing:
- `from`: Source vertex identifier
- `to`: Target vertex identifier
- `weight`: Edge weight (0 if unweighted)

```typescript
jsonObject.edges.forEach(edge => {
  console.log(`${edge.from} -> ${edge.to}: ${edge.weight}`);
});
```

## Practical Examples

### Data Persistence

Save your graph data to a file or database:

```typescript
// Save graph to localStorage
function saveGraph(graph: IGraph<any>, key: string) {
  const json = presenterJson(graph);
  localStorage.setItem(key, json);
}

// Load graph from localStorage
function loadGraph(key: string): string {
  return localStorage.getItem(key) || "{}";
}

// Usage
saveGraph(myGraph, "workflow-graph");
const savedData = loadGraph("workflow-graph");
```

### API Integration

Send graph data to a server API:

```typescript
async function saveGraphToServer(graph: IGraph<any>, name: string) {
  const json = presenterJson(graph);
  
  const response = await fetch("/api/graphs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      data: json
    })
  });
  
  return response.json();
}
```

### Graph Visualization

Use the JSON output with visualization libraries:

```typescript
// Prepare data for D3.js
function prepareForD3(graph: IGraph<any>) {
  const data = presenterJson(graph, true);
  
  return {
    nodes: data.vertices.map(vertex => ({ id: vertex })),
    links: data.edges.map(edge => ({
      source: edge.from,
      target: edge.to,
      value: edge.weight
    }))
  };
}

// Usage with D3.js
const d3Data = prepareForD3(socialGraph);
d3.forceSimulation(d3Data.nodes)
  .force("link", d3.forceLink(d3Data.links).id(d => d.id))
  // ... rest of visualization code
```

### Data Analysis

Analyze graph properties from the JSON representation:

```typescript
function analyzeGraph(graph: IGraph<any>) {
  const data = presenterJson(graph, true);
  
  return {
    type: data.type,
    vertexCount: data.vertices.length,
    edgeCount: data.edges.length,
    density: data.edges.length / (data.vertices.length * (data.vertices.length - 1)),
    totalWeight: data.edges.reduce((sum, edge) => sum + edge.weight, 0)
  };
}

const analysis = analyzeGraph(transportNetwork);
console.log(analysis);
```

## Handling Different Graph Types

### Directed Graphs

Directed graphs preserve the direction of edges:

```typescript
const directed = createGraph<string>(EnumGraphType.DIRECTED);
directed.addVertex("Parent");
directed.addVertex("Child");
directed.addEdge("Parent", "Child", 1);

directed.addVertex("A");
directed.addVertex("B");
directed.addEdge("A", "B", 2);
directed.addEdge("B", "A", 3); // Reverse edge

const directedJson = presenterJson(directed, true);
// Both A->B and B->A edges are preserved
```

### Undirected Graphs

Undirected graphs automatically deduplicate symmetric edges:

```typescript
const undirected = createGraph<string>(EnumGraphType.UNDIRECTED);
undirected.addVertex("Alice");
undirected.addVertex("Bob");
undirected.addEdge("Alice", "Bob", 1);
// Adding the reverse edge would be redundant in an undirected graph

const undirectedJson = presenterJson(undirected, true);
// Only one edge is present, regardless of how many times it was added
```

## Advanced Usage

### Custom Serialization

Create specialized serialization functions:

```typescript
// Serialize only part of a graph
function serializeSubgraph(graph: IGraph<any>, startVertex: any, maxDistance: number) {
  // Use BFS to find vertices within maxDistance
  const bfs = createGraphIterator(graph, EnumGraphTraversalType.BFS);
  bfs.initIterator(startVertex);
  
  const relevantVertices = new Set<any>();
  let distance = 0;
  
  while (bfs.hasNext() && distance <= maxDistance) {
    relevantVertices.add(bfs.next());
    distance++;
  }
  
  // Create a subgraph and serialize it
  // (Implementation would extract relevant vertices and edges)
}
```

### Data Transformation

Transform the JSON output for specific use cases:

```typescript
// Convert to adjacency matrix format
function toAdjacencyMatrix(graph: IGraph<any>) {
  const json = presenterJson(graph, true);
  const vertices = json.vertices;
  const vertexIndex: Record<string, number> = {};
  
  vertices.forEach((vertex, index) => {
    vertexIndex[String(vertex)] = index;
  });
  
  const matrix = Array(vertices.length).fill(null).map(() => 
    Array(vertices.length).fill(0)
  );
  
  json.edges.forEach(edge => {
    const i = vertexIndex[edge.from];
    const j = vertexIndex[edge.to];
    matrix[i][j] = edge.weight;
  });
  
  return matrix;
}
```

## Best Practices

### Error Handling

```typescript
try {
  const json = presenterJson(graph);
  // Process the JSON output
} catch (error) {
  console.error("Failed to serialize graph:", error);
  // Handle the error appropriately
}
```

### Performance Considerations

- For very large graphs, consider streaming the JSON output
- The serialization process is O(V + E) - linear in the size of the graph
- For frequent serialization, consider caching the JSON output
- When sending over network, consider compression for large graphs

### Security

- Sanitize vertex data if it comes from user input
- Be cautious when deserializing JSON from untrusted sources
- Validate the structure of received JSON before using it to reconstruct graphs

## Integration with Other Tools

### Graphviz

Convert JSON to Graphviz format:

```typescript
function jsonToGraphviz(json: any, graphName: string = "G") {
  const type = json.type === "undirected" ? "graph" : "digraph";
  const connector = json.type === "undirected" ? "--" : "->";
  
  const lines = [];
  lines.push(`${type} ${graphName} {`);
  
  json.vertices.forEach(vertex => {
    lines.push(`  "${vertex}";`);
  });
  
  json.edges.forEach(edge => {
    const weightClause = edge.weight !== 0 ? ` [label="${edge.weight}"]` : "";
    lines.push(`  "${edge.from}" ${connector} "${edge.to}"${weightClause};`);
  });
  
  lines.push("}");
  
  return lines.join("\n");
}
```

## Next Steps

After mastering JSON presentation, explore:

- [Graphviz Presentation](/guide/algorithms/graph/presenter-graphviz) for visual diagrams
- [Custom Presenters](#) for specialized output formats
- [Graph Deserialization](#) to reconstruct graphs from JSON
- [Data Validation](#) to ensure JSON integrity