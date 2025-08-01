// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells,
// where adjacent cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once.

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

// Follow up: Could you use search pruning to make your solution faster with a larger board?

/**
 * Checks if a word exists in the given board.
 *
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 *
 * @example
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 *
 * Time complexity: O(4^(m*n))
 * Space complexity: O(m*n)
 */
export function exist(board: string[][], word: string): boolean {
  let i = board.length;
  let j = board[0].length;

  /**
   * Attempts to find the word in the board starting from position (x, y) and character index n.
   *
   * @param {number} x - The current row index in the board.
   * @param {number} y - The current column index in the board.
   * @param {number} n - The current index in the word being matched.
   * @returns {boolean} - Returns true if the word can be constructed from the board from this position, false otherwise.
   */
  function backtrack(x: number, y: number, n: number): boolean {
    if (n === word.length) return true;

    if (x < 0 || x >= i || y < 0 || y >= j || board[x][y] !== word[n])
      return false;

    let temp = board[x][y];
    board[x][y] = '#';

    for (const [dx, dy] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]) {
      const nextX = x + dx;
      const nextY = y + dy;

      if (backtrack(nextX, nextY, n + 1)) return true;
    }

    board[x][y] = temp;
    return false;
  }

  for (let x = 0; x < i; x++) {
    for (let y = 0; y < j; y++) {
      if (backtrack(x, y, 0)) return true;
    }
  }

  return false;
}
