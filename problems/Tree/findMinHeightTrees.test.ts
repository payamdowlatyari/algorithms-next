import { findMinHeightTrees } from './findMinHeightTrees';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

// Example 2:

// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

describe('findMinHeightTrees', () => {
  test('Example 1', () => {
    const n: number = 4;
    const edges: number[][] = [
      [1, 0],
      [1, 2],
      [1, 3],
    ];
    const output: number[] = [1];
    expect(findMinHeightTrees(n, edges)).toEqual(output);
  });
  test('Example 2', () => {
    const n: number = 6;
    const edges: number[][] = [
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 4],
      [5, 4],
    ];
    const output: number[] = [3, 4];
    expect(findMinHeightTrees(n, edges)).toEqual(output);
  });
});
