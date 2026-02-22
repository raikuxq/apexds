export default interface IGraph<T> extends Iterable<T> {
  readonly adjacencyList: ReadonlyMap<T, ReadonlySet<T>>;

  weight(): number;
  vertices(): Array<T>;
  verticesCount(): number;
  edgesCount(): number;

  addVertex(data: T): this;
  removeVertex(data: T): this;
  hasVertex(data: T): boolean;
  getVertexKey(data: T): string;
  getVertexNeighbors(data: T): Set<T>;

  addEdge(from: T, to: T, weight?: number): this;
  removeEdge(from: T, to: T): this;
  hasEdge(from: T, to: T): boolean;
  getEdgeWeight(from: T, to: T): number;
}
