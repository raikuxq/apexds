import IGraph from "src/app/types/IGraph";

/**
 * Get graph adjacency list
 *
 * @example
 *
 * Directed graph:
 * - Bob [Maria]
 * - Maria [Bob, John]
 * - John []
 *
 * @example
 *
 * Undirected graph:
 * - Bob [Maria]
 * - Maria [Bob, John]
 * - John [Maria]
 **/
export const presenterAdjacencyLists = <T>(
  graph: IGraph<T>,
): ReadonlyMap<T, ReadonlySet<T>> => {
  return graph.adjacencyList;
};
