// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Constraints:

// 1 <= n <= 8

/**
 * Generate all combinations of well-formed parentheses.
 *
 * @param {number} n
 * @return {string[]}
 *
 * @example
 * generateParenthesis(3); // ["((()))", "(()())", "(())()", "()(())", "()()()"]
 *
 * Time complexity: O(2^n)
 * Space complexity: O(n)
 */
export function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  /**
   * Backtrack to generate all combinations of well-formed parentheses.
   *
   * @param {number} left - The number of open parentheses.
   * @param {number} right - The number of close parentheses.
   * @param {string} str - The current string generated.
   */
  const backtrack = (left: number, right: number, str: string) => {
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    if (left < n) {
      backtrack(left + 1, right, str + '(');
    }
    if (right < left) {
      backtrack(left, right + 1, str + ')');
    }
  };
  backtrack(0, 0, '');
  return result;
}
