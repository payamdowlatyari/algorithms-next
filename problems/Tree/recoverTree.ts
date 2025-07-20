import { TreeNode } from '../DataStructures/TreeNode';

// You are given the root of a binary search tree (BST), where the values of
// exactly two nodes of the tree were swapped by mistake.
// Recover the tree without changing its structure.

// Constraints:
// The number of nodes in the tree is in the range [2, 1000].
// -2 ^ 31 <= Node.val <= 2 ^ 31 - 1

/**
 * Recovers a binary search tree from a tree which has exactly two nodes with their values swapped.
 * The function works by traversing the tree, and whenever it finds a node which has a value less
 * than the given value, it swaps the value of the current node with the value of the found node.
 * @param {TreeNode} root - The root of the tree to recover
 *
 * @example
 * Input: root = [3,1,4,null,2]
 * Output: [2,1,4,null,3]
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(1)
 */
export function recoverTree(root: TreeNode | null): void {
  let firstNode: any = null;
  let secondNode: any = null;
  let prevNode: any = null;

  /**
   * A helper function to traverse the tree and find the two nodes with the incorrect values.
   * It keeps track of the first node with an incorrect value and the second node with an incorrect value.
   * It also keeps track of the previous node which is used to compare the values of the nodes.
   * @param {TreeNode} node - The current node to traverse
   */
  const traverse = (node: TreeNode | null) => {
    if (!node) return;

    traverse(node.left);

    if (prevNode && prevNode.val > node.val) {
      if (!firstNode) {
        firstNode = prevNode;
      }
      secondNode = node;
    }
    prevNode = node;

    traverse(node.right);
  };

  traverse(root);

  const temp = firstNode.val;
  firstNode.val = secondNode.val;
  secondNode.val = temp;
}
