import BinarySearchTree from "src/app/data-structures/BinaryTree/core/BinarySearchTree/BinarySearchTree";
import RandBinarySearchTree from "src/app/data-structures/BinaryTree/core/RandBinarySearchTree/RandBinarySearchTree";
import IBinaryTree from "src/app/types/IBinaryTree";
import { EnumTreeTraversalType } from "src/app/types/EnumTreeTraversalType";

interface ITreeStats {
  [key: string]: string | number;
}

const runTreeBenchmark = (
  name: string,
  tree: IBinaryTree<number>,
  isOrdered: boolean,
): void => {
  const COUNT = 5_000_000;
  const stats: ITreeStats = {};

  const mark = (label: string, fn: () => void): void => {
    const start = performance.now();
    fn();
    const end = performance.now();
    stats[label] = `${(end - start).toFixed(2)} ms`;
  };

  console.log(
    `\n Testing ${name} | Mode: ${isOrdered ? "ORDERED" : "RANDOM"} | N = ${COUNT}`,
  );

  mark("01. Ingestion", () => {
    if (isOrdered) {
      for (let i = 0; i < COUNT; i++) tree.insert(i);
    } else {
      let inserted = 0;
      while (inserted < COUNT) {
        const val = Math.floor(Math.random() * COUNT * 20); // увеличим диапазон
        if (!tree.has(val)) {
          tree.insert(val);
          inserted++;
        }
      }
    }
  });

  mark("02. Search (10k ops)", () => {
    for (let i = 0; i < 10000; i++) {
      tree.has(Math.floor(Math.random() * COUNT * 10));
    }
  });

  mark("03. Calc Height", () => {
    stats["Tree Height"] = tree.height();
  });

  mark("04. In-Order Traverse", () => {
    tree.traverse(EnumTreeTraversalType.IN_ORDER);
  });

  mark("05. Min/Max Lookup", () => {
    tree.min();
    tree.max();
  });

  mark("06. Delete (5k ops)", () => {
    const nodes = tree.traverse(EnumTreeTraversalType.PRE_ORDER).slice(0, 5000);
    nodes.forEach((val) => tree.delete(val));
  });

  stats["Final Length"] = tree.length();
  console.table(stats);
};

export const runBstComparison = (): void => {
  runTreeBenchmark("Standard BST", new BinarySearchTree<number>(), false);

  runTreeBenchmark("Rand BST", new RandBinarySearchTree<number>(), true);

  runTreeBenchmark("Rand BST", new RandBinarySearchTree<number>(), false);
};

runBstComparison();
