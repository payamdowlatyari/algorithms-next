import { TreeNode } from '../DataStructures/TreeNode';

// Given the root of a binary search tree (BST) with duplicates,
// return all the mode(s) (i.e., the most frequently occurred element) in it.

// If the tree has more than one mode, return them in any order.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105

// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

/**
 * Find the mode(s) in a binary search tree
 *
 * @param {TreeNode} root
 * @return {number[]}
 *
 * @example
 * Input: root = [1,null,2,2]
 * Output: [2]
 *
 * Input: root = [0]
 * Output: [0]
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function findMode(root: TreeNode | null): number[] {
  const map = new Map<number, number>();
  let max = 0;
  let res: number[] = [];

  /**
   * Perform a depth-first search on the binary search tree to count the occurrences of each number.
   * @param {TreeNode} node - the current node
   */
  function dfs(node: TreeNode | null) {
    if (!node) return;
    map.set(node.val, (map.get(node.val) || 0) + 1);
    max = Math.max(max, map.get(node.val) || 0);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  for (const [key, value] of Array.from(map.entries())) {
    if (value === max) res.push(key);
  }

  return res;
}
