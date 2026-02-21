import GraphEdge from "src/app/data-structures/Graph/core/GraphEdge";
import IsNotFoundException from "src/app/exceptions/IsNotFoundException";
import IsAlreadyExistsException from "src/app/exceptions/IsAlreadyExistsException";

export type TKeySelector<T> = (item: T) => string;
export type TGraphConstructorParams<T> = {
  customKeySelector?: TKeySelector<T>;
};

export default abstract class AbstractGraph<T> {
  protected static readonly EDGE_KEY_SEPARATOR: string = "_";

  protected _vertices: Map<T, Set<T>>;
  protected _edges: Map<string, GraphEdge<T>>;

  /**
   * Created empty instance
   */
  protected constructor(params?: TGraphConstructorParams<T>) {
    this._vertices = new Map<T, Set<T>>();
    this._edges = new Map<string, GraphEdge<T>>();
    this.keySelector = params?.customKeySelector ?? ((v: T) => String(v));
  }

  /**
   * Get edge identifier from type
   * @example { id: 'abcd123', name: 'Maria' } => 'abcd123'
   */
  protected readonly keySelector: (vertex: T) => string;

  /**
   * Get edge key string from_to
   * @example Bob_Maria
   * @example Maria_Bob
   */
  protected abstract getEdgeKey(from: T, to: T): string;

  /**
   * Find edge by its from and to vertices
   */
  protected abstract getEdgeByValue(from: T, to: T): GraphEdge<T>;

  /**
   * Get vertices list in array format
   */
  protected getVerticesArrayFormat(): Array<T> {
    return Array.from(this._vertices.keys());
  }

  /**
   * Find vertex in vertices list by its data
   * @throws {IsNotFoundException} when vertex was not found
   */
  protected tryFindVertex(data: T): T {
    const isExists = this._vertices.has(data);

    if (!isExists) {
      throw new IsNotFoundException("Vertex not found");
    }

    return data;
  }

  /**
   * Update edge weight between from and to vertices
   */
  protected updateEdgeWeight(from: T, to: T, weight: number): void {
    const edge = this.getEdgeByValue(from, to);

    edge.weight = weight;
  }

  /**
   * Will remove all vertex relations with others vertices
   */
  protected cascadeRemoveVertexRelations(vertexToRemove: T): void {
    const neighbors = this._vertices.get(vertexToRemove);

    if (neighbors) {
      neighbors.forEach((neighbor) => {
        this._vertices.get(neighbor)?.delete(vertexToRemove);
        this._edges.delete(this.getEdgeKey(neighbor, vertexToRemove));
      });
    }
  }

  /**
   * Will remove all vertices edges with vertex to remove
   */
  protected cascadeRemoveVertexEdges(vertexToRemove: T): void {
    for (const [key, edge] of this._edges.entries()) {
      if (
        edge.fromVertex === vertexToRemove ||
        edge.toVertex === vertexToRemove
      ) {
        this._edges.delete(key);
      }
    }
  }

  /**
   * Get edge key by vertex value
   */
  public getVertexKey(vertex: T): string {
    return this.keySelector(vertex);
  }

  /**
   * Get sum of all graph edges
   */
  public weight(): number {
    let sum = 0;
    for (const edge of this._edges.values()) {
      sum += edge.weight;
    }
    return sum;
  }

  /**
   * Get array of vertices
   */
  public vertices(): Array<T> {
    return this.getVerticesArrayFormat().map((vertex: T) => vertex);
  }

  /**
   * Get vertices count
   */
  public verticesCount(): number {
    return this._vertices.size;
  }

  /**
   * Get edges count
   */
  public edgesCount(): number {
    return this._edges.size;
  }

  /**
   * Add vertex
   * @throws {IsAlreadyExistsException} when vertex is already exists
   */
  public addVertex(data: T): this {
    if (this.hasVertex(data)) {
      throw new IsAlreadyExistsException("Vertex is already exist");
    }

    this._vertices.set(data, new Set<T>());

    return this;
  }

  /**
   * Remove vertex
   * @throws {IsNotFoundException} when vertex is already does not exist
   */
  public removeVertex(data: T): this {
    try {
      const vertexToRemove = this.tryFindVertex(data);

      this.cascadeRemoveVertexEdges(vertexToRemove);
      this.cascadeRemoveVertexRelations(vertexToRemove);
      this._vertices.delete(vertexToRemove);
    } catch {
      throw new IsNotFoundException("Vertex does not exist already");
    }

    return this;
  }

  /**
   * Add edge between two vertices
   */
  public abstract addEdge(from: T, to: T, weight?: number): this;

  /**
   * Remove edge between two vertices
   */
  public abstract removeEdge(from: T, to: T): this;

  /**
   * Get vertex neighbors by its data
   */
  public getVertexNeighbors(data: T): Array<T> {
    const vertex = this.tryFindVertex(data);
    const neighbors = this._vertices.get(vertex);
    return neighbors ? Array.from(neighbors) : [];
  }

  /**
   * Check if graph has vertex
   */
  public hasVertex(data: T): boolean {
    return this._vertices.has(data);
  }

  /**
   * Check if graph has edge between from and to vertices
   */
  public hasEdge(from: T, to: T): boolean {
    return this._edges.has(this.getEdgeKey(from, to));
  }

  /**
   * Get edge weight between from and to vertices
   */
  public getEdgeWeight(from: T, to: T): number {
    const fromVertex = this.tryFindVertex(from);
    const toVertex = this.tryFindVertex(to);

    const edge = this.getEdgeByValue(fromVertex, toVertex);

    return edge.weight;
  }

  /**
   * Iterator
   */
  public *[Symbol.iterator](): IterableIterator<T> {
    yield* this._vertices.keys();
  }
}
