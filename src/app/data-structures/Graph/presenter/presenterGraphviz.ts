import IGraph from "src/app/types/IGraph";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";

/**
 * Get graph in Graphviz DOT format string
 *
 * @example
 * digraph G {
 *   "A" -> "B" [label="10"];
 *   "B" -> "C" [label="5"];
 * }
 */
export const presenterGraphviz = <T>(
  graph: IGraph<T>,
  graphName: string = "G",
): string => {
  const isUndirected = graph instanceof UndirectedGraph;
  const type = isUndirected ? "graph" : "digraph";
  const connector = isUndirected ? "--" : "->";

  const lines: string[] = [];

  lines.push(`${type} ${graphName} {`);
  lines.push(`  rankdir=LR;`);
  lines.push(
    `  node [shape=circle, fontname="Arial", style=filled, fillcolor="#f9f9f9"];`,
  );
  lines.push(`  edge [fontname="Arial", fontsize=10];`);

  const vertices = graph.vertices();

  vertices.forEach((vertex) => {
    lines.push(`  "${vertex}";`);
  });

  const visitedEdges = new Set<string>();

  vertices.forEach((from) => {
    const neighbors = graph.getVertexNeighbors(from);

    neighbors.forEach((to) => {
      const edgeKey = isUndirected
        ? [String(from), String(to)].sort().join("_")
        : `${from}_${to}`;

      if (visitedEdges.has(edgeKey)) return;
      visitedEdges.add(edgeKey);

      const weight = graph.getEdgeWeight(from, to);
      const attributes: string[] = [];

      if (weight !== 0) {
        attributes.push(`label="${weight}"`);
      }

      attributes.push(`color="#333333"`);

      const attrString =
        attributes.length > 0 ? ` [${attributes.join(", ")}]` : "";
      lines.push(`  "${from}" ${connector} "${to}"${attrString};`);
    });
  });

  lines.push("}");

  return lines.join("\n");
};
