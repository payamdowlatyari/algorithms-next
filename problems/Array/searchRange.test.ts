import { searchRange } from './searchRange';
import { expect, test, describe } from '@jest/globals';

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

describe('searchRange', () => {
  test('Example 1', () => {
    const nums1: number[] = [5, 7, 7, 8, 8, 10];
    const target1: number = 8;
    const result1: number[] = searchRange(nums1, target1);
    expect(result1).toEqual([3, 4]);
  });

  test('Example 2', () => {
    const nums2: number[] = [5, 7, 7, 8, 8, 10];
    const target2: number = 6;
    const result2: number[] = searchRange(nums2, target2);
    expect(result2).toEqual([-1, -1]);
  });

  test('Example 3', () => {
    const nums3: number[] = [];
    const target3: number = 0;
    const result3: number[] = searchRange(nums3, target3);
    expect(result3).toEqual([-1, -1]);
  });
});
