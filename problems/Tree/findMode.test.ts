import { findMode } from './findMode';
import { TreeNode } from '../DataStructures/TreeNode';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: root = [1,null,2,2]
// Output: [2]

// Example 2:

// Input: root = [0]
// Output: [0]

describe('Describe Cases', () => {
  const tree = new TreeNode(1, null, null);
  tree.right = new TreeNode(2, null, null);
  tree.right.right = new TreeNode(2, null, null);
  test('Test 1', () => {
    expect(findMode(tree)).toEqual([2]);
  });

  const tree2 = new TreeNode(0, null, null);
  test('Test 2', () => {
    expect(findMode(tree2)).toEqual([0]);
  });
});
