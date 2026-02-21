import DirectedGraph from "src/app/data-structures/Graph/core/DirectedGraph";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";
import { shortestPath } from "src/app/data-structures/Graph/searching/shortestPath";
import { hasPath } from "src/app/data-structures/Graph/searching/hasPath";
import { presenterAdjacencyMatrix } from "src/app/data-structures/Graph/presenter/presenterAdjacencyMatrix";
import { presenterAdjacencyLists } from "src/app/data-structures/Graph/presenter/presenterAdjacencyLists";
import { presenterJson } from "src/app/data-structures/Graph/presenter/presenterJson";
import { presenterGraphviz } from "src/app/data-structures/Graph/presenter/presenterGraphviz";
import { EnumGraphTraversalType } from "src/app/types/EnumGraphTraversalType";
import GraphIteratorBFS from "src/app/data-structures/Graph/iterator/GraphIteratorBFS";
import GraphIteratorDFS from "src/app/data-structures/Graph/iterator/GraphIteratorDFS";
import GraphIteratorDijkstra from "src/app/data-structures/Graph/iterator/GraphIteratorDijkstra";
import IGraph from "src/app/types/IGraph";

interface IBenchmarkStats {
  [key: string]: string;
}

const runGraphBenchmark = (type: "DIRECTED" | "UNDIRECTED"): void => {
  const V_COUNT: number = 150_000;
  const E_COUNT: number = 750_000;
  const SMALL_V: number = 3_000;

  console.log(
    `\n ${type} GRAPH BENCHMARK: Vertices = ${V_COUNT}, Edges = ${E_COUNT}`,
  );
  const stats: IBenchmarkStats = {};

  const getMem = (): string =>
    (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB";

  const mark = (name: string, fn: () => void): void => {
    const start: number = performance.now();
    fn();
    const end: number = performance.now();
    stats[name] = `${(end - start).toFixed(2)} ms`;
  };

  const graph: IGraph<number> =
    type === "DIRECTED"
      ? new DirectedGraph<number>()
      : new UndirectedGraph<number>();

  mark("01. Batch Ingestion", () => {
    for (let i = 0; i < V_COUNT; i++) graph.addVertex(i);
    for (let i = 0; i < E_COUNT; i++) {
      const from: number = Math.floor(Math.random() * V_COUNT);
      const to: number = (from + 1 + Math.floor(Math.random() * 50)) % V_COUNT;
      graph.addEdge(from, to, Math.random() * 100);
    }
  });

  mark("02. Iterator BFS (10k steps)", () => {
    const it = new GraphIteratorBFS(graph);
    it.initIterator(0);
    for (let i = 0; i < 10000 && it.hasNext(); i++) it.next();
  });

  mark("03. Iterator DFS (10k steps)", () => {
    const it = new GraphIteratorDFS(graph);
    it.initIterator(0);
    for (let i = 0; i < 10000 && it.hasNext(); i++) it.next();
  });

  mark("04. Iterator Dijkstra (10k steps)", () => {
    const it = new GraphIteratorDijkstra(graph);
    it.initIterator(0);
    for (let i = 0; i < 10000 && it.hasNext(); i++) it.next();
  });

  mark("05 a. hasPath (BFS)", () => {
    hasPath<number>({
      graph,
      from: 0,
      to: V_COUNT - 1,
      traversalType: EnumGraphTraversalType.BFS,
    });
  });

  mark("05 b. hasPath (DFS)", () => {
    hasPath<number>({
      graph,
      from: 0,
      to: V_COUNT - 1,
      traversalType: EnumGraphTraversalType.DFS,
    });
  });

  mark("05 c. hasPath (Dijkstra)", () => {
    hasPath<number>({
      graph,
      from: 0,
      to: V_COUNT - 1,
      traversalType: EnumGraphTraversalType.DIJKSTRA,
    });
  });

  mark("06 a. shortestPath (BFS)", () => {
    shortestPath<number>({
      graph,
      from: 0,
      to: V_COUNT - 1,
      traversalType: EnumGraphTraversalType.BFS,
    });
  });

  mark("06 b. shortestPath (DFS)", () => {
    shortestPath<number>({
      graph,
      from: 0,
      to: V_COUNT - 1,
      traversalType: EnumGraphTraversalType.DFS,
    });
  });

  mark("06 c. shortestPath (Dijkstra)", () => {
    shortestPath<number>({
      graph,
      from: 0,
      to: V_COUNT - 1,
      traversalType: EnumGraphTraversalType.DIJKSTRA,
    });
  });

  mark("07. Presenter: Adjacency List", () => {
    presenterAdjacencyLists<number>(graph);
  });

  mark("08. Presenter: JSON (Object)", () => {
    presenterJson<number>(graph, true);
  });

  mark("9. Presenter: Graphviz (DOT)", () => {
    presenterGraphviz<number>(graph);
  });

  const smallGraph: IGraph<number> =
    type === "DIRECTED"
      ? new DirectedGraph<number>()
      : new UndirectedGraph<number>();

  for (let i = 0; i < SMALL_V; i++) smallGraph.addVertex(i);
  mark(`10. Presenter: Matrix (V=${SMALL_V})`, () => {
    presenterAdjacencyMatrix<number>(smallGraph);
  });

  mark("11. Cascade Removal (300 ops)", () => {
    for (let i = 0; i < 300; i++) {
      const target: number = Math.floor(Math.random() * V_COUNT);
      if (graph.hasVertex(target)) {
        graph.removeVertex(target);
      }
    }
  });

  stats["Final Memory Usage"] = getMem();
  console.table(stats);
};

const runComparison = (): void => {
  runGraphBenchmark("DIRECTED");
  runGraphBenchmark("UNDIRECTED");
};

runComparison();
