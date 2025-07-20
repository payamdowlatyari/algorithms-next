import { findOrder } from './findOrder';
import { expect, it, describe } from '@jest/globals';

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]

describe('findOrder', () => {
  it('should return [0,1] for example 1', () => {
    const numCourses: number = 2;
    const prerequisites: number[][] = [[1, 0]];
    const expected: number[] = [0, 1];
    const result = findOrder(numCourses, prerequisites);
    expect(result).toEqual(expected);
  });
  it('should return [0,2,1,3] for example 2', () => {
    const numCourses: number = 4;
    const prerequisites: number[][] = [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ];
    const expected: number[][] = [
      [0, 1, 2, 3],
      [0, 2, 1, 3],
    ];
    const result = findOrder(numCourses, prerequisites);
    expect(expected).toContainEqual(result);
  });
  it('should return [0] for example 3', () => {
    const numCourses: number = 1;
    const prerequisites: number[][] = [];
    const expected: number[] = [0];
    const result = findOrder(numCourses, prerequisites);
    expect(result).toEqual(expected);
  });
});
