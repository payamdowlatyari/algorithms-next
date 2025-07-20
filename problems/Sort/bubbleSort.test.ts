import { bubbleSort } from './bubbleSort';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: arr = [64, 34, 25, 12, 22, 11, 90]
// Output: [11, 12, 22, 25, 34, 64, 90]
// Explanation: After 7 iterations the array is sorted in ascending order.

// Example 2:

// Input: arr = [5, 4, 3, 2, 1]
// Output: [1, 2, 3, 4, 5]
// Explanation: After 5 iterations the array is sorted in ascending order.

describe('Bubble Sort Algorithm', () => {
  test('sorts an array in ascending order', () => {
    expect(bubbleSort([64, 34, 25, 12, 22, 11, 90])).toEqual([
      11, 12, 22, 25, 34, 64, 90,
    ]);
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
