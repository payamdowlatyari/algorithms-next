import { countingSort } from './countingSort';
import { expect, test, describe } from '@jest/globals';

// Example 1:
// Input: arr = [1, 4, 1, 2, 0, 1]
// Output: [0, 1, 1, 1, 2, 4]
// Explanation: The sorted array is [0, 1, 1, 1, 2, 4].

// Example 2:
// Input: arr = [5, 2, 6, 1, 3, 2]
// Output: [1, 2, 2, 3, 5, 6]
// Explanation: The sorted array is [1, 2, 2, 3, 5, 6].

describe('Counting Sort Algorithm', () => {
  test('sorts an array of non-negative integers', () => {
    expect(countingSort([1, 4, 1, 2, 0, 1])).toEqual([0, 1, 1, 1, 2, 4]);
    expect(countingSort([5, 2, 6, 1, 3, 2])).toEqual([1, 2, 2, 3, 5, 6]);
  });
});
