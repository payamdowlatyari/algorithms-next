import { describe, expect, test } from '@jest/globals';
import { minSubArrayLen } from './minSubArrayLen';

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Explanation: The subarray [4] has the minimal length under the problem constraint.

// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
// Explanation: There is no subarray with a sum greater than or equal to 11.

describe('minSubArrayLen', () => {
  test('Example 1', () => {
    const target = 7;
    const nums = [2, 3, 1, 2, 4, 3];
    expect(minSubArrayLen(target, nums)).toBe(2);
  });

  test('Example 2', () => {
    const target = 4;
    const nums = [1, 4, 4];
    expect(minSubArrayLen(target, nums)).toBe(1);
  });

  test('Example 3', () => {
    const target = 11;
    const nums = [1, 1, 1, 1, 1, 1, 1, 1];
    expect(minSubArrayLen(target, nums)).toBe(0);
  });
});
