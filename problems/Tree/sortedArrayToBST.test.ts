import { sortedArrayToBST } from './sortedArrayToBST';
import { expect, test, describe } from '@jest/globals';

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted
// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.

describe('Describe Cases', () => {
  test('Test 1', () => {
    const tree: any = sortedArrayToBST([-10, -3, 0, 5, 9]);
    expect(tree).toEqual(expect.any(Object));
    expect(tree.val).toBe(0);
    expect(tree.left.val).toBe(-10);
    expect(tree.right.val).toBe(5);
  });

  test('Test 2', () => {
    const tree: any = sortedArrayToBST([1, 3]);
    expect(tree).toEqual(expect.any(Object));
    expect(tree.val).toBe(1);
    expect(tree.right.val).toBe(3);
  });
});
