import { bucketSort } from './bucketSort';
import { expect, test, describe } from '@jest/globals';

// Example 1:
// Input: arr = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]
// Output: [0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.68, 0.72, 0.78, 0.94]

// Example 2:
// Input: arr = [0.5, 0.4, 0.3, 0.2, 0.1]
// Output: [0.1, 0.2, 0.3, 0.4, 0.5]

describe('Bucket Sort Algorithm', () => {
  test('sorts an array of floating point numbers in ascending order', () => {
    expect(
      bucketSort([0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]),
    ).toEqual([0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.68, 0.72, 0.78, 0.94]);
    expect(bucketSort([0.5, 0.4, 0.3, 0.2, 0.1])).toEqual([
      0.1, 0.2, 0.3, 0.4, 0.5,
    ]);
  });
});
