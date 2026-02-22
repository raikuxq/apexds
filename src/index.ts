import { EDGE_EXISTS_STATE, EDGE_NOT_EXISTS_STATE } from "src/app/constants";
import { factorial, memoizedFactorial } from "src/app/algorithms/factorial";
import { fibonacci, memoizedFibonacci } from "src/app/algorithms/fibonacci";
import { binarySearch } from "src/app/algorithms/binary-search";
import { transposeMatrix } from "src/app/algorithms/transpose-matrix";
import { transposeDirectedGraph } from "src/app/data-structures/Graph/transposing/transposeDirectedGraph";
import GraphIteratorBFS from "src/app/data-structures/Graph/iterator/GraphIteratorBFS";
import GraphIteratorDFS from "src/app/data-structures/Graph/iterator/GraphIteratorDFS";
import GraphIteratorDijkstra from "src/app/data-structures/Graph/iterator/GraphIteratorDijkstra";
import { createGraphIterator } from "src/app/data-structures/Graph/iterator/createGraphIterator";
import { hasPath } from "src/app/data-structures/Graph/searching/hasPath";
import { shortestPath } from "src/app/data-structures/Graph/searching/shortestPath";
import { presenterAdjacencyMatrix } from "src/app/data-structures/Graph/presenter/presenterAdjacencyMatrix";
import { presenterAdjacencyLists } from "src/app/data-structures/Graph/presenter/presenterAdjacencyLists";
import { createLinkedList } from "src/app/data-structures/LinkedList/factories/createLinkedList";
import { createBinaryTree } from "src/app/data-structures/BinaryTree/factories/createBinaryTree";
import { createGraph } from "src/app/data-structures/Graph/factories/createGraph";
import { createGraphFromMatrix } from "src/app/data-structures/Graph/factories/createGraphFromMatrix";
import { topologicalSort } from "src/app/data-structures/Graph/sort/topologicalSort";
import { isDirectedAcyclicGraph } from "src/app/data-structures/Graph/utils/isDAG";
import Queue from "src/app/data-structures/Queue/Queue";
import Stack from "src/app/data-structures/Stack/Stack";
import PriorityQueue from "src/app/data-structures/PriorityQueue/PriorityQueue";
import BinaryHeap from "src/app/data-structures/BinaryHeap/BinaryHeap";

import BinarySearchTree from "src/app/data-structures/BinaryTree/core/BinarySearchTree/BinarySearchTree";
import RandBinarySearchTree from "src/app/data-structures/BinaryTree/core/RandBinarySearchTree/RandBinarySearchTree";
import DoubleLinkedList from "src/app/data-structures/LinkedList/core/DoubleLinkedList/DoubleLinkedList";
import IterableSingleLinkedList from "src/app/data-structures/LinkedList/core/SingleLinkedList/IterableSingleLinkedList";
import IterableDoubleLinkedList from "src/app/data-structures/LinkedList/core/DoubleLinkedList/IterableDoubleLinkedList";
import SingleLinkedList from "src/app/data-structures/LinkedList/core/SingleLinkedList/SingleLinkedList";
import DirectedGraph from "src/app/data-structures/Graph/core/DirectedGraph";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";

import IsNotFoundException from "src/app/exceptions/IsNotFoundException";
import IsAlreadyExistsException from "src/app/exceptions/IsAlreadyExistsException";
import ValueOutOfRangeException from "src/app/exceptions/ValueOutOfRangeException";
import IllegalArgumentException from "src/app/exceptions/base/IllegalArgumentException";
import IllegalStateException from "src/app/exceptions/base/IllegalStateException";
import IndexOutOfBoundsException from "src/app/exceptions/IndexOutOfBoundsException";
import CollectionIsEmptyException from "src/app/exceptions/CollectionIsEmptyException";
import CollectionIsFullException from "src/app/exceptions/CollectionIsFullException";

import { bubbleSort } from "src/app/algorithms/sorts/bubble-sort";
import { selectSort } from "src/app/algorithms/sorts/select-sort";
import { mergeSort } from "src/app/algorithms/sorts/merge-sort";
import { insertionSort } from "src/app/algorithms/sorts/insertion-sort";
import { quickSort } from "src/app/algorithms/sorts/quick-sort";
import { memoize } from "src/app/algorithms/memoize";

import { getMinIndex, getMinIndexFromIndex } from "src/app/utils/getMinIndex";
import { roundNumber } from "src/app/utils/roundNumber";
import { randomizeNumberInRange } from "src/app/utils/randomizeNumberInRange";
import { swapArrayItems } from "src/app/utils/swapArrayItems";

import { EnumGraphType } from "src/app/types/EnumGraphType";
import { EnumGraphTraversalType } from "src/app/types/EnumGraphTraversalType";
import { EnumBinarySearchTreeType } from "src/app/types/EnumBinarySearchTreeType";
import { EnumSortType } from "src/app/types/EnumSortType";
import { EnumLinkedListType } from "src/app/types/EnumLinkedListType";
import { EnumRandomGenerationFormat } from "src/app/types/EnumRandomGenerationFormat";
import { EnumTreeTraversalType } from "src/app/types/EnumTreeTraversalType";

export {
  EnumGraphTraversalType,
  EnumGraphType,
  EnumRandomGenerationFormat,
  EnumTreeTraversalType,
  EnumSortType,
  EnumBinarySearchTreeType,
  EnumLinkedListType,
};

export {
  getMinIndex,
  getMinIndexFromIndex,
  memoize,
  roundNumber,
  randomizeNumberInRange,
  swapArrayItems,
  isDirectedAcyclicGraph,
};

export { bubbleSort, insertionSort, mergeSort, selectSort, quickSort };

export {
  Stack,
  Queue,
  SingleLinkedList,
  IterableSingleLinkedList,
  DoubleLinkedList,
  IterableDoubleLinkedList,
  RandBinarySearchTree,
  BinarySearchTree,
  DirectedGraph,
  UndirectedGraph,
  BinaryHeap,
  PriorityQueue,
};

export { EDGE_NOT_EXISTS_STATE, EDGE_EXISTS_STATE };

export {
  createGraph,
  createGraphFromMatrix,
  createBinaryTree,
  createLinkedList,
  createGraphIterator,
  topologicalSort,
};

export {
  binarySearch,
  factorial,
  memoizedFactorial,
  memoizedFibonacci,
  fibonacci,
  transposeMatrix,
  GraphIteratorDFS,
  presenterAdjacencyLists,
  presenterAdjacencyMatrix,
  hasPath,
  shortestPath,
  GraphIteratorBFS,
  GraphIteratorDijkstra,
  transposeDirectedGraph,
};

export {
  CollectionIsEmptyException,
  CollectionIsFullException,
  IsNotFoundException,
  IsAlreadyExistsException,
  ValueOutOfRangeException,
  IllegalArgumentException,
  IllegalStateException,
  IndexOutOfBoundsException,
};
