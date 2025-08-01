import { leafSimilar } from './leafSimilar';
import { TreeNode } from '../DataStructures/TreeNode';
import { expect, test, describe } from '@jest/globals';

// Example 1:
// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false

// Example 2:
// Input: root1 = [1,2,3], root2 = [1,2,3]
// Output: true

describe('Describe Cases', () => {
  test('Test 1', () => {
    const tree1 = new TreeNode(1, null, null);
    tree1.left = new TreeNode(2, null, null);
    tree1.right = new TreeNode(3, null, null);
    const tree2 = new TreeNode(1, null, null);
    tree2.left = new TreeNode(3, null, null);
    tree2.right = new TreeNode(2, null, null);
    expect(leafSimilar(tree1, tree2)).toBe(false);
  });

  test('Test 2', () => {
    const tree1 = new TreeNode(1, null, null);
    tree1.left = new TreeNode(2, null, null);
    tree1.right = new TreeNode(3, null, null);
    const tree2 = new TreeNode(1, null, null);
    tree2.left = new TreeNode(2, null, null);
    tree2.right = new TreeNode(3, null, null);
    expect(leafSimilar(tree1, tree2)).toBe(true);
  });
});
