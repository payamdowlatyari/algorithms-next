// You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B',
// representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.

// You are also given an integer k, which is the desired number of consecutive black blocks.
// In one operation, you can recolor a white block such that it becomes a black block.

// Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

// Constraints:

// n == blocks.length
// 1 <= n <= 100
// blocks[i] is either 'W' or 'B'.
// 1 <= k <= n

/**
 * Finds the minimum number of operations needed to achieve k consecutive black blocks.
 *
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 *
 * @example
 * Input: blocks = "WBBWWBBWBW", k = 7
 * Output: 3
 * Explanation: One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks.
 * Therefore, we return 3.
 *
 * Input: blocks = "WBWBBBW", k = 2
 * Output: 0
 * Explanation: It is already possible to have 2 consecutive black blocks, so we return 0.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function minimumRecolors(blocks: string, k: number): number {
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === 'W') count++;
  }

  let minCount = count;

  for (let i = k; i < blocks.length; i++) {
    if (blocks[i] === 'W') count++;
    if (blocks[i - k] === 'W') count--;

    minCount = Math.min(minCount, count);
  }

  return minCount;
}
