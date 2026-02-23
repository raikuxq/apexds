const {defaultTheme} = require('@vuepress/theme-default')
const {searchPlugin} = require('@vuepress/plugin-search')


module.exports = {
    lang: 'en-US',
    title: '@apexds/core',
    description: 'Algorithms & Data structures',
    theme: defaultTheme({
        contributors: false,
        lastUpdated: false,
        repo: 'https://github.com/raikuxq/lab-ts-algorithms',
        docsDir: 'docs',
        navbar: [
            {
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'API',
                link: '/api/',
            },
            {
                text: 'NPM',
                link: 'https://www.npmjs.com/package/@apexds/core'
            }
        ],
        editLink: false,
        sidebar: {
            '/guide': [
                {
                    text: 'Get started',
                    link: '/guide/',
                    children: [
                        {
                            text: 'Installation',
                            link: '/guide#installation'
                        }
                    ]
                },
                {
                    text: 'Data structures',
                    children: [
                        {
                            text: 'Stack',
                            link: '/guide/data-structures/stack',
                        },
                        {
                            text: 'Queue',
                            link: '/guide/data-structures/queue',
                        },
                        {
                            text: 'Linked List',
                            link: '/guide/data-structures/linked-list',
                        },
                        {
                            text: 'Binary Search Tree',
                            link: '/guide/data-structures/binary-tree',
                        },
                        {
                            text: 'Graph',
                            link: '/guide/data-structures/graph',
                        },
                    ]
                },
                {
                    text: 'Algorithms',
                    children: [
                        {
                            text: 'Utils',
                            children: [
                                {
                                    text: 'Memoize',
                                    link: '/guide/algorithms/memoize',
                                },
                            ]
                        },
                        {
                            text: 'Searching',
                            children: [
                                {
                                    text: 'Binary Search',
                                    link: '/guide/algorithms/binary-search',
                                },
                            ]
                        },
                        {
                            text: 'Math',
                            children: [
                                {
                                    text: 'Factorial',
                                    link: '/guide/algorithms/factorial',
                                },
                                {
                                    text: 'Fibonacci',
                                    link: '/guide/algorithms/fibonacci',
                                },
                                {
                                    text: 'Matrix transpose',
                                    link: '/guide/algorithms/transpose-matrix',
                                },
                            ]
                        },
                        {
                            text: 'Sorting algorithms',
                            children: [
                                {
                                    text: 'Bubble sort',
                                    link: '/guide/algorithms/sort/bubble',
                                },
                                {
                                    text: 'Selection sort',
                                    link: '/guide/algorithms/sort/selection',
                                },
                                {
                                    text: 'Insertion sort',
                                    link: '/guide/algorithms/sort/insertion',
                                },
                                {
                                    text: 'Merge sort',
                                    link: '/guide/algorithms/sort/merge',
                                },
                                {
                                    text: 'Quick sort',
                                    link: '/guide/algorithms/sort/quick',
                                }
                            ]
                        },
                        {
                            text: 'Graph algorithms',
                            children: [
                                {
                                    text: 'Iterators',
                                    children: [
                                        {
                                            text: 'Breadth-first',
                                            link: '/guide/algorithms/graph/iterator-bfs',
                                        },
                                        {
                                            text: 'Depth-first',
                                            link: '/guide/algorithms/graph/iterator-dfs',
                                        },
                                        {
                                            text: 'Dijkstra',
                                            link: '/guide/algorithms/graph/iterator-dijkstra',
                                        },
                                    ]
                                },
                                {
                                    text: 'Searching',
                                    children: [
                                        {
                                            text: 'Has path',
                                            link: '/guide/algorithms/graph/has-path',
                                        },
                                        {
                                            text: 'Shortest path',
                                            link: '/guide/algorithms/graph/shortest-path',
                                        },
                                    ]
                                },
                                {
                                    text: 'Presenters',
                                    children: [
                                        {
                                            text: 'Presenter adjacency lists',
                                            link: '/guide/algorithms/graph/presenter-adjacency-lists',
                                        },
                                        {
                                            text: 'Presenter adjacency matrix',
                                            link: '/guide/algorithms/graph/presenter-adjacency-matrix',
                                        },
                                    ]
                                },
                                {
                                    text: 'Utils',
                                    children: [
                                        {
                                            text: 'Create graph from matrix',
                                            link: '/guide/algorithms/graph/create-graph-from-matrix',
                                        },
                                        {
                                            text: 'Transpose directed graph',
                                            link: '/guide/algorithms/graph/transpose-directed-graph',
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ],
            '/api': [
                {
                    text: 'Types',
                    children: [
                        {
                            text: 'Types',
                            link: '/api/types/types',
                        },
                        {
                            text: 'Interfaces',
                            link: '/api/types/interfaces',
                        },
                        {
                            text: 'Enumerable',
                            link: '/api/types/enumerable',
                        }
                    ]
                },
                {
                    text: 'Exceptions',
                    link: '/api/exceptions',
                    children: [
                        {
                            text: 'Illegal Argument Exceptions',
                            link: '/api/exceptions/argument',
                        },
                        {
                            text: 'Illegal State Exceptions',
                            link: '/api/exceptions/state',
                        }
                    ]
                },
                {
                    text: 'Data structures',
                    children: [
                        {
                            text: 'Stack',
                            link: '/api/data-structures/stack',
                        },
                        {
                            text: 'Queue',
                            link: '/api/data-structures/queue',
                        },
                        {
                            text: 'LinkedList',
                            link: '/api/data-structures/linked-list',
                        },
                        {
                            text: 'BinarySearchTree',
                            link: '/api/data-structures/binary-tree',
                        },
                        {
                            text: 'Graph',
                            link: '/api/data-structures/graph',
                        },
                    ]
                },
                {
                    text: 'Algorithms',
                    children: [
                        {
                            text: 'utils',
                            children: [
                                {
                                    text: 'memoize',
                                    link: '/api/algorithms/memoize',
                                },
                            ]
                        },
                        {
                            text: 'searching',
                            children: [
                                {
                                    text: 'binary-search',
                                    link: '/api/algorithms/binary-search',
                                },
                            ]
                        },
                        {
                            text: 'math',
                            children: [
                                {
                                    text: 'factorial',
                                    link: '/api/algorithms/factorial',
                                },
                                {
                                    text: 'fibonacci',
                                    link: '/api/algorithms/fibonacci',
                                },
                                {
                                    text: 'matrix-transpose',
                                    link: '/api/algorithms/transpose-matrix',
                                },
                            ]
                        },
                        {
                            text: 'sorting algorithms',
                            children: [
                                {
                                    text: 'bubble-sort',
                                    link: '/api/algorithms/sort/bubble',
                                },
                                {
                                    text: 'selection-sort',
                                    link: '/api/algorithms/sort/selection',
                                },
                                {
                                    text: 'insertion-sort',
                                    link: '/api/algorithms/sort/insertion',
                                },
                                {
                                    text: 'merge-sort',
                                    link: '/api/algorithms/sort/merge',
                                },
                                {
                                    text: 'quick-sort',
                                    link: '/api/algorithms/sort/quick',
                                }
                            ]
                        },
                        {
                            text: 'graph algorithms',
                            children: [
                                {
                                    text: 'iterators',
                                    children: [
                                        {
                                            text: 'GraphIteratorBFS',
                                            link: '/api/algorithms/graph/iterator-bfs',
                                        },
                                        {
                                            text: 'GraphIteratorDFS',
                                            link: '/api/algorithms/graph/iterator-dfs',
                                        },
                                        {
                                            text: 'GraphIteratorDijkstra',
                                            link: '/api/algorithms/graph/iterator-dijkstra',
                                        },
                                    ]
                                },
                                {
                                    text: 'searching',
                                    children: [
                                        {
                                            text: 'has-path',
                                            link: '/api/algorithms/graph/has-path',
                                        },
                                        {
                                            text: 'shortest-path',
                                            link: '/api/algorithms/graph/shortest-path',
                                        },
                                    ]
                                },
                                {
                                    text: 'presenters',
                                    children: [
                                        {
                                            text: 'presenter-adjacency-lists',
                                            link: '/api/algorithms/graph/presenter-adjacency-lists',
                                        },
                                        {
                                            text: 'presenter-adjacency-matrix',
                                            link: '/api/algorithms/graph/presenter-adjacency-matrix',
                                        },
                                    ]
                                },
                                {
                                    text: 'utils',
                                    children: [
                                        {
                                            text: 'create-graph-from-matrix',
                                            link: '/api/algorithms/graph/create-graph-from-matrix',
                                        },
                                        {
                                            text: 'transpose-directed-graph',
                                            link: '/api/algorithms/graph/transpose-directed-graph',
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }

            ]
        },

    }),
    plugins: [
        searchPlugin({
            // options
        }),
    ],
}
