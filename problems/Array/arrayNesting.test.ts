import { arrayNesting } from './arrayNesting';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: nums = [5,4,0,3,1,6,2]
// Output: 4
// Explanation:
// nums[0] = 5, nums[1] = 4, nums[2] = 0, nums[3] = 3, nums[4] = 1, nums[5] = 6, nums[6] = 2.
// One of the longest sets s[k]:
// s[0] = {nums[0], nums[5], nums[6], nums[2]} = {5, 6, 2, 0}

// Example 2:

// Input: nums = [0,1,2]
// Output: 1
// Explanation: The only set s[k] is {nums[0], nums[1], nums[2]} = {0, 1, 2}.
// The longest length of a set s[k] is 1, as each element points to itself.

// Example 3:
// Input: nums = [1,2,0]
// Output: 3
// Explanation: The longest set is {1, 2, 0}.

describe('arrayNesting', () => {
  test('Example 1', () => {
    expect(arrayNesting([5, 4, 0, 3, 1, 6, 2])).toBe(4);
  });
  test('Example 2', () => {
    expect(arrayNesting([0, 1, 2])).toBe(1);
  });
  test('Example 3', () => {
    expect(arrayNesting([1, 2, 0])).toBe(3);
  });
});
