import { findMedianSortedArrays } from './findMedianSortedArrays';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

describe('Describe Cases', () => {
  test('Test 1', () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    const sum = findMedianSortedArrays(nums1, nums2);
    expect(sum).toEqual(2);
  });
  test('Test 2', () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const sum = findMedianSortedArrays(nums1, nums2);
    expect(sum).toEqual(2.5);
  });
});
