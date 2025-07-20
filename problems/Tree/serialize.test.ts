import { serialize, deserialize } from './serialize';
import { TreeNode } from '../DataStructures/TreeNode';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]

// Example 2:

// Input: root = []
// Output: []

describe('Tree Serialization and Deserialization', () => {
  test('Example 1', () => {
    const root = new TreeNode(1, null, null);
    root.left = new TreeNode(2, null, null);
    root.right = new TreeNode(3, null, null);
    root.right.left = new TreeNode(4, null, null);
    root.right.right = new TreeNode(5, null, null);

    const serialized = serialize(root);
    const deserialized = deserialize(serialized);

    console.log(serialized);
    console.log(deserialized);

    expect(serialized).toEqual('[1,2,3,null,null,4,5]');
    expect(deserialized).toEqual(root);
  });

  test('Example 2', () => {
    const root = null;

    const serialized = serialize(root);
    const deserialized = deserialize(serialized);

    console.log(serialized);
    console.log(deserialized);

    expect(serialized).toEqual('[]');
    expect(deserialized).toEqual(root);
  });
});
