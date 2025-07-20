// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a subarray whose sum is greater than or equal to target.
// If there is no such subarray, return 0 instead.

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
/**
 * Finds the minimal length of a contiguous subarray whose sum is at least target.
 *
 * @param {number} target - The target sum to achieve.
 * @param {number[]} nums - The array of positive integers.
 * @return {number} - The minimal length of the subarray, or 0 if no such subarray exists.
 *
 * @example
 * // Example 1:
 * const target = 7;
 * const nums = [2, 3, 1, 2, 4, 3];
 * console.log(minSubArrayLen(target, nums)); // Output: 2
 *
 * // Example 2:
 * const target = 4;
 * const nums = [1, 4, 4];
 * console.log(minSubArrayLen(target, nums)); // Output: 1
 *
 * // Example 3:
 * const target = 11;
 * const nums = [1, 1, 1, 1, 1, 1, 1, 1];
 * console.log(minSubArrayLen(target, nums)); // Output: 0
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
