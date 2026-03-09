# Graph

In mathematics, and more specifically in graph theory, a graph is a structure amounting to a set of objects in which
some pairs of the objects are in some sense "related". The objects correspond to mathematical abstractions called
vertices (also called nodes or points) and each of the related pairs of vertices is called an edge (also called link or
line)

Read full: [wiki/graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics))

## Graph types

#### Directed graph

A directed graph or digraph is a graph in which edges have orientations.

#### Weighted graph

A weighted graph or a network is a graph in which a number (the weight) is assigned to each edge. Such weights might
represent for example costs, lengths or capacities, depending on the problem at hand.

## Import

```ts
import {UndirectedGraph, DirectedGraph} from "@apexds/core";
```

## API reference

Graph API: [/api/data-structures/graph](/api/data-structures/graph)

## Example usage

```ts
import {UndirectedGraph} from "@apexds/core";

const graph = new UndirectedGraph<string>();

graph
    .addVertex("Mike")
    .addVertex("Bob")
    .addVertex("Lisa")
    .addEdge("Mike", "Bob", 5)
    .addEdge("Bob", "Lisa", 10);

graph.hasVertex("Mike"); // true
graph.hasEdge("Mike", "Bob"); // true
graph.hasEdge("Mike", "Lisa"); // false
graph.getEdgeWeight("Mike", "Bob"); // 5

graph.removeVertex("Bob", "Lisa");
graph.hasEdge("Bob", "Lisa"); // false
```
