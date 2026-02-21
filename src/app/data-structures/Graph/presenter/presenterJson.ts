import IGraph from "src/app/types/IGraph";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";

export interface IGraphJsonOutput<T> {
  type: "directed" | "undirected";
  vertices: T[];
  edges: {
    from: string;
    to: string;
    weight: number;
  }[];
}

/**
 * Serializes graph to JSON format (object or string).
 * Uses getVertexKey for identifying objects in edges.
 *
 * @template T Type of data in vertices
 * @param {IGraph<T>} graph Graph instance
 * @param {boolean} [asObject=false] If true, returns an object; otherwise, a JSON string
 * @returns {string | IGraphJsonOutput<T>} Serialized graph data
 */
export const presenterJson = <T>(
  graph: IGraph<T>,
  asObject: boolean = false,
): string | IGraphJsonOutput<T> => {
  const isUndirected = graph instanceof UndirectedGraph;
  const vertices = graph.vertices();
  const visitedEdges = new Set<string>();

  const output: IGraphJsonOutput<T> = {
    type: isUndirected ? "undirected" : "directed",
    vertices: vertices,
    edges: [],
  };

  vertices.forEach((from) => {
    const fromId = graph.getVertexKey(from);
    const neighbors = graph.getVertexNeighbors(from);

    neighbors.forEach((to) => {
      const toId = graph.getVertexKey(to);
      const edgeKey = isUndirected
        ? [fromId, toId].sort().join("_")
        : `${fromId}_${toId}`;

      if (visitedEdges.has(edgeKey)) return;
      visitedEdges.add(edgeKey);

      output.edges.push({
        from: fromId,
        to: toId,
        weight: graph.getEdgeWeight(from, to),
      });
    });
  });

  return asObject ? output : JSON.stringify(output, null, 2);
};
