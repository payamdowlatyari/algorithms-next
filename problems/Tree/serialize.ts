import { TreeNode } from '../DataStructures/TreeNode';

// Serialization is the process of converting a data structure or object into
// a sequence of bits so that it can be stored in a file or memory buffer,
// or transmitted across a network connection link to be reconstructed later
// in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree.
// There is no restriction on how your serialization/deserialization algorithm should work.
// You just need to ensure that a binary tree can be serialized to a string and this string
// can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree.
// You do not necessarily need to follow this format,
// so please be creative and come up with different approaches yourself.

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -1000 <= Node.val <= 1000

/**
 * Serializes a binary tree to a string.
 *
 * @param {TreeNode} root - The root of the binary tree.
 * @return {string} A string representation of the binary tree.
 *
 * @example
 * const node = new TreeNode(1, null, null);
 * node.val; // 1
 * node.left; // null
 * node.right; // null
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function serialize(root: TreeNode | null): string {
  const values = [];
  const nodes = [root];

  while (nodes.length > 0) {
    const currentNode = nodes.shift();

    if (currentNode) {
      values.push(currentNode.val);
      nodes.push(currentNode.left);
      nodes.push(currentNode.right);
    } else {
      values.push(null);
    }
  }

  // Remove trailing nulls
  while (values[values.length - 1] === null) {
    values.pop();
  }

  return JSON.stringify(values);
}

/**
 * Deserializes a binary tree from a string.
 *
 * @param {string} data - The serialized binary tree.
 * @returns {TreeNode|null} The root of the deserialized binary tree or null if the input string is empty or null.
 *
 * @example
 * const data = "[1,2,3,null,null,4,5]";
 * const root = deserialize(data);
 * root.val; // 1
 * root.left.val; // 2
 * root.right.val; // 3
 * root.left.left; // null
 * root.left.right; // null
 * root.right.left.val; // 4
 * root.right.right.val; // 5
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function deserialize(data: string): TreeNode | null {
  const array = JSON.parse(data);
  if (!array || array.length === 0) return null;

  const rootNode = new TreeNode(array[0], null, null);
  const nodeQueue = [rootNode];
  let index = 1;

  while (index < array.length && nodeQueue.length > 0) {
    const currentNode = nodeQueue.shift();

    if (currentNode && array[index] !== null) {
      currentNode.left = new TreeNode(array[index], null, null);
      nodeQueue.push(currentNode.left);
    }
    index++;

    if (currentNode && array[index] !== null) {
      currentNode.right = new TreeNode(array[index], null, null);
      nodeQueue.push(currentNode.right);
    }
    index++;
  }

  return rootNode;
}
