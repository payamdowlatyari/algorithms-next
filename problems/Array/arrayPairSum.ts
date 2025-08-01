// Array Partition

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn)
// such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// Constraints:
// 1 <= n <= 104
// nums.length == 2 * n
// -104 <= nums[i] <= 104

/**
 * Find the maximum sum of min(ai, bi) for all pairs (ai, bi).
 *
 * @param {number[]} nums
 * @return {number}
 *
 * @example
 * Input: nums = [1,4,3,2]
 * Output: 4
 * Explanation: All possible pair sums are:
 * 1. (1,4), (2,3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
 * 2. (1,3), (2,4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
 * 3. (1,2), (3,4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
 * // So the maximum possible sum is 4.
 *
 * Time complexity: O(n log n)
 * Space complexity: O(1)
 */
export function arrayPairSum(nums: number[]): number {
  nums.sort((a: number, b: number) => a - b);

  return nums.reduce(
    (acc: number, _: number, i: number) => (i % 2 === 0 ? acc + nums[i] : acc),
    0,
  );
}
