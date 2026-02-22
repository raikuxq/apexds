import DirectedGraph from "src/app/data-structures/Graph/core/DirectedGraph";
import { topologicalSort } from "src/app/data-structures/Graph/sort/topologicalSort";
import IllegalStateException from "src/app/exceptions/base/IllegalStateException";

describe("Topological sort algorithm", () => {
  describe("Empty and simple graphs", () => {
    it("should return an empty array for an empty graph", () => {
      const graph = new DirectedGraph<string>();
      expect(topologicalSort(graph)).toEqual([]);
    });

    it("should return a single vertex for a graph with one node", () => {
      const graph = new DirectedGraph<string>();
      graph.addVertex("A");
      expect(topologicalSort(graph)).toEqual(["A"]);
    });
  });

  describe("Linear dependencies", () => {
    it("should sort a simple chain of dependencies", () => {
      const graph = new DirectedGraph<string>();
      graph
        .addVertex("A")
        .addVertex("B")
        .addVertex("C")
        .addEdge("A", "B")
        .addEdge("B", "C");

      expect(topologicalSort(graph)).toEqual(["A", "B", "C"]);
    });

    it("should work correctly regardless of vertex addition order", () => {
      const graph = new DirectedGraph<string>();
      graph
        .addVertex("C")
        .addVertex("A")
        .addVertex("B")
        .addEdge("A", "B")
        .addEdge("B", "C");

      expect(topologicalSort(graph)).toEqual(["A", "B", "C"]);
    });
  });

  describe("Complex DAGs", () => {
    it("should handle multiple branches (diamond shape)", () => {
      const graph = new DirectedGraph<string>();
      graph
        .addVertex("Root")
        .addVertex("Left")
        .addVertex("Right")
        .addVertex("End")
        .addEdge("Root", "Left")
        .addEdge("Root", "Right")
        .addEdge("Left", "End")
        .addEdge("Right", "End");

      const result = topologicalSort(graph);

      expect(result.indexOf("Root")).toBe(0);
      expect(result.indexOf("End")).toBe(3);
      expect(new Set(result).size).toBe(4);
    });

    it("should handle disconnected components", () => {
      const graph = new DirectedGraph<string>();
      graph
        .addVertex("A")
        .addVertex("B")
        .addEdge("A", "B")
        .addVertex("C")
        .addVertex("D")
        .addEdge("C", "D");

      const result = topologicalSort(graph);

      expect(result.indexOf("A")).toBeLessThan(result.indexOf("B"));
      expect(result.indexOf("C")).toBeLessThan(result.indexOf("D"));
      expect(result.length).toBe(4);
    });
  });

  describe("Error handling", () => {
    it("should throw IllegalStateException when a simple cycle is detected", () => {
      const graph = new DirectedGraph<string>();
      graph.addVertex("A").addVertex("B").addEdge("A", "B").addEdge("B", "A");

      expect(() => {
        topologicalSort(graph);
      }).toThrow(IllegalStateException);
    });

    it("should throw IllegalStateException when a large cycle is detected", () => {
      const graph = new DirectedGraph<string>();
      graph
        .addVertex("A")
        .addVertex("B")
        .addVertex("C")
        .addVertex("D")
        .addEdge("A", "B")
        .addEdge("B", "C")
        .addEdge("C", "D")
        .addEdge("D", "B");

      expect(() => {
        topologicalSort(graph);
      }).toThrow(IllegalStateException);
    });
  });
});
