import IGraph from "src/app/types/IGraph";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";
import DirectedGraph from "src/app/data-structures/Graph/core/DirectedGraph";
import { EnumGraphType } from "src/app/types/EnumGraphType";
import { presenterGraphviz } from "src/app/data-structures/Graph/presenter/presenterGraphviz";

describe("Graph Presenter Graphviz", () => {
  describe.each([EnumGraphType.DIRECTED, EnumGraphType.UNDIRECTED])(
    "%s graph",
    (graphType: EnumGraphType) => {
      const isDirected = graphType === EnumGraphType.DIRECTED;
      const expectedHeader = isDirected ? "digraph G {" : "graph G {";
      const expectedConnector = isDirected ? "->" : "--";

      const createCleanGraph = <T>(): IGraph<T> =>
        isDirected ? new DirectedGraph<T>() : new UndirectedGraph<T>();

      it("should render correct header, global styles and empty structure", () => {
        const graph = createCleanGraph<string>();
        const dot = presenterGraphviz(graph);

        expect(dot).toContain(expectedHeader);
        expect(dot).toContain("rankdir=LR;");
        expect(dot).toContain("node [shape=circle");
        expect(dot).toContain("edge [fontname=");
        expect(dot.endsWith("}")).toBe(true);
      });

      it("should contain all vertices and wrap them in quotes", () => {
        const graph = createCleanGraph<string>();
        graph.addVertex("A").addVertex("B Node");

        const dot = presenterGraphviz(graph);

        expect(dot).toContain('  "A";');
        expect(dot).toContain('  "B Node";');
      });

      it("should contain correct edge connection with weight and color", () => {
        const graph = createCleanGraph<number>();
        graph.addVertex(1).addVertex(2);
        graph.addEdge(1, 2, 100);

        const dot = presenterGraphviz(graph);

        expect(dot).toContain(
          `"1" ${expectedConnector} "2" [label="100", color="#333333"];`,
        );
      });

      it("should render only color attribute if weight is 0", () => {
        const graph = createCleanGraph<number>();
        graph.addVertex(1).addVertex(2);
        graph.addEdge(1, 2, 0);

        const dot = presenterGraphviz(graph);
        expect(dot).toContain(
          `"1" ${expectedConnector} "2" [color="#333333"];`,
        );
        expect(dot).not.toContain("label=");
      });

      it("should handle self-loops", () => {
        const graph = createCleanGraph<string>();
        graph.addVertex("Self");
        graph.addEdge("Self", "Self", 5);

        const dot = presenterGraphviz(graph);
        expect(dot).toContain(
          `"Self" ${expectedConnector} "Self" [label="5", color="#333333"];`,
        );
      });

      if (graphType === EnumGraphType.UNDIRECTED) {
        it("should not duplicate edges in undirected mode", () => {
          const graph = createCleanGraph<number>();
          graph.addVertex(1).addVertex(2);
          graph.addEdge(1, 2, 50);

          const dot = presenterGraphviz(graph);
          const occurrences = (
            dot.match(new RegExp(expectedConnector, "g")) || []
          ).length;
          expect(occurrences).toBe(1);
        });
      }

      if (graphType === EnumGraphType.DIRECTED) {
        it("should render multiple directed edges between same nodes", () => {
          const graph = createCleanGraph<string>();
          graph.addVertex("A").addVertex("B");
          graph.addEdge("A", "B", 1).addEdge("B", "A", 2);

          const dot = presenterGraphviz(graph);
          expect(dot).toContain('"A" -> "B" [label="1", color="#333333"];');
          expect(dot).toContain('"B" -> "A" [label="2", color="#333333"];');
        });
      }

      it("should render isolated vertices alongside connected ones", () => {
        const graph = createCleanGraph<number>();
        graph.addVertex(1).addVertex(2).addVertex(3);
        graph.addEdge(1, 2);

        const dot = presenterGraphviz(graph);
        expect(dot).toContain('"1";');
        expect(dot).toContain('"2";');
        expect(dot).toContain('"3";');
        expect(dot).toContain(`"1" ${expectedConnector} "2"`);
      });
    },
  );
});
