// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

/**
 * Finds all unique combinations of candidates that sum up to the target.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *
 * @example
 * Input: candidates = [2, 3, 6, 7], target = 7
 * Output: [[7], [2, 2, 3]]
 *
 * Time Complexity: O(2^n) - In the worst case, we explore all combinations.
 * Space Complexity: O(n) - The depth of the recursion stack.
 */
export const combinationSum = function (
  candidates: number[],
  target: number,
): number[][] {
  const results: number[][] = [];

  /**
   * Recursively finds combinations that sum up to the target.
   *
   * @param {number} start - The starting index for candidates.
   * @param {number} currentSum - The current sum of the combination.
   * @param {number[]} combination - The current combination being built.
   */
  function backtrack(start: number, currentSum: number, combination: number[]) {
    if (currentSum === target) {
      results.push([...combination]);
      return;
    }
    if (currentSum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(i, currentSum + candidates[i], combination);
      combination.pop();
    }
  }

  backtrack(0, 0, []);
  return results;
};
