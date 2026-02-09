import { maxProduct } from './maxProduct';
import { describe, it, expect } from '@jest/globals';

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

describe('maxProduct', () => {
  it('Example 1', () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6);
  });
  it('Example 2', () => {
    expect(maxProduct([-2, 0, -1])).toBe(0);
  });
});
