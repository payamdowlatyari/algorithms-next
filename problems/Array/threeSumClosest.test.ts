import { threeSumClosest } from './threeSumClosest';
import { describe, expect, it } from '@jest/globals';

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

describe('threeSumClosest', () => {
  it('should find the sum of three integers closest to the target', () => {
    const nums = [-1, 2, 1, -4];
    const target = 1;
    expect(threeSumClosest(nums, target)).toBe(2);
  });

  it('should handle cases where the closest sum is less than the target', () => {
    const nums = [0, 0, 0];
    const target = 1;
    expect(threeSumClosest(nums, target)).toBe(0);
  });
});
