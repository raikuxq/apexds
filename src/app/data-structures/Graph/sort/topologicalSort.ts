import IGraph from "src/app/types/IGraph";
import IllegalStateException from "src/app/exceptions/base/IllegalStateException";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";

/**
 * Performs a topological sort on a Directed Acyclic Graph (DAG).
 *
 * @template T
 * @param {IGraph<T>} graph - The graph instance to sort.
 * @returns {Array<T>} An array of vertices in topological order.
 * @throws {IllegalStateException} When a cycle is detected in the graph.
 */
export const topologicalSort = <T>(graph: IGraph<T>): Array<T> => {
  const result: T[] = [];
  const visited = new Map<T, boolean>();
  const recursionStack = new Map<T, boolean>();
  const adjacencyList = graph.adjacencyList;

  if (graph instanceof UndirectedGraph) {
    throw new IllegalStateException(
      "Topological sort is not defined for undirected graphs",
    );
  }

  const visit = (vertex: T): void => {
    if (recursionStack.get(vertex)) {
      throw new IllegalStateException(
        "Cycle detected: topological sort is only possible for DAGs",
      );
    }

    if (visited.get(vertex)) {
      return;
    }

    visited.set(vertex, true);
    recursionStack.set(vertex, true);

    const neighbors = graph.getVertexNeighbors(vertex);

    for (const neighbor of neighbors) {
      visit(neighbor);
    }

    recursionStack.set(vertex, false);
    result.push(vertex);
  };

  for (const vertex of adjacencyList.keys()) {
    if (!visited.get(vertex)) {
      visit(vertex);
    }
  }

  return result.reverse();
};
