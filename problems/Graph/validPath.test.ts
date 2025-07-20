import { validPath } from './validPath';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2

// Example 2:

// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.

describe('Valid Path', () => {
  test('Example 1', () => {
    const n = 3;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 0],
    ];
    const source = 0;
    const destination = 2;
    expect(validPath(n, edges, source, destination)).toBe(true);
  });

  test('Example 2', () => {
    const n = 6;
    const edges = [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ];
    const source = 0;
    const destination = 5;
    expect(validPath(n, edges, source, destination)).toBe(false);
  });
});
