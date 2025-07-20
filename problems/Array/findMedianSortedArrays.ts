// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// Follow up: Can you implement a solution with a complexity better than O(log (m+n)) ?

/**
 * Find the median of two sorted arrays.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *
 * @example
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 *
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 *
 * Time complexity: O(m + n)
 * Space complexity: O(m + n)
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  let m = nums1.length;
  let n = nums2.length;
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  // If there are remaining elements in either array, add them
  while (i < m) {
    merged.push(nums1[i]);
    i++;
  }
  while (j < n) {
    merged.push(nums2[j]);
    j++;
  }

  // Find the median
  let totalLength = merged.length;
  if (totalLength % 2 === 1) {
    return merged[Math.floor(totalLength / 2)];
  } else {
    return (merged[totalLength / 2 - 1] + merged[totalLength / 2]) / 2;
  }
}
