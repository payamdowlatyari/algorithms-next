import { cubeSort } from './cubeSort';
import { describe, expect, test } from '@jest/globals';

// Example 1:
// Input: arr = [3, 1, 2, 6, 4, 5], processors = 2
// Output: [1, 2, 3, 4, 5, 6]
// Explanation: The sorted array is [1, 2, 3, 4, 5, 6] after sorting with 2 processors.

describe('Cube Sort Algorithm', () => {
  test('Test 1', () => {
    const arr = [3, 1, 2, 6, 4, 5];
    const processors = 2;
    const result = cubeSort(arr, processors);
    console.log(result);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
