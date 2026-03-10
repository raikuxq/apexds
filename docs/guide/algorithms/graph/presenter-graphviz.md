<div v-pre>


# Graphviz Presentation Guide

## Introduction
This guide covers how to use the `presenterGraphviz` function to convert your graphs into Graphviz DOT format. Graphviz is a powerful open-source graph visualization software that can render your graph data into professional-looking diagrams.

## Basic Usage

The `presenterGraphviz` function transforms your ApexDS graph into the DOT language format used by Graphviz.

### Simple Conversion

```typescript
import { createGraph, presenterGraphviz } from "@apexds/core";
import { EnumGraphType } from "@apexds/core";

// Create a basic graph
const graph = createGraph<string>(EnumGraphType.DIRECTED);
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B", 5);

// Convert to DOT format
const dotOutput = presenterGraphviz(graph);
console.log(dotOutput);
```

### Custom Graph Names

You can specify a custom name for your graph:

```typescript
// Use a meaningful name for your graph
const workflowDot = presenterGraphviz(graph, "ProjectWorkflow");
const networkDot = presenterGraphviz(graph, "NetworkTopology");

// The name appears in the DOT output
```
```text
digraph ProjectWorkflow {
  // ... graph content
}
```


## DOT Format Structure

The generated DOT format has a consistent structure that Graphviz can render.

### Directed vs Undirected Graphs

The function automatically detects the graph type:

**Directed Graphs** use `digraph` and `->`:
```text
digraph G {
  "A" -> "B";
  "B" -> "C";
}
```

**Undirected Graphs** use `graph` and `--`:
```text
graph G {
  "A" -- "B";
  "B" -- "C";
}
```

### Styling Attributes

The output includes several styling attributes for better visualization:

- `rankdir=LR`: Sets layout direction from left to right
- Node styling: circles with Arial font and light gray fill
- Edge styling: Arial font with size 10
- Edge colors: dark gray (#333333) for consistency

```text
digraph G {
  rankdir=LR;
  node [shape=circle, fontname="Arial", style=filled, fillcolor="#f9f9f9"];
  edge [fontname="Arial", fontsize=10];
  // ... vertices and edges
}
```

## Practical Examples

### Business Process Workflow

Visualize a business process with multiple steps:

```typescript
// Create a workflow graph
const workflow = createGraph<string>(EnumGraphType.DIRECTED);
const stages = ["Idea", "Design", "Development", "Testing", "Deployment", "Maintenance"];
stages.forEach(stage => workflow.addVertex(stage));

// Define the process flow
workflow.addEdge("Idea", "Design");
workflow.addEdge("Design", "Development");
workflow.addEdge("Development", "Testing");
workflow.addEdge("Testing", "Deployment");
workflow.addEdge("Deployment", "Maintenance");
workflow.addEdge("Testing", "Design", 1); // Feedback loop

// Generate DOT format
const dotWorkflow = presenterGraphviz(workflow, "SDLC");
console.log(dotWorkflow);
```

### Social Network Analysis

Visualize relationships in a social network:

```typescript
// Create a social network
const socialNetwork = createGraph<string>(EnumGraphType.UNDIRECTED);
const members = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
members.forEach(member => socialNetwork.addVertex(member));

// Define friendships
const friendships = [
  ["Alice", "Bob"], ["Alice", "Charlie"], ["Bob", "Diana"], 
  ["Charlie", "Diana"], ["Diana", "Eve"], ["Eve", "Frank"]
];

friendships.forEach(([a, b]) => socialNetwork.addEdge(a, b));

// Generate DOT format
const dotSocial = presenterGraphviz(socialNetwork, "TeamNetwork");
```

### Transportation Network

Model a transportation system with distances:

```typescript
// Create a transportation network
const transport = createGraph<string>(EnumGraphType.DIRECTED);
const cities = ["New York", "Chicago", "Denver", "Los Angeles", "Miami"];
cities.forEach(city => transport.addVertex(city));

// Define routes with distances in miles
transport.addEdge("New York", "Chicago", 800);
transport.addEdge("Chicago", "Denver", 1000);
transport.addEdge("Denver", "Los Angeles", 1200);
transport.addEdge("New York", "Miami", 1200);
transport.addEdge("Miami", "Los Angeles", 2700);

// Generate DOT format
const dotTransport = presenterGraphviz(transport, "RouteNetwork");
```

## Visualization Workflow

### Step 1: Generate DOT Format

```typescript
const dotOutput = presenterGraphviz(yourGraph, "MyGraph");
```

### Step 2: Save to File

```typescript
// Save to .dot file
const fs = require('fs');
fs.writeFileSync('output.dot', dotOutput);
```

### Step 3: Render with Graphviz

Use Graphviz command-line tools to generate images:

```bash
# Install Graphviz first
# On macOS: brew install graphviz
# On Ubuntu: sudo apt-get install graphviz
# On Windows: choco install graphviz

# Generate PNG image
dot -Tpng output.dot -o output.png

# Generate SVG vector graphic
dot -Tsvg output.dot -o output.svg

# Generate PDF
dot -Tpdf output.dot -o output.pdf
```

### Step 4: View the Result

Open the generated image file to see your graph visualization.

## Advanced Usage

### Programmatic Rendering

Use the `@types/graphviz` package to render directly in Node.js:

```typescript
import * as graphviz from 'graphviz';

// Create digraph
const g = graphviz.digraph("G");

// Parse the DOT string and render
// (Implementation would involve parsing the DOT output)
```

### Web Integration

Use DOT output with JavaScript libraries:

```typescript
// With Viz.js (client-side Graphviz)
import Viz from 'viz.js';

function renderGraph(dotString: string): string {
  try {
    return Viz(dotString, { format: 'svg' });
  } catch (error) {
    console.error("Rendering failed:", error);
    return "";
  }
}

// Usage
const svgOutput = renderGraph(dotWorkflow);
document.getElementById("graph").innerHTML = svgOutput;
```

### Error Handling

```typescript
try {
  const dot = presenterGraphviz(graph, "MyGraph");
  // Process the DOT output
} catch (error) {
  console.error("Failed to generate DOT format:", error);
}
```

### Performance Considerations

- For very large graphs, the DOT output can become large
- Consider filtering or aggregating data for complex graphs
- The generation process is O(V + E) - linear in graph size
- For frequently updated graphs, consider caching the DOT output

</div>