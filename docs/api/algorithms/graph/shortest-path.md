# shortest-path

Guide: [/api/algorithms/graph/shortest-path](/api/algorithms/graph/shortest-path)

### Signature

```ts
shortestPath(graph, from, to, strategy);
```

### Params:

| Name     | Type                                                                          | Required | Default | Description   |
|----------|-------------------------------------------------------------------------------|----------|---------|---------------|
| graph    | [`IGraph<T>`](/api/types/interfaces#IGraph)                                   | +        |         | Given graph   |
| from     | `T`                                                                           | +        |         | Start of path |
| to       | `T`                                                                           | +        |         | End of path   |
| strategy | [`IGraphIterationStrategy<T>`](/api/types/interfaces#IGraphIterationStrategy) | +        |         | BFS/Dijkstra  |

### Returns:

#### `Array<T>`

<br>

### Throws:

#### [`IsNotFoundException`](/api/exceptions) when start vertex does not exist

#### [`IsNotFoundException`](/api/exceptions) when end vertex does not exist

#### [`IllegalStateException`](/api/exceptions) when there is no path at all between two vertices
