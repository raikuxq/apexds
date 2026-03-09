# has-path

Guide: [/guide/algorithms/graph/has-path](/guide/algorithms/graph/has-path)

### Signature

```ts
hasPath(graph, from, to, strategy);
```

### Params:

| Name     | Type                                                                          | Required | Default | Description      |
|----------|-------------------------------------------------------------------------------|----------|---------|------------------|
| graph    | [`IGraph<T>`](/api/types/interfaces#IGraph)                                   | +        |         | Given graph      |
| from     | `T`                                                                           | +        |         | Start of path    |
| to       | `T`                                                                           | +        |         | End of path      |
| strategy | [`IGraphIterationStrategy<T>`](/api/types/interfaces#IGraphIterationStrategy) | +        |         | BFS/DFS/Dijkstra |

### data-structures

`Boolean`

### Throws:

#### [`IsNotFoundException`](/api/exceptions) when start vertex does not exist

#### [`IsNotFoundException`](/api/exceptions) when end vertex does not exist
