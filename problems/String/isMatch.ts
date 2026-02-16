// 10. Regular Expression Matching

// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Constraints:

// 1 <= s.length <= 20
// 1 <= p.length <= 20
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

/** * Checks if the input string matches the given pattern with support for '.' and '*'.
 *
 * @param {string} s - The input string to be matched.
 * @param {string} p - The pattern string that may contain '.' and '*'.
 * @return {boolean} True if the string matches the pattern, otherwise false.
 *
 * @example
 * Input: s = "aa", p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 * Input: s = "aa", p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
 *
 * Input: s = "ab", p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 *
 * Time complexity: O(m * n) where m is the length of the string s and n is the length of the pattern p.
 * Space complexity: O(m * n) due to the memoization table used for dynamic programming.
 */
export function isMatch(s: string, p: string): boolean {
  const memo: Record<string, boolean> = {};

  const dp = (i: number, j: number): boolean => {
    const key = `${i},${j}`;
    if (key in memo) {
      return memo[key];
    }

    if (j === p.length) {
      return i === s.length;
    }

    const firstMatch = i < s.length && (p[j] === s[i] || p[j] === '.');

    let result: boolean;
    if (j + 1 < p.length && p[j + 1] === '*') {
      result = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
    } else {
      result = firstMatch && dp(i + 1, j + 1);
    }

    memo[key] = result;
    return result;
  };

  return dp(0, 0);
}
