# UndirectedGraph\<T> / DirectedGraph\<T>

Guide: [/guide/data-structures/graph](/guide/data-structures/graph)

## Generic Types

`T` - type of collection elements

## Implements interfaces

### [`IGraph`](/api/types/interfaces#IGraph)

## Methods

### `constructor(): IGraph<T>`

Creates empty instance

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

### `removeVertex(value: T): IGraph<T>`

Remove vertex and all related edges

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

###### Throws: [`IsNotFoundException`](/api/exceptions) when vertex to remove was not found

<br><br>

### `hasVertex(value: T): boolean`

Check if graph has given vertex

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

<br><br>

### `getVertexNeighbors(value: T): Array<T>`

Get neighbor vertices of given vertex

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
