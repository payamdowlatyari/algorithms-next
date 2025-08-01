import { rotateArray } from './rotateArray';
import { describe, test, expect } from '@jest/globals';

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

describe('rotate', () => {
  test('Example 1', () => {
    const nums1 = [1, 2, 3, 4, 5, 6, 7];
    rotateArray(nums1, 3);
    expect(nums1).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  test('Example 2', () => {
    const nums2 = [-1, -100, 3, 99];
    rotateArray(nums2, 2);
    expect(nums2).toEqual([3, 99, -1, -100]);
  });
});
