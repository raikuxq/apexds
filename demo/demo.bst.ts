import BinarySearchTree from "src/app/data-structures/BinaryTree/core/BinarySearchTree/BinarySearchTree";
import { EnumTreeTraversalType } from "src/app/types/EnumTreeTraversalType";

const util = require("util");

const logTree = <T>(tree: BinarySearchTree<T>) => {
  console.log(
    util.inspect(tree, { showHidden: false, depth: null, colors: true }),
  );

  console.log("IN ORDER TRAVERSE");
  console.log(tree.traverse(EnumTreeTraversalType.IN_ORDER));
  console.log("PRE ORDER TRAVERSE");
  console.log(tree.traverse(EnumTreeTraversalType.PRE_ORDER));
  console.log("POST ORDER TRAVERSE");
  console.log(tree.traverse(EnumTreeTraversalType.POST_ORDER));
  console.log("HEIGHT");
  console.log(tree.height());
  console.log("LENGTH");
  console.log(tree.length());
  console.log("MAX");
  console.log(tree.max());
  console.log("MIN");
  console.log(tree.min());
};

export const demoBst = (): void => {
  const bst = new BinarySearchTree<number>();

  bst.insert(22);
  bst.insert(4);
  bst.insert(16);
  bst.insert(19);
  bst.insert(15);
  bst.insert(8);
  bst.insert(23);
  logTree(bst);

  bst.delete(15);
  logTree(bst);
};

class Human {
  public readonly age: number;
  public readonly name: string;

  public constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

export const demoBstObjects = (): void => {
  const bst = new BinarySearchTree<Human>((human1, human2) => {
    return human1.age > human2.age;
  });

  bst.insert(new Human("Bob", 22));
  bst.insert(new Human("Alice", 14));
  bst.insert(new Human("John", 16));
  bst.insert(new Human("Boris", 19));
  bst.insert(new Human("Anna", 15));
  bst.insert(new Human("Dmitry", 8));
  bst.insert(new Human("Alex", 23));

  logTree(bst);
};

export const demoLargeBst = (): void => {
  const bst = new BinarySearchTree<number>();
  const count = 100;
  const maxRange = 1000;
  const insertedValues = new Set<number>();

  while (insertedValues.size < count) {
    const val = Math.floor(Math.random() * maxRange);
    if (!insertedValues.has(val)) {
      bst.insert(val);
      insertedValues.add(val);
    }
  }

  console.log("--- LARGE BST STATS ---");
  console.log("EXPECTED LENGTH:", count);
  console.log("ACTUAL LENGTH:", bst.length());
  console.log("HEIGHT:", bst.height());

  const inOrder = bst.traverse(EnumTreeTraversalType.IN_ORDER);

  const isSorted = inOrder.every((val, i, arr) => !i || arr[i - 1] <= val);
  console.log("IS SORTED CORRECTLY:", isSorted);

  console.log("TREE STRUCTURE (TOP LEVEL):");
  console.log(util.inspect(bst, { showHidden: false, depth: 3, colors: true }));
};
