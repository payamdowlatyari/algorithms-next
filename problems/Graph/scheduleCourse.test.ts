import { scheduleCourse } from './scheduleCourse';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
// Output: 3
// Explanation:
// There are totally 4 courses, but you can take 3 courses at most:
// First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
// Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day.
// Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day.
// The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.

// Example 2:

// Input: courses = [[1,2]]
// Output: 1

// Example 3:

// Input: courses = [[3,2],[4,3]]
// Output: 0

// Example 4:

// Input: courses = [[5,5],[4,6],[2,6]]
// Output: 2

describe('scheduleCourse', () => {
  test('should return 3 for example 1', () => {
    const courses: [number, number][] = [
      [100, 200],
      [200, 1300],
      [1000, 1250],
      [2000, 3200],
    ];
    const expected: number = 3;
    const result = scheduleCourse(courses);
    expect(result).toBe(expected);
  });
  test('should return 1 for example 2', () => {
    const courses: [number, number][] = [[1, 2]];
    const expected: number = 1;
    const result = scheduleCourse(courses);
    expect(result).toBe(expected);
  });
  test('should return 0 for example 3', () => {
    const courses: [number, number][] = [
      [3, 2],
      [4, 3],
    ];
    const expected: number = 0;
    const result = scheduleCourse(courses);
    expect(result).toBe(expected);
  });
  test('should return 2 for example 4', () => {
    const courses: [number, number][] = [
      [5, 5],
      [4, 6],
      [2, 6],
    ];
    const expected: number = 2;
    const result = scheduleCourse(courses);
    expect(result).toBe(expected);
  });
});
