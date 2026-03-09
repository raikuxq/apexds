import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "apexds",
  description: "Data structures library for TypeSript",

  themeConfig: {
    siteTitle: "@apexds",
    nav: [
      { text: "Documentation", link: "/guide/" },
    ],

    sidebar: [
      {
        text: "Getting started",
        link: "/guide/",
        collapsed: false,
      },
      {
        text: "Linear Data structures",
        collapsed: false,
        items: [
          { text: "Stack", link: "/guide/data-structures/stack" },
          { text: "Queue", link: "/guide/data-structures/queue" },
          { text: "LinkedList", link: "/guide/data-structures/linked-list" },
          { text: "BinaryHeap", link: "/guide/data-structures/binary-heap" },
          { text: "PriorityQueue", link: "/guide/data-structures/priority-queue" }
        ]
      },
      {
        text: "Graphs",
        collapsed: false,
        items: [
          {
            text: "Graph", link: "/guide/data-structures/graph",
            items: [
              { text: "DirectedGraph", link: "/api/algorithms/graph/directed-graph" },
              { text: "UndirectedGraph", link: "/api/algorithms/graph/undirected-graph" }
            ]
          },
          {
            text: "factories",
            items: [
              { text: "createGraph", link: "/api/algorithms/graph/create-graph" },
              { text: "createGraphFromMatrix", link: "/api/algorithms/graph/create-graph-from-matrix" }
            ]
          },
          {
            text: "iterator traversal",
            items: [
              { text: "GraphIteratorBFS", link: "/guide/algorithms/graph/iterator-bfs" },
              { text: "GraphIteratorDFS", link: "/guide/algorithms/graph/iterator-dfs" },
              { text: "GraphIteratorDijkstra", link: "/guide/algorithms/graph/iterator-dijkstra" },
              { text: "createGraphIterator", link: "/api/algorithms/graph/create-iterator" }
            ]
          },
          {
            text: "searching",
            items: [
              { text: "hasPath", link: "/api/algorithms/graph/has-path" },
              { text: "shortestPath", link: "/api/algorithms/graph/shortest-path" }
            ]
          },
          {
            text: "presenter",
            items: [
              { text: "presenterJson", link: "/api/algorithms/graph/presenter-json" },
              { text: "presenterGraphviz", link: "/api/algorithms/graph/presenter-graphviz" },
              { text: "presenterAdjacencyLists", link: "/api/algorithms/graph/presenter-adjacency-lists" },
              { text: "presenterAdjacencyMatrix", link: "/api/algorithms/graph/presenter-adjacency-matrix" }
            ]
          },
          {
            text: "utils",
            items: [
              { text: "transposeDirectedGraph", link: "/api/algorithms/graph/transpose-directed-graph" },
              { text: "topologicalSort", link: "/api/algorithms/graph/topological-sort" }
            ]
          }
        ]
      },
      {
        text: "Binary Search Tree",
        collapsed: false,
        items: [
          { text: "RawBinarySearchTree", link: "/guide/data-structures/binary-tree" },
          { text: "RandBinarySearchTree", link: "/guide/data-structures/binary-tree-rand" }
        ]
      },
      {
        text: "Algorithms",
        collapsed: false,
        items: [
          { text: "memorize", link: "/guide/algorithms/memoize" },
          { text: "factorial", link: "/guide/algorithms/factorial" },
          { text: "fibonacci", link: "/guide/algorithms/fibonacci" },
          { text: "transposeMatrix", link: "/guide/algorithms/transpose-matrix" },
          {
            text: "sorting",
            items: [
              { text: "mergeSort", link: "/guide/algorithms/sort/merge" },
              { text: "selectionSort", link: "/guide/algorithms/sort/selection" },
              { text: "quicksort", link: "/guide/algorithms/sort/quick" },
              { text: "bubbleSort", link: "/guide/algorithms/sort/bubble" },
              { text: "insertionSort", link: "/guide/algorithms/sort/insertion" }
            ]
          }
        ]
      },
      {
        text: "Types Info",
        collapsed: false,
        items: [
          { text: "Types", link: "/api/types/types" },
          { text: "Interfaces", link: "/api/types/interfaces" },
          { text: "Enumerable", link: "/api/types/enumerable" },
          {
            text: "Exceptions",
            link: "/api/exceptions"
          }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/raikuxq/apexds" },
      { icon: "npm", link: "https://www.npmjs.com/package/@apexds/core" }
    ],

    footer: {
      message: "MIT Licensed",
      copyright: "Copyright © 2026 @raikuxq (Alexey Stepanov)"
    }
  },

  markdown: {
    languageAliases: {
      ts: "typescript"
    }
  }
});