import { TreeNode } from '../DataStructures/TreeNode';

// Given the root of a binary tree, invert the tree, and return its root.

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 *
 * @example
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root != undefined) {
    if (root.left || root.right) {
      let l = null;
      let r = null;

      if (root.right !== undefined) r = root.right;

      if (root.left !== undefined) l = root.left;

      root.right = l;
      root.left = r;

      invertTree(root.left);
      invertTree(root.right);
    }
  }

  return root;
}
