import { invertTree } from './invertTree';
import { TreeNode } from '../DataStructures/TreeNode';
import { breadthFirstTraversal } from './helpers/traversals';
import { expect, test, describe } from '@jest/globals';

// Example 1:

//            4                 4
//          /   \             /   \
//         2     7    -->    7     2
//        / \   / \         / \   / \
//       1   3 6   9       9   6 3   1

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:

//            2                 2
//          /   \             /   \
//         1     3    -->    3     1

// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:

// Input: root = []
// Output: []

describe('Describe Cases', () => {
  const tree = new TreeNode(4, null, null);
  tree.left = new TreeNode(2, null, null);
  tree.right = new TreeNode(7, null, null);
  tree.left.left = new TreeNode(1, null, null);
  tree.left.right = new TreeNode(3, null, null);
  tree.right.left = new TreeNode(6, null, null);
  tree.right.right = new TreeNode(9, null, null);

  const tree2 = new TreeNode(2, null, null);
  tree2.left = new TreeNode(1, null, null);
  tree2.right = new TreeNode(3, null, null);

  test('Example 1', () => {
    expect(breadthFirstTraversal(invertTree(tree))).toEqual([
      4, 7, 2, 9, 6, 3, 1,
    ]);
  });
  test('Example 2', () => {
    expect(breadthFirstTraversal(invertTree(tree2))).toEqual([2, 3, 1]);
  });
  test('Example 3', () => {
    expect(breadthFirstTraversal(invertTree(null))).toEqual([]);
  });
});
