import { subsetsWithDup } from './subsets2';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

describe('subsetsWithDup', () => {
  test('Example 1', () => {
    const result = subsetsWithDup([1, 2, 2]);
    expect(result.sort()).toEqual(
      [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]].sort(),
    );
  });
  test('Example 2', () => {
    const result = subsetsWithDup([0]);
    expect(result.sort()).toEqual([[], [0]].sort());
  });
});
