# Changelog

## v3.1.0

### Added
- **Graph Algorithms**: Implemented `topologicalSort` for Directed Acyclic Graphs (DAG) with cycle detection.
- **Graph Presenters**: Added `presenterGraphviz` for DOT format visualization and `presenterJson` for easy serialization.
- **Key Selection**: Introduced `customKeySelector` in `AbstractGraph` constructor to support complex objects as vertices.
- **Public API**: Exposed `getVertexKey(vertex: T)` in `IGraph` interface for external tools and presenters.

### Fixed
- **Undirected Edges**: Fixed edge duplication in undirected graphs by implementing consistent key sorting.
- **Object Identification**: Resolved `[object Object]` string conversion issues by using IDs from the custom key selector.

## v3.0.0
- **Removed HashTable**
- **Removed LoopedArray**
- **Updated Graph structure**
- **Added vite builder and fixed bundle size**
