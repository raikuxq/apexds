import AbstractGraph, {
  TGraphConstructorParams,
} from "src/app/data-structures/Graph/core/AbstractGraph";
import GraphEdge from "src/app/data-structures/Graph/core/GraphEdge";
import IsNotFoundException from "src/app/exceptions/IsNotFoundException";

/**
 * Directed graph - data structure where edges with same pair of vertices are not equal
 * @example A-B is not the same as B-A
 */
export default class DirectedGraph<T> extends AbstractGraph<T> {
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
    return fromKey + AbstractGraph.EDGE_KEY_SEPARATOR + toKey;
  }

  /**
   * @inheritDoc
   * @throws {IsNotFoundException} when vertex was not found
   */
  protected getEdgeByValue(from: T, to: T): GraphEdge<T> {
    const key = this.getEdgeKey(from, to);
    const edge = this._edges.get(key);

    if (!edge) {
      throw new IsNotFoundException("Edge was not found");
    }

    return edge;
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

      if (this.hasEdge(fromVertex, toVertex)) {
        if (typeof weight === "number") {
          this.updateEdgeWeight(fromVertex, toVertex, weight);
        }
      } else {
        const edge = new GraphEdge(fromVertex, toVertex, weight);

        this._edges.set(key, edge);
        this._vertices.get(fromVertex)?.add(toVertex);
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

    if (!this._edges.has(key)) {
      throw new IsNotFoundException(
        "Edge cannot be removed because edge was not found",
      );
    }

    this._vertices.get(fromVertex)?.delete(toVertex);
    this._edges.delete(key);

    return this;
  }

  /**
   * @inheritDoc
   */
  public removeVertex(value: T): this {
    const vertexToRemove = this.tryFindVertex(value);

    for (const [key, edge] of this._edges.entries()) {
      if (
        edge.fromVertex === vertexToRemove ||
        edge.toVertex === vertexToRemove
      ) {
        this._edges.delete(key);
      }
    }

    this._vertices.forEach((neighborsSet) => {
      neighborsSet.delete(vertexToRemove);
    });

    this._vertices.delete(vertexToRemove);

    return this;
  }
}
