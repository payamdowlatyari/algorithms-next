// 152. Maximum Product Subarray

// Given an integer array nums, find a subarray that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// Note that the product of an array with a single element is the value of that element.

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any subarray of nums is guaranteed to fit in a 32-bit integer.

/**
 * Finds the maximum product of a contiguous subarray within an array of integers.
 * This function uses a dynamic programming approach to keep track of the maximum and minimum products at each step,
 * which allows it to handle negative numbers effectively.
 *
 * @param {number[]} nums - The input array of integers.
 * @return {number} The maximum product of a contiguous subarray.
 *
 * @example
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 *
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 *
 * Time complexity: O(n), where n is the length of the input array.
 * Space complexity: O(1), as we are using a constant amount of space to store the maximum and minimum products.
 */
export function maxProduct(nums: number[]): number {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    maxProduct = Math.max(maxProduct * num, num);
    minProduct = Math.min(minProduct * num, num);
    max = Math.max(max, maxProduct);
  }

  return max;
}
