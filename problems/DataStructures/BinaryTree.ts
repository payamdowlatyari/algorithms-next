/**
 * Represents a node in a binary tree.
 *
 * @type {TreeNode}
 * @description A node in a binary tree is a data structure that is a tree where each node has at most two children.
 *
 * @example
 * const node = new TreeNode(10);
 * console.log(node.data); // 10
 * console.log(node.left); // null
 * console.log(node.right); // null
 */
class TreeNode {
  data: any;
  left: TreeNode | null;
  right: TreeNode | null;

  /**
   * Creates a new TreeNode with the given data.
   *
   * @param {any} data - The data to be stored in the node.
   *
   * @example
   * const node = new TreeNode(10);
   * console.log(node.data); // 10
   * console.log(node.left); // null
   * console.log(node.right); // null
   */
  constructor(data: any) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents a binary tree.
 *
 * @type {BinaryTree}
 * @description A binary tree is a data structure that is a tree where each node has at most two children.
 *
 * * The left child is called the left child and the right child is called the right child.
 * * The root is called the root.
 * * The leaf nodes are called the leaves.
 * * The internal nodes are called the internal nodes.
 * * The nodes that have no children are called the leaf nodes.
 * * The nodes that have at least one child are called the internal nodes.
 *
 * @example
 * const tree = new BinaryTree();
 * tree.insert(10); // Insert a node with data 10
 * tree.insert(5); // Insert a node with data 5
 * tree.insert(15); // Insert a node with data 15
 * console.log(tree.toString()); // Print the tree
 */
export class BinaryTree {
  root: TreeNode | null;

  /**
   * Creates an empty binary tree.
   */
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a new node with the specified data into the binary tree.
   * If the tree is empty, the new node becomes the root.
   * Otherwise, it inserts the node at the correct position to maintain the binary search tree property.
   *
   * @param {number} data - The data to be inserted into the tree.
   */
  insert(data: any) {
    if (!this.root) {
      this.root = new TreeNode(data);
    } else {
      this.insertNode(this.root, data);
    }
  }

  /**
   * Inserts a new node with the specified data into the binary tree.
   * If the node is null, it creates a new TreeNode with the given data.
   * If the node's left child is null, it inserts the new node as the left child.
   * If the node's right child is null, it inserts the new node as the right child.
   * If neither the left nor the right child is null, it inserts the new node as the left child of the left child.
   *
   * @param {TreeNode} node - The node to insert the new node into.
   * @param {number} data - The data to be inserted into the tree.
   * @returns {TreeNode} The node after the insertion.
   */
  insertNode(node: TreeNode, data: any): TreeNode {
    if (!node) {
      return new TreeNode(data);
    }

    if (!node.left) {
      node.left = new TreeNode(data);
    } else if (!node.right) {
      node.right = new TreeNode(data);
    } else {
      node.left = this.insertNode(node.left, data);
    }

    return node;
  }

  /**
   * Returns a string representation of the binary tree.
   * If the tree is empty, it returns the string 'Empty tree'.
   * Otherwise, it generates a visual representation of the tree structure
   * using the `printTree` method, starting from the root node.
   *
   * @returns {string} A string representation of the binary tree.
   */
  toString(): string {
    return this.root ? this.printTree(this.root, '', true) : 'Empty tree';
  }

  /**
   * Recursively generates a string representation of the binary tree, starting from the given node.
   * The `prefix` argument is used to generate the indentation for each node.
   * The `isLeft` argument is used to determine whether to use '│' or ' ' for the line above the node.
   * The method returns a string representation of the tree structure, with each node separated by a newline character.
   * If the node is null, the method returns an empty string.
   *
   * @param {TreeNode} node - The node to generate the string representation for.
   * @param {string} prefix - The indentation to use for the given node.
   * @param {boolean} isLeft - A boolean indicating whether the given node is a left child.
   * @returns {string} A string representation of the binary tree, starting from the given node.
   */
  printTree(
    node: { right: any; data: string; left: any },
    prefix: string,
    isLeft: boolean,
  ): string {
    if (!node) {
      return '';
    }

    let result = '';
    result += this.printTree(
      node.right,
      prefix + (isLeft ? '│   ' : '    '),
      false,
    );
    result += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\n';
    result += this.printTree(
      node.left,
      prefix + (isLeft ? '    ' : '│   '),
      true,
    );

    return result;
  }
}
