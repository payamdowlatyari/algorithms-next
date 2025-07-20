// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that
// you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

/**
 * Determines if all courses can be finished.
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 *
 * @example
 * canFinish(2, [[1,0]]); // true
 * canFinish(2, [[1,0],[0,1]]); // false
 *
 * Time Complexity: O(V + E) // V is the number of vertices and E is the number of edges.
 * Space Complexity: O(V + E) // V is the number of vertices and E is the number of edges.
 */
export const canFinish = (
  numCourses: number,
  prerequisites: number[][],
): boolean => {
  const adjList: number[][] = Array.from({ length: numCourses }, () => []);
  for (const [course, pre] of prerequisites) {
    adjList[course].push(pre);
  }
  const visited = new Set();
  /**
   * Performs a depth-first traversal of the graph to detect cycles.
   * If the function returns false, it means a cycle is detected.
   * @param {number} course - The course to start the traversal from.
   * @returns {boolean} If the traversal detects a cycle, false is returned. Otherwise, true is returned.
   */
  const dfs = (course: number): boolean => {
    if (visited.has(course)) return false;
    if (adjList[course].length === 0) return true;
    visited.add(course);
    for (const pre of adjList[course]) {
      if (!dfs(pre)) return false;
    }
    visited.delete(course);
    adjList[course] = [];
    return true;
  };
  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return false;
  }
  return true;
};
