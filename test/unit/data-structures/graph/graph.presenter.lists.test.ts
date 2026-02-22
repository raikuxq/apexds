import IGraph from "src/app/types/IGraph";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";
import DirectedGraph from "src/app/data-structures/Graph/core/DirectedGraph";
import { createGraph } from "src/app/data-structures/Graph/factories/createGraph";
import { EnumGraphType } from "src/app/types/EnumGraphType";
import { presenterAdjacencyLists } from "src/app/data-structures/Graph/presenter/presenterAdjacencyLists";

describe.each([EnumGraphType.DIRECTED, EnumGraphType.UNDIRECTED])(
  "%s graph",
  (graphType: EnumGraphType) => {
    describe("in empty graph", () => {
      const graph: IGraph<number> = createGraph(graphType);

      it("should return empty list", () => {
        const map = presenterAdjacencyLists(graph);
        const emptyMap = new Map<number, number>();
        expect(map).toEqual(emptyMap);
      });
    });

    if (graphType === EnumGraphType.UNDIRECTED) {
      describe("in non-empty graph", () => {
        const graph: IGraph<number> = new UndirectedGraph();
        graph
          .addVertex(1)
          .addVertex(2)
          .addVertex(3)
          .addVertex(4)
          .addEdge(1, 2)
          .addEdge(1, 3)
          .addEdge(3, 4);

        it("should return correct list", () => {
          const list = presenterAdjacencyLists(graph);
          const expectedList = new Map<number, Set<number>>();

          expectedList
            .set(1, new Set([2, 3]))
            .set(2, new Set([1]))
            .set(3, new Set([1, 4]))
            .set(4, new Set([3]));

          expect(list).toEqual(expectedList);
        });
      });
    }
    if (graphType === EnumGraphType.DIRECTED) {
      describe("in non-empty graph", () => {
        const graph: IGraph<number> = new DirectedGraph();
        graph
          .addVertex(1)
          .addVertex(2)
          .addVertex(3)
          .addVertex(4)
          .addEdge(1, 2)
          .addEdge(1, 3)
          .addEdge(3, 4);

        it("should return correct list", () => {
          const list = presenterAdjacencyLists(graph);
          const expectedList = new Map<number, Set<number>>();

          expectedList
            .set(1, new Set([2, 3]))
            .set(2, new Set([]))
            .set(3, new Set([4]))
            .set(4, new Set([]));

          expect(list).toEqual(expectedList);
        });
      });
    }
  },
);
