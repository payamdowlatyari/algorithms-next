// 240. Search a 2D Matrix II

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.
// This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -109 <= matrix[i][j] <= 109
// All the integers in each row are sorted in ascending order.
// All the integers in each column are sorted in ascending order.
// -109 <= target <= 109

/**
 * Searches for a target value in a 2D matrix that is sorted in ascending order both row-wise and column-wise.
 * This function starts from the top-right corner of the matrix and eliminates rows or columns based on comparisons,
 * resulting in an efficient search with a time complexity of O(m + n).
 *
 * @param {number[][]} matrix - The 2D matrix to search within.
 * @param {number} target - The value to search for.
 * @return {boolean} True if the target is found in the matrix, otherwise false.
 *
 * @example
 * Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
 * Output: true
 *
 * Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
 * Output: false
 *
 * Time complexity: O(m + n), where m is the number of rows and n is the number of columns in the matrix.
 * Space complexity: O(1), as we are using a constant amount of space for the search.
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    const current = matrix[row][col];

    if (current === target) {
      return true;
    }

    if (current > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
}
