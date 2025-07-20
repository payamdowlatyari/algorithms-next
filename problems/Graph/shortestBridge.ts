// You are given an n x n binary matrix grid where 1 represents land and 0 represents water.
// An island is a 4-directionally connected group of 1's not connected to any other 1's.
// There are exactly two islands in grid.

// You may change 0's to 1's to connect the two islands to form one island.
// Return the smallest number of 0's you must flip to connect the two islands.

// Constraints:

// n == grid.length == grid[i].length
// 2 <= n <= 100
// grid[i][j] is either 0 or 1.
// There are exactly two islands in grid.

/**
 * Returns the smallest number of 0's that must be flipped in the grid to connect the two islands.
 * @param {number[][]} grid - An n x n binary matrix where 1 represents land and 0 represents water.
 * @return {number} The smallest number of 0's that must be flipped.
 *
 * @example
 * const grid = [
 *   [0, 0, 0, 0, 0],
 *   [0, 1, 1, 1, 0],
 *   [0, 1, 0, 1, 0],
 *   [0, 1, 1, 1, 0],
 *   [0, 0, 0, 0, 0]
 * ];
 * console.log(shortestBridge(grid)); // Output: 1
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 */
export function shortestBridge(grid: number[][]): number {
  const n = grid.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const queue: [number, number][] = [];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  /**
   * Checks if the given position (x, y) is within the bounds of the grid.
   */
  const isValid = (x: number, y: number) => x >= 0 && y >= 0 && x < n && y < n;

  /**
   * Performs a depth-first search on the grid from the given position (x, y).
   * The search marks all connected 1s (land) as visited and adds them to the queue.
   * @param {number} x - The row index of the starting position.
   * @param {number} y - The column index of the starting position.
   */
  const dfs = (x: number, y: number) => {
    if (!isValid(x, y) || grid[x][y] === 0 || visited[x][y]) return;
    visited[x][y] = true;
    queue.push([x, y]);
    for (const [dx, dy] of directions) {
      dfs(x + dx, y + dy);
    }
  };

  let found = false;
  for (let i = 0; i < n && !found; i++) {
    for (let j = 0; j < n && !found; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        found = true;
      }
    }
  }

  let distance = 0;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const pos = queue.shift();
      if (!pos) continue;
      const [x, y] = pos;
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (isValid(nx, ny) && !visited[nx][ny]) {
          if (grid[nx][ny] === 1) return distance;
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
    distance++;
  }

  return distance;
}
