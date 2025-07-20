// You are given an integer array nums of length n where nums is a permutation of the numbers in the range [0, n - 1].
// You should build a set s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... } subjected to the following rule:

// The first element in s[k] starts with the selection of the element nums[k] of index = k.
// The next element in s[k] should be nums[nums[k]], and then nums[nums[nums[k]]], and so on.
// We stop adding right before a duplicate element occurs in s[k].
// Return the longest length of a set s[k].

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] < nums.length
// All the values of nums are unique.
/**
 * Find the length of the longest set s[k] based on the given rules.
 *
 * @param {number[]} nums - The input array representing a permutation.
 * @return {number} - The length of the longest set s[k].
 *
 * @example
 * Input: nums = [5,4,0,3,1,6,2]
 * Output: 4
 * Explanation: The longest set is {5, 6, 2, 0}.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function arrayNesting(nums: number[]): number {
  let max = 0;
  let n = nums.length;
  let visited = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    let count = 0;
    let j = i;
    while (!visited[j]) {
      visited[j] = true;
      count++;
      j = nums[j];
    }
    max = Math.max(max, count);
  }
  return max;
}
