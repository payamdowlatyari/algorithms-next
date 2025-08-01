import { TreeNode } from '../DataStructures/TreeNode';

// Given the root of a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

/**
 * Gets the values of the nodes visible from the right side view of the tree.
 *
 * @param {TreeNode} root
 * @return {number[]}
 *
 * @example
 * Input: root = [1,2,3,null,5,null,4]
 * Output: [1,3,4]
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  let queue = [root],
    result = [];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();

      if (!curr) continue;

      if (i === levelSize - 1) result.push(curr.val);

      if (curr.left) queue.push(curr.left);

      if (curr.right) queue.push(curr.right);
    }
  }
  return result;
}
