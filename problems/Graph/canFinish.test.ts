import { canFinish } from './canFinish';
import { expect, it, describe } from '@jest/globals';

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

describe('canFinish', () => {
  it('should return true for example 1', () => {
    const numCourses = 2;
    const prerequisites = [[1, 0]];
    const expected = true;
    const result = canFinish(numCourses, prerequisites);
    expect(result).toBe(expected);
  });
  it('should return false for example 2', () => {
    const numCourses = 2;
    const prerequisites = [
      [1, 0],
      [0, 1],
    ];
    const expected = false;
    const result = canFinish(numCourses, prerequisites);
    expect(result).toBe(expected);
  });
});
