import { insertionSort } from './insertionSort';
import { expect, test, describe } from '@jest/globals';

// Example 1:
// Input: arr = [3, 1, 2, 6, 4, 5]
// Output: [1, 2, 3, 4, 5, 6]
// Explanation: The sorted array is [1, 2, 3, 4, 5, 6].

// Example 2:
// Input: arr = [5, 2, 6, 1, 3, 2]
// Output: [1, 2, 2, 3, 5, 6]
// Explanation: The sorted array is [1, 2, 2, 3, 5, 6].

describe('Insertion Sort Algorithm', () => {
  test('Example 1', () => {
    const input = [3, 1, 2, 6, 4, 5];
    const output = [1, 2, 3, 4, 5, 6];
    expect(insertionSort(input)).toEqual(output);
  });

  test('Example 2', () => {
    const input = [5, 2, 6, 1, 3, 2];
    const output = [1, 2, 2, 3, 5, 6];
    expect(insertionSort(input)).toEqual(output);
  });
});
