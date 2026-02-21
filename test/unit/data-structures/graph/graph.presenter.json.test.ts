import DirectedGraph from "src/app/data-structures/Graph/core/DirectedGraph";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";
import {
  presenterJson,
  IGraphJsonOutput,
} from "src/app/data-structures/Graph/presenter/presenterJson";

describe("Graph Presenter JSON", () => {
  describe("Directed graph", () => {
    const graph = new DirectedGraph<string>();
    graph.addVertex("A").addVertex("B").addEdge("A", "B", 15);

    it("should return correct JSON object structure", () => {
      const result = presenterJson(graph, true) as IGraphJsonOutput<string>;

      expect(result.type).toBe("directed");
      expect(result.vertices).toEqual(["A", "B"]);
      expect(result.edges).toHaveLength(1);
      expect(result.edges[0]).toEqual({
        from: "A",
        to: "B",
        weight: 15,
      });
    });

    it("should return formatted string by default", () => {
      const result = presenterJson(graph);
      expect(typeof result).toBe("string");
      expect(JSON.parse(result as string)).toMatchObject({ type: "directed" });
    });
  });

  describe("Undirected graph", () => {
    const graph = new UndirectedGraph<string>();
    graph.addVertex("A").addVertex("B").addEdge("A", "B", 5);

    it("should not duplicate edges in undirected mode", () => {
      const result = presenterJson(graph, true) as IGraphJsonOutput<string>;
      expect(result.type).toBe("undirected");
      expect(result.edges).toHaveLength(1);
    });
  });

  describe("Custom objects with keySelector", () => {
    interface User {
      id: number;
      name: string;
    }
    const keySelector = (u: User) => `user_${u.id}`;

    it("should use getVertexKey for edge references", () => {
      const graph = new DirectedGraph<User>({ customKeySelector: keySelector });
      const u1 = { id: 1, name: "Alice" };
      const u2 = { id: 2, name: "Bob" };

      graph.addVertex(u1).addVertex(u2).addEdge(u1, u2, 0);

      const result = presenterJson(graph, true) as IGraphJsonOutput<User>;

      expect(result.vertices).toContainEqual(u1);
      expect(result.vertices).toContainEqual(u2);
      expect(result.edges[0].from).toBe("user_1");
      expect(result.edges[0].to).toBe("user_2");
    });
  });

  describe("Isolated components", () => {
    it("should render vertices without edges", () => {
      const graph = new DirectedGraph<string>();
      graph.addVertex("A").addVertex("B");

      const result = presenterJson(graph, true) as IGraphJsonOutput<string>;
      expect(result.vertices).toHaveLength(2);
      expect(result.edges).toHaveLength(0);
    });
  });
});
