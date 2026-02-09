// 90. Subsets II

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

/**
 * Finds all possible subsets of an array that may contain duplicates.
 * This function uses a backtracking approach to generate all possible combinations of subsets,
 * while ensuring that duplicate subsets are not included in the result.
 *
 * @param {number[]} nums
 * @return {number[][]}
 *
 * @example
 * Input: nums = [1,2,2]
 * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 *
 * Input: nums = [0]
 * Output: [[],[0]]
 */
export function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [];
  const currentSubset: number[] = [];
  nums.sort((a, b) => a - b);

  function backtrack(start: number): void {
    result.push([...currentSubset]);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }

      currentSubset.push(nums[i]);
      backtrack(i + 1);
      currentSubset.pop();
    }
  }

  backtrack(0);
  return result;
}
