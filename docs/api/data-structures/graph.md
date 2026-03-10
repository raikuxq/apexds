# UndirectedGraph<T> / DirectedGraph<T>

Guide: [/guide/data-structures/graph](/guide/data-structures/graph)

## Generic Types

`T` - type of collection elements

## Implements interfaces

### [`IGraph`](/api/types/interfaces#IGraph)

## Properties

### `adjacencyList: ReadonlyMap<T, ReadonlySet<T>>`

Read-only access to the graph's adjacency list as a map of vertices to their neighbors.

## Methods

### `constructor(params?: TGraphConstructorParams<T>): IGraph<T>`

Creates empty instance with optional custom key selector.

###### Params:

| Name   | Type                         | Required | Default | Description                                       |
|--------|------------------------------|----------|---------|---------------------------------------------------|
| params | `TGraphConstructorParams<T>` | -        | -       | Optional parameters including custom key selector |

<br><br>

### `weight(): number`

Sum of all edges in graph

<br><br>

### `vertices(): Array<T>`

Only vertices itself without edges and weight info

<br><br>

### `verticesCount(): number`

Count of vertices

<br><br>

### `edgesCount(): number`

Count of all edges (it's different in directed and undirected graphs)

<br><br>

### `addVertex(value: T): IGraph<T>`

Create new graph node

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

###### Throws: [`IsAlreadyExistsException`](/api/exceptions) when vertex is already exists

<br><br>

### `hasVertex(value: T): boolean`

Check if graph has given vertex

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

<br><br>

### `getVertexKey(data: T): string`

Get the string key representation of a vertex using the key selector function.

###### Params:

| Name | Type | Required | Default | Description                    |
|------|------|----------|---------|--------------------------------|
| data | `T`  | +        | -       | The vertex data to get key for |

<br><br>

### `getVertexNeighbors(data: T): Set<T>`

Get the set of neighboring vertices for a given vertex.

###### Params:

| Name | Type | Required | Default | Description                          |
|------|------|----------|---------|--------------------------------------|
| data | `T`  | +        | -       | The vertex data to get neighbors for |

###### Throws: [`IsNotFoundException`](/api/exceptions) when vertex is not found

<br><br>

### `addEdge(from: T, to: T, weight?: number): IGraph<T>`

Add new edge between two given vertices

###### Params:

| Name   | Type     | Required | Default | Description  |
|--------|----------|----------|---------|--------------|
| from   | `T`      | +        | -       | Start vertex |
| to     | `T`      | +        | -       | End vertex   |
| weight | `number` | -        | 0       | Edge weight  |

###### Throws: [`IsNotFoundException`](/api/exceptions) when one of vertices was not found

::: tip Difference between directed and undirected graphs
In case of undirected graph, edges A->B and B->A are the same  
Instead, in case of directed graph, they are not equal
:::

::: tip When edge already exists
In case of already existed edge, its weight just will be updated
:::

<br><br>

### `removeEdge(from: T, to: T): IGraph<T>`

Remove edge between two given vertices

###### Params:

| Name | Type | Required | Default | Description  |
|------|------|----------|---------|--------------|
| from | `T`  | +        | -       | Start vertex |
| to   | `T`  | +        | -       | End vertex   |

###### Throws: [`IsNotFoundException`](/api/exceptions) when edge to remove was not found

<br><br>

### `hasEdge(from: T, to: T): boolean`

Check if graph has edge between two given vertices

###### Params:

| Name | Type | Required | Default | Description  |
|------|------|----------|---------|--------------|
| from | `T`  | +        | -       | Start vertex |
| to   | `T`  | +        | -       | End vertex   |

<br><br>

### `getEdgeWeight(from: T, to: T): number`

Get weight of edge between two given vertices

###### Params:

| Name | Type | Required | Default | Description  |
|------|------|----------|---------|--------------|
| from | `T`  | +        | -       | Start vertex |
| to   | `T`  | +        | -       | End vertex   |

<br><br>

<br><br>

### `removeVertex(data: T): IGraph<T>`

Remove a vertex and all its connected edges from the graph.

###### Params:

| Name | Type | Required | Default | Description               |
|------|------|----------|---------|---------------------------|
| data | `T`  | +        | -       | The vertex data to remove |

###### Throws: [`IsNotFoundException`](/api/exceptions) when vertex to remove was not found
