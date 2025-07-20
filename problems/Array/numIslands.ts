// Given an m x n 2D binary grid grid which represents
// a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * Count the number of islands in a 2D binary grid.
 * An island is a group of connected 1s (land) that are not connected to any other 1s (land).
 * Each cell is either a 0 (water) or a 1 (land).
 *
 * @param {string[][]} grid - A 2D binary grid.
 * @return {number} - The number of islands in the grid.
 *
 * @example
 * const grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ];
 * const result = numIslands(grid);
 * console.log(result); // Output: 1
 *
 * Time complexity: O(m * n)
 * Space complexity: O(m * n)
 */
export function numIslands(grid: string[][]): number {
  let count = 0;

  /**
   * Perform a depth-first search on a 2D grid from the given position (i, j).
   * The search marks all connected 1s (land) as 0s (water).
   *
   * @param {string[][]} grid - A 2D binary grid.
   * @param {number} i - The row index of the starting position.
   * @param {number} j - The column index of the starting position.
   */
  function dfs(grid: string[][], i: number, j: number) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[i].length ||
      grid[i][j] === '0'
    )
      return;
    grid[i][j] = '0';
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
}
