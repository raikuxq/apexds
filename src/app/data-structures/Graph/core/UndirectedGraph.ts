import AbstractGraph, {
  TGraphConstructorParams,
} from "src/app/data-structures/Graph/core/AbstractGraph";
import GraphEdge from "src/app/data-structures/Graph/core/GraphEdge";
import IsNotFoundException from "src/app/exceptions/IsNotFoundException";

/**
 * Undirected graph - data structure where edges with same pair of vertices are equal
 * @example A-B is same as B-A
 */
export default class UndirectedGraph<T> extends AbstractGraph<T> {
  /**
   * @inheritDoc
   */
  public constructor(params?: TGraphConstructorParams<T>) {
    super(params);
  }

  /**
   * @inheritDoc
   */
  protected getEdgeKey(from: T, to: T): string {
    const fromKey = this.keySelector(from);
    const toKey = this.keySelector(to);
    return toKey > fromKey
      ? fromKey + UndirectedGraph.EDGE_KEY_SEPARATOR + toKey
      : toKey + UndirectedGraph.EDGE_KEY_SEPARATOR + fromKey;
  }

  /**
   * @inheritDoc
   * @throws {IsNotFoundException} when vertex was not found
   */
  protected getEdgeByValue(from: T, to: T): GraphEdge<T> {
    const key = this.getEdgeKey(from, to);
    const edge = this._edges.get(key);

    if (!edge) {
      throw new IsNotFoundException("Edge not found");
    }

    return edge;
  }

  /**
   * @inheritDoc
   */
  public hasEdge(from: T, to: T): boolean {
    return this._edges.has(this.getEdgeKey(from, to));
  }

  /**
   * @inheritDoc
   * @throws {IsNotFoundException} when vertex was not found
   */
  public addEdge(from: T, to: T, weight?: number): this {
    try {
      const fromVertex = this.tryFindVertex(from);
      const toVertex = this.tryFindVertex(to);
      const key = this.getEdgeKey(fromVertex, toVertex);

      /** When edge is already exist, we should only update its weight */
      if (this.hasEdge(fromVertex, toVertex)) {
        if (typeof weight === "number") {
          this.updateEdgeWeight(fromVertex, toVertex, weight);
        }
      } else {
        const edge = new GraphEdge(fromVertex, toVertex, weight);
        this._edges.set(key, edge);
        this._vertices.get(fromVertex)?.add(toVertex);
        this._vertices.get(toVertex)?.add(fromVertex);
      }
    } catch {
      throw new IsNotFoundException(
        "Edge cannot be added because one of vertices was not found",
      );
    }

    return this;
  }

  /**
   * @inheritDoc
   * @throws {IsNotFoundException} when vertex was not found
   */
  public removeEdge(from: T, to: T): this {
    const fromVertex = this.tryFindVertex(from);
    const toVertex = this.tryFindVertex(to);
    const key = this.getEdgeKey(fromVertex, toVertex);

    if (!this.hasEdge(fromVertex, toVertex)) {
      throw new IsNotFoundException(
        "Edge cannot be removed because edge was not found",
      );
    }

    this._edges.delete(key);

    this._vertices.get(fromVertex)?.delete(toVertex);
    this._vertices.get(toVertex)?.delete(fromVertex);

    return this;
  }
}
