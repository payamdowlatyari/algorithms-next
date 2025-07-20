// There are n different online courses numbered from 1 to n.
// You are given an array courses where courses[i] = [durationi, lastDayi] indicate that the ith course
// should be taken continuously for durationi days and must be finished before or on lastDayi.

// You will start on the 1st day and you cannot take two or more courses simultaneously.

// Return the maximum number of courses that you can take.

// Constraints:

// 1 <= courses.length <= 104
// 1 <= durationi, lastDayi <= 104

/**
 * Find the maximum number of courses that can be taken.
 *
 * @param {number[][]} courses
 * @return {number}
 *
 * @example
 * scheduleCourse([[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]) // returns 3
 * scheduleCourse([[1, 2]]) // returns 1
 * scheduleCourse([[3, 2], [4, 3]]) // returns 0
 * scheduleCourse([[5, 5], [4, 6], [2, 6]]) // returns 2
 *
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 */
export const scheduleCourse = (courses: [number, number][]): number => {
  courses.sort((a, b) => a[0] - b[0]);
  const heap: number[] = [];
  let days = 0;
  for (const [duration, lastDay] of courses) {
    if (days + duration <= lastDay) {
      days += duration;
      heap.push(duration);
      heap.sort((a, b) => a - b);
    } else if (heap.length > 0 && heap[0] > duration) {
      days -= heap[0] - duration;
      heap[0] = duration;
      heap.sort((a, b) => a - b);
    }
  }
  return heap.length;
};
