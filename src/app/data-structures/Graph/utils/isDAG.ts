import IGraph from "src/app/types/IGraph";
import { topologicalSort } from "src/app/data-structures/Graph/sort/topologicalSort";
import IllegalStateException from "src/app/exceptions/base/IllegalStateException";
import DirectedGraph from "src/app/data-structures/Graph/core/DirectedGraph";

/**
 * Check is graph Directed Acyclic Graph
 * @param graph
 */
export const isDirectedAcyclicGraph = <T>(graph: IGraph<T>): boolean => {
  try {
    if (!(graph instanceof DirectedGraph)) {
      return false;
    }

    topologicalSort(graph);
    return true;
  } catch (e) {
    if (e instanceof IllegalStateException) {
      return false;
    }
    throw e;
  }
};
