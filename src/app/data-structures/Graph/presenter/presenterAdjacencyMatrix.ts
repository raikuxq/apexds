import IGraph from "src/app/types/IGraph";
import { EDGE_EXISTS_STATE, EDGE_NOT_EXISTS_STATE } from "src/app/constants";
import { TypeArrayMatrix } from "src/app/types/TypeArrayMatrix";

/**
 * Get graph adjacency matrix N x N
 *
 * @example
 *
 * Directed graph:
 * - Bob [Maria]
 * - Maria [Bob, John]
 * - John []
 *
 * Its matrix:
 *       |  Bob  | Maria |  John |
 * Bob   |   0   |   1   |   0   |
 * Maria |   1   |   0   |   1   |
 * John  |   0   |   0   |   0   |
 *
 * @example
 *
 * Undirected graph:
 * - Bob [Mariaэ
 * - Maria [Bob, John]
 * - John [Maria]
 *
 * Its matrix:
 *       |  Bob  | Maria |  John |
 * Bob   |   0   |   1   |   0   |
 * Maria |   1   |   0   |   1   |
 * John  |   0   |   1   |   0   |
 */
export const presenterAdjacencyMatrix = <T>(
  graph: IGraph<T>,
): TypeArrayMatrix => {
  const vertices = graph.vertices();
  const size = vertices.length;
  const vertexToIndex = new Map<T, number>();

  vertices.forEach((v, i) => vertexToIndex.set(v, i));

  const matrix: TypeArrayMatrix = Array.from({ length: size }, () =>
    new Array(size).fill(EDGE_NOT_EXISTS_STATE),
  );

  for (const [vertex, neighbors] of graph.adjacencyList) {
    const rowIndex = vertexToIndex.get(vertex);
    if (rowIndex === undefined) continue;

    for (const neighbor of neighbors) {
      const colIndex = vertexToIndex.get(neighbor);
      if (colIndex !== undefined) {
        matrix[rowIndex][colIndex] = EDGE_EXISTS_STATE;
      }
    }
  }

  return matrix;
};
