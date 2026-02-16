// TreeNode class

// TreeNode is a class that represents a node in a binary tree.
// It has a value and references to its left and right children.

// TreeNode(val) creates a new TreeNode object with the given value and null left and right references.
// TreeNode(val, left, right) creates a new TreeNode object with the given value and the specified left and right references.

/**
 * Definition for a binary tree node.
 * This class represents a node in a binary tree.
 * It contains a value and pointers to its left and right children.
 *
 * @param {number} val - The value of the node. Defaults to 0 if not provided.
 * @param {TreeNode|null} left - The left child of the node. Defaults to null if not provided.
 * @param {TreeNode|null} right - The right child of the node. Defaults to null if not provided.
 *
 * @example
 * const node = new TreeNode(1, null, null);
 * node.val; // 1
 * node.left; // null
 * node.right; // null
 */
class TreeNode {
  val: any;
  left: TreeNode | null;
  right: TreeNode | null;

  /**
   * Constructs a new TreeNode.
   * @param {number} val - The value of the node.
   * @param {TreeNode|null} left - The left child of the node.
   * @param {TreeNode|null} right - The right child of the node.
   */
  constructor(val: any, left: TreeNode | null, right: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export { TreeNode };
