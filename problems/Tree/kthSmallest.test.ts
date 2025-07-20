import { kthSmallest } from './kthSmallest';
import { TreeNode } from '../DataStructures/TreeNode';
import { expect, test, describe } from '@jest/globals';

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

describe('Describe Cases', () => {
  test('Test 1', () => {
    const tree = new TreeNode(3, null, null);
    tree.left = new TreeNode(1, null, null);
    tree.right = new TreeNode(4, null, null);
    tree.right.left = new TreeNode(2, null, null);
    expect(kthSmallest(tree, 1)).toBe(1);
  });

  test('Test 2', () => {
    const tree = new TreeNode(5, null, null);
    tree.left = new TreeNode(3, null, null);
    tree.right = new TreeNode(6, null, null);
    tree.left.left = new TreeNode(2, null, null);
    tree.left.right = new TreeNode(4, null, null);
    tree.left.left.left = new TreeNode(1, null, null);
    expect(kthSmallest(tree, 3)).toBe(3);
  });
});
