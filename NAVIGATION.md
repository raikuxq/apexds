# Navigation
+ [Linear data structures](#linear-data-structures)
    + [Stack](#stack)
    + [Queue](#queue)
    + [PriorityQueue](#priorityqueue)
    + [BinaryHeap](#binaryheap)
    + [Linked list](#linked-list)
+ [Non-linear data structures](#non-linear-data-structures)
    + [Graph](#graph)
    + [Binary tree](#binary-trees)
+ [Algorithms](#algorithms)
    + [Utils](#utils)
    + [Math](#math)
    + [Sorting algorithms](#sorting-algorithms)


# Linear data structures

### Interfaces
[ILinearStorage](src/app/types/ILinearStorage.ts) — Contains common methods of linear data structures.

[ILinearStorageRA](src/app/types/ILinearStorageRA.ts) — Allows random access (from end, from start, by index).
Extends [ILinearStorage](src/app/types/ILinearStorage.ts) interface.

[IConvertableToArray](src/app/types/IConvertableToArray.ts) — Contain methods for converting from/into array.


## Linked List

### Interfaces
[ILinkedList](src/app/types/ILinkedList.ts) — Contains basic linked lists operations.
Extends [ILinearStorageRA](src/app/types/ILinearStorageRA.ts) and [IConvertableToArray](src/app/types/IConvertableToArray.ts) interface.

### Implementation
[AbstractLinkedList](src/app/data-structures/LinkedList/core/AbstractLinkedList/AbstractLinkedList.ts) — Common logic for both single and double linked lists.
Implements [ILinearStorageRA](src/app/types/ILinearStorageRA.ts) interface.

[SingleLinkedList](src/app/data-structures/LinkedList/core/SingleLinkedList/SingleLinkedList.ts)
[ [ tests ] ](test/unit/data-structures/linked-list/linked-list.test.ts)
— Extends abstract linked list with implementation of one-way linking.

[DoubleLinkedList](src/app/data-structures/LinkedList/core/DoubleLinkedList/DoubleLinkedList.ts)
[ [ tests ] ](test/unit/data-structures/linked-list/linked-list.test.ts)
— Extends abstract linked list with implementation of two-way linking.

[IterableSingleLinkedList](src/app/data-structures/LinkedList/core/SingleLinkedList/IterableSingleLinkedList.ts)
[ [ tests ] ](test/unit/data-structures/linked-list/linked-list-iterable.test.ts)
— Extends single linked list with iterator implementation.
Implements [IIterable](src/app/types/IIterable.ts) interface.

[IterableDoubleLinkedList](src/app/data-structures/LinkedList/core/DoubleLinkedList/IterableDoubleLinkedList.ts)
[ [ tests ] ](test/unit/data-structures/linked-list/linked-list-iterable.test.ts)
— Extends double linked list with implementation of two-way linking.
Implements [IBiDirectIterable](src/app/types/IBiDirectIterable.ts) interface.

## Stack

### Implementation
[Stack](src/app/data-structures/Stack/Stack.ts) [[ tests ](test/unit/data-structures/stack/stack.test.ts)]
— LIFO data structure. Implements [ILinearStorage](src/app/types/ILinearStorage.ts) interface.

## Queue

### Implementation
[Queue](src/app/data-structures/Queue/Queue.ts) [[ tests ](test/unit/data-structures/queue/queue.test.ts)]
— FIFO data structure. Implements [ILinearStorage](src/app/types/ILinearStorage.ts) interface.

## BinaryHeap

### Implementation
[BinaryHeap](src/app/data-structures/BinaryHeap/BinaryHeap.ts)
— Binary heap implementation.

## PriorityQueue

### Implementation
[PriorityQueue](src/app/data-structures/PriorityQueue/PriorityQueue.ts)
— Priority queue based on binary heap implementation.




# Non linear data structures

## Graph
### Interfaces
[IGraph](src/app/types/IGraph.ts) — Contains basic graph operations.

[IGraphIterator](src/app/types/IGraphIterator.ts) — Extends default iterator with init and getPath methods.

[IGraphIterationStrategy](src/app/types/IGraphIterationStrategy.ts) — Iteration strategies which are used in shortest-path, has-path.

### Implementation
[GraphEdge](src/app/data-structures/Graph/core/GraphEdge.ts) — Contains from/to links and edge weight.

[AbstractGraph](src/app/data-structures/Graph/core/AbstractGraph.ts) — Common logic for both directed and undirected graphs.


[DirectedGraph](src/app/data-structures/Graph/core/DirectedGraph.ts) [ [ tests ] ](test/unit/data-structures/graph/graph.test.ts)
— In case of directed graph A->B and B->A edges are not the same.

[UndirectedGraph](src/app/data-structures/Graph/core/UndirectedGraph.ts) [ [ tests ] ](test/unit/data-structures/graph/graph.test.ts)
— In case of undirected graph A->B and B->A are equal.


### Graph Iterators

[BreadthFirstSearchIterator](src/app/data-structures/Graph/iterator/GraphIteratorBFS.ts)
— Traversal method for unweighted graphs, built on queue.

[DepthFirstSearchIterator](src/app/data-structures/Graph/iterator/GraphIteratorDFS.ts)
— Traversal method for unweighted graphs, built on stack.

[DijkstraMethodIterator](src/app/data-structures/Graph/iterator/GraphIteratorDijkstra.ts)
— Traversal method for weighted graphs, built on finding the minimal cost.


### Graph Presenter
[presenter-adjacency-lists](src/app/data-structures/Graph/presenter/presenterAdjacencyLists.ts)  [[ tests ](test/unit/data-structures/graph/graph.presenter.lists.test.ts)]
— Representation of graph as an adjacency list (using Map).

[presenter-adjacency-matrix](src/app/data-structures/Graph/presenter/presenterAdjacencyMatrix.ts)  [[ tests ](test/unit/data-structures/graph/graph.presenter.matrix.test.ts)]
— Representation of graph as an adjacency matrix (using Array N*N).


### Graph Searching
[has-path (BFS/DFS)](src/app/data-structures/Graph/searching/hasPath.ts)  [[ tests ](test/unit/data-structures/graph/graph.has-path.test.ts)]
— Search for the existence of a path between two vertices.

[shortest-path (BFS/Dijkstra)](src/app/data-structures/Graph/searching/shortestPath.ts)  [[ tests ](test/unit/data-structures/graph/graph.shortest-path.test.ts)]
— Search for one of several shortest paths between two vertices.

### Graph Creators
[create-graph-from-matrix](src/app/data-structures/Graph/factories/createGraphFromMatrix.ts)  [[ tests ](test/unit/data-structures/graph/graph.create-from-matrix.test.ts)]
— Convert a matrix N*N into a graph instance.


### Graph Transposing
[transpose-directed-graph](src/app/data-structures/Graph/transposing/transposeDirectedGraph.ts)  [ [ tests ](test/unit/data-structures/graph/graph.transpose.test.ts)]
— Transpose a directed graph (undirected graphs are symmetrical already).



## Binary trees
[IBinaryTree](src/app/types/IBinaryTree.ts) — Contains basic binary tree operations.

### Implementation

[AbstractBinaryNode](src/app/data-structures/BinaryTree/core/AbstractBinaryTree/AbstractBinaryNode.ts) — Contains left/right/parent links and node data.

[AbstractBinaryTree](src/app/data-structures/BinaryTree/core/AbstractBinaryTree/AbstractBinaryTree.ts) — Common logic for all types of binary trees.


[BinarySearchNode](src/app/data-structures/BinaryTree/core/BinarySearchTree/BinarySearchNode.ts) — Same as abstract binary node.

[BinarySearchTree](src/app/data-structures/BinaryTree/core/BinarySearchTree/BinarySearchTree.ts) — Implementation of unbalanced binary search tree.
Each node in left subtree is smaller and each node in right subtree is larger than the node data.
Extends [AbstractSearchTree](src/app/data-structures/BinaryTree/core/AbstractBinaryTree/AbstractBinaryTree.ts).



[RandBinarySearchNode](src/app/data-structures/BinaryTree/core/RandBinarySearchTree/RandBinarySearchNode.ts) — Have a rank attribute.
Extends [BinarySearchNode](src/app/data-structures/BinaryTree/core/BinarySearchTree/BinarySearchNode.ts).

[RandBinarySearchTree](src/app/data-structures/BinaryTree/core/RandBinarySearchTree/RandBinarySearchTree.ts)
— Implementation of randomized binary search tree, which gives expected log(N) height.
INSERTION have a 1/N+1 probability of inserting into root.
Extends [BinarySearchTree](src/app/data-structures/BinaryTree/core/BinarySearchTree/BinarySearchTree.ts).



# Algorithms

## Utils
[memoize](src/app/algorithms/memoize.ts) — Memoization util function.

## Searching
[binary-search](src/app/algorithms/binary-search.ts) [[ tests ](test/unit/algorithms/binary-search.test.ts)] — Binary searching algorithm. Time: O(log(n)).

## Math
[factorial](src/app/algorithms/factorial.ts) [[ tests ](test/unit/algorithms/factorial.test.ts)] — Recursive O(n!) and memoized O(n) factorial implementation.

[fibonacci](src/app/algorithms/fibonacci.ts) [[ tests ](test/unit/algorithms/fibonacci.test.ts)] — Recursive O(n!) and memoized O(n) factorial implementation.

[transpose-matrix](src/app/algorithms/transpose-matrix.ts) [[ tests ](test/unit/algorithms/transpose-matrix.test.ts)]  — Transpose N*N matrix util function.


## Sorting algorithms
[bubble-sort](src/app/algorithms/sorts/bubble-sort.ts) [[ tests ](test/unit/algorithms/sorts.test.ts)] — Time: O(n^2) worst, O(n^2) avg, O(n) best. Memory: O(1) worst.

[selection-sort](src/app/algorithms/sorts/select-sort.ts) [[ tests ](test/unit/algorithms/sorts.test.ts)] — Time: O(n^2) worst, O(n^2) avg, O(n^2) best. Memory: O(1) worst.

[insertion-sort](src/app/algorithms/sorts/insertion-sort.ts) [[ tests ](test/unit/algorithms/sorts.test.ts)] — Time: O(n^2) worst, O(n^2) avg, O(n) best. Memory: O(1) worst.

[merge-sort](src/app/algorithms/sorts/merge-sort.ts) [[ tests ](test/unit/algorithms/sorts.test.ts)] — Time: O(n*log(n)) worst, O(n*log(n)) avg, O(n*log(n)) best. Memory: O(n) worst.

[quick-sort](src/app/algorithms/sorts/quick-sort.ts) [[ tests ](test/unit/algorithms/sorts.test.ts)] — Time: O(n^2) worst, O(n*log(n)) avg, O(n*log(n)) best. Memory: O(1) worst. 


