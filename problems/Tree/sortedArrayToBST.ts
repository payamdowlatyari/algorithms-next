import { TreeNode } from '../DataStructures/TreeNode';

// Given an integer array nums where the elements
// are sorted in ascending order, convert it to a
// height-balanced binary search tree.

// Constraints:

// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums is sorted in a strictly increasing order.

/**
 * Converts a sorted array into a height-balanced binary search tree
 *
 * @param {number[]} nums
 * @return {TreeNode}
 *
 * @example
 * Input: nums = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 *
 *       0
 *      / \
 *    -3   9
 *    /   /
 *  -10  5
 *
 * Example 2:
 * Input: nums = [1,3]
 * Output: [3,1]
 * Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
 *
 *       3
 *      / \
 *     1   null
 *
 * Time complexity: O(n)
 * Space complexity: O(log n)
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  /**
   * Recursively builds a height-balanced binary search tree from a sorted array.
   *
   * @param {number} start - The starting index of the subarray.
   * @param {number} end - The ending index of the subarray.
   * @return {TreeNode|null} - The root node of the subtree, or null if the subarray is empty.
   */
  const buildTree = (start: number, end: number): TreeNode | null => {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(nums[mid], null, null);

    node.left = buildTree(start, mid - 1);
    node.right = buildTree(mid + 1, end);

    return node;
  };

  return buildTree(0, nums.length - 1);
}
