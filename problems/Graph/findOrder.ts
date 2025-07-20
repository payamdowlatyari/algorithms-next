// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates
// that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses.
// If there are many valid answers, return any of them.
// If it is impossible to finish all courses, return an empty array.

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// ai != bi
// All the pairs [ai, bi] are distinct.

/**
 * Find the order of courses to take to finish all courses.
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 *
 * @example
 * findOrder(2, [[1,0]]) // returns [0,1]
 * findOrder(4, [[1,0],[2,0],[3,1],[3,2]]) // returns [0,2,1,3]
 * findOrder(1, []) // returns [0]
 *
 * Time Complexity: O(V + E) // V is the number of vertices and E is the number of edges.
 * Space Complexity: O(V + E) // V is the number of vertices and E is the number of edges.
 */
export const findOrder = (numCourses: number, prerequisites: number[][]) => {
  const adjList: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegree = Array(numCourses).fill(0);
  for (const [course, pre] of prerequisites) {
    adjList[pre].push(course);
    inDegree[course]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  const order: number[] = [];
  while (queue.length > 0) {
    const course: number | undefined = queue.shift();
    if (course === undefined) continue;
    order.push(course);
    for (const nextCourse of adjList[course]) {
      inDegree[nextCourse]--;
      if (inDegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }
  return order.length === numCourses ? order : [];
};
