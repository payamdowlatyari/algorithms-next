// There is an integer array nums sorted in non-decreasing order
// (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).

// For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target,
// return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// nums is guaranteed to be rotated at some pivot.
// -104 <= target <= 104

/**
 * Searches for a target value in a rotated sorted array.
 * The array may contain duplicates, which complicates the search.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 *
 * @example
 * Input: nums = [2,5,6,0,0,1,2], target = 0
 * Output: true
 *
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */
export function searchSortedArray(nums: number[], target: number): boolean {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return true;
    }

    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[left] > nums[mid]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      left++;
    }
  }

  return false;
}
