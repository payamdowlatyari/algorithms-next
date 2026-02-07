// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

/**
 * Finds the sum of three integers in the array that is closest to the target.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target integer.
 * @return {number} - The sum of the three integers closest to the target.
 *
 * @example
 * // Example 1:
 * const nums = [-1, 2, 1, -4];
 * const target = 1;
 * console.log(threeSumClosest(nums, target)); // Output: 2
 *
 * Example 2:
 * const nums = [0, 0, 0];
 * const target = 1;
 * console.log(threeSumClosest(nums, target)); // Output: 0
 *
 * Time Complexity: O(n^2) - We fix one element and use two pointers for the rest.
 * Space Complexity: O(1) - We use a constant amount of space.
 */
export function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}
