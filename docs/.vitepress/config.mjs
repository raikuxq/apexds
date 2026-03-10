import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "apexds",
  description: "Data structures library for TypeSript",

  themeConfig: {
    siteTitle: "@apexds",
    nav: [
      { text: "Documentation", link: "/guide/" },
      { text: "API Reference", link: "/api/" }
    ],

    sidebar: {
      "/guide": [
        {
          text: "Getting started",
          link: "/guide/",
          items: [
            {
              text: "Installation",
              link: "/guide/"
            }
          ]
        },
        {
          text: "Base data structures",
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
          items: [
            {
              text: "graph", link: "/guide/data-structures/graph",
              collapsed: true,
              items: [
                { text: "DirectedGraph", link: "/guide/data-structures/directed-graph" },
                { text: "UndirectedGraph", link: "/guide/data-structures/undirected-graph" }
              ]
            },
            {
              text: "factories",
              collapsed: true,
              items: [
                { text: "createGraph", link: "/api/algorithms/graph/create-graph" },
                { text: "createGraphFromMatrix", link: "/api/algorithms/graph/create-graph-from-matrix" }
              ]
            },
            {
              text: "iterator traversal",
              collapsed: true,
              items: [
                { text: "Breadth-First", link: "/guide/algorithms/graph/iterator-bfs" },
                { text: "Depth-First", link: "/guide/algorithms/graph/iterator-dfs" },
                { text: "Dijkstra", link: "/guide/algorithms/graph/iterator-dijkstra" },
                { text: "createGraphIterator", link: "/api/algorithms/graph/create-iterator" }
              ]
            },
            {
              text: "searching",
              collapsed: true,
              items: [
                { text: "Has Path", link: "/api/algorithms/graph/has-path" },
                { text: "Shortest Path", link: "/api/algorithms/graph/shortest-path" }
              ]
            },
            {
              text: "presenter",
              collapsed: true,
              items: [
                { text: "Json", link: "/api/algorithms/graph/presenter-json" },
                { text: "Graphviz", link: "/api/algorithms/graph/presenter-graphviz" },
                { text: "Adjacency Lists", link: "/api/algorithms/graph/presenter-adjacency-lists" },
                { text: "Adjacency Matrix", link: "/api/algorithms/graph/presenter-adjacency-matrix" }
              ]
            },
            {
              text: "utils",
              collapsed: true,
              items: [
                { text: "Transpose", link: "/api/algorithms/graph/transpose-directed-graph" },
                { text: "Topological sort", link: "/api/algorithms/graph/topological-sort" }
              ]
            }
          ]
        },
        {
          text: "Binary Search Tree",
          items: [
            {
              text: "unbalanced",
              collapsed: true,
              link: "/guide/data-structures/binary-tree",
              items: [
                {
                  text: "Raw BST",
                  collapsed: true,
                  link: "/guide/data-structures/binary-tree"
                }
              ]
            },
            {
              text: "balanced",
              collapsed: true,
              link: "/guide/data-structures/binary-tree",
              items: [
                {
                  collapsed: true,
                  text: "Randomized BST", link: "/guide/data-structures/binary-tree-rand"
                }
              ]
            }
          ]
        },
        {
          text: "Algorithms",
          items: [
            {
              text: "sorting",
              collapsed: true,
              items: [
                { text: "mergeSort", link: "/guide/algorithms/sort/merge" },
                { text: "selectionSort", link: "/guide/algorithms/sort/selection" },
                { text: "quicksort", link: "/guide/algorithms/sort/quick" },
                { text: "bubbleSort", link: "/guide/algorithms/sort/bubble" },
                { text: "insertionSort", link: "/guide/algorithms/sort/insertion" }
              ]
            },
            { text: "memorize", link: "/guide/algorithms/memoize" },
            { text: "factorial", link: "/guide/algorithms/factorial" },
            { text: "fibonacci", link: "/guide/algorithms/fibonacci" },
            { text: "transposeMatrix", link: "/guide/algorithms/transpose-matrix" }
          ]
        },
        {
          text: "Types Info",
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
      "/api": [
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
        },
        {
          text: "Base data structures",
          collapsed: false,
          items: [
            { text: "Stack", link: "/api/data-structures/stack" },
            { text: "Queue", link: "/api/data-structures/queue" },
            { text: "LinkedList", link: "/api/data-structures/linked-list" },
            { text: "BinaryHeap", link: "/api/data-structures/binary-heap" },
            { text: "PriorityQueue", link: "/api/data-structures/priority-queue" }
          ]
        },
        {
          text: "Graphs",
          items: [
            {
              text: "graph",
              link: "/api/data-structures/graph",
              collapsed: false,
              items: [
                { text: "DirectedGraph", link: "/api/data-structures/graph" },
                { text: "UndirectedGraph", link: "/api/data-structures/graph" }
              ]
            },
            {
              text: "factories",
              collapsed: false,
              items: [
                { text: "createGraph", link: "/api/algorithms/graph/create-graph" },
                { text: "createGraphFromMatrix", link: "/api/algorithms/graph/create-graph-from-matrix" }
              ]
            },
            {
              text: "iterator traversal",
              collapsed: false,
              items: [
                { text: "GraphIteratorBFS", link: "/api/algorithms/graph/iterator-bfs" },
                { text: "GraphIteratorDFS", link: "/api/algorithms/graph/iterator-dfs" },
                { text: "GraphIteratorDijkstra", link: "/api/algorithms/graph/iterator-dijkstra" },
                { text: "createGraphIterator", link: "/api/algorithms/graph/create-iterator" }
              ]
            },
            {
              text: "searching",
              collapsed: false,
              items: [
                { text: "hasPath", link: "/api/algorithms/graph/has-path" },
                { text: "shortestPath", link: "/api/algorithms/graph/shortest-path" }
              ]
            },
            {
              text: "presenter",
              collapsed: false,
              items: [
                { text: "presenterJson", link: "/api/algorithms/graph/presenter-json" },
                { text: "presenterGraphviz", link: "/api/algorithms/graph/presenter-graphviz" },
                { text: "presenterAdjacencyLists", link: "/api/algorithms/graph/presenter-adjacency-lists" },
                { text: "presenterAdjacencyMatrix", link: "/api/algorithms/graph/presenter-adjacency-matrix" }
              ]
            },
            {
              text: "utils",
              collapsed: false,
              items: [
                { text: "transposeDirectedGraph", link: "/api/algorithms/graph/transpose-directed-graph" },
                { text: "topologicalSort", link: "/api/algorithms/graph/topological-sort" }
              ]
            }
          ]
        },
        {
          text: "Binary Search Tree",
          items: [
            {
              text: "unbalanced",
              collapsed: false,
              link: "/api/data-structures/binary-tree",
              items: [
                {
                  text: "RawBinarySearchTree",
                  collapsed: false,
                  link: "/api/data-structures/binary-tree"
                }
              ]
            },
            {
              text: "balanced",
              collapsed: false,
              link: "/api/data-structures/binary-tree-rand",
              items: [
                {
                  collapsed: false,
                  text: "RandBinarySearchTree",
                  link: "/api/data-structures/binary-tree-rand"
                }
              ]
            }
          ]
        },
        {
          text: "Algorithms",
          items: [
            { text: "memorize", link: "/api/algorithms/memoize" },
            { text: "factorial", link: "/api/algorithms/factorial" },
            { text: "fibonacci", link: "/api/algorithms/fibonacci" },
            { text: "transposeMatrix", link: "/api/algorithms/transpose-matrix" },
            {
              text: "sorting",
              collapsed: false,
              items: [
                { text: "mergeSort", link: "/api/algorithms/sort/merge" },
                { text: "selectionSort", link: "/api/algorithms/sort/selection" },
                { text: "quicksort", link: "/api/algorithms/sort/quick" },
                { text: "bubbleSort", link: "/api/algorithms/sort/bubble" },
                { text: "insertionSort", link: "/api/algorithms/sort/insertion" }
              ]
            }
          ]
        },
        {
          text: "Utils",
          collapsed: false,
          items: [
            { text: "checkIsArrayMatrix", link: "/api/utils/checkIsArrayMatrix" },
            { text: "getMinIndex", link: "/api/utils/getMinIndex" },
            { text: "randomizeNumberInRange", link: "/api/utils/randomizeNumberInRange" },
            { text: "roundNumber", link: "/api/utils/roundNumber" },
            { text: "swapArrayItems", link: "/api/utils/swapArrayItems" }
          ]
        }
      ]
    },

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