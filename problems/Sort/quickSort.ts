/**
 * Sorts the given array in-place using the Quick Sort algorithm.
 * This algorithm is a divide-and-conquer algorithm that divides the input
 * array into two halves, sorts each half recursively, and then merges the sorted
 * halves to obtain the final sorted array.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} The sorted array.
 *
 * @example
 * quickSort([3, 1, 2, 6, 4, 5]) // [1, 2, 3, 4, 5, 6]
 *
 * Time Complexity: O(n log n) in the best case, where n is the number of items being sorted.
 * Space Complexity: O(n) as it requires a temporary array of size n to hold the sorted output.
 */
export const quickSort = (arr: number[]): number[] => {
  /**
   * Partitions the given array into two halves, such that all elements to the left of the pivot element
   * are less than the pivot element, and all elements to the right of the pivot element are greater than
   * the pivot element.
   *
   * @param {number[]} arr - The array to be partitioned.
   * @param {number} left - The starting index of the subarray.
   * @param {number} right - The ending index of the subarray.
   * @returns {number} The index of the pivot element.
   */
  const partition = (arr: number[], left: number, right: number): number => {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
  };
  /**
   * A helper function for the Quick Sort algorithm.
   * It recursively divides the given array into two halves, sorts each half recursively,
   * and then merges the sorted halves to obtain the final sorted array.
   *
   * @param {number[]} arr - The array to be sorted.
   * @param {number} left - The starting index of the subarray.
   * @param {number} right - The ending index of the subarray.
   * @returns {number[]} The sorted array.
   */
  const quickSortHelper = (
    arr: number[],
    left: number,
    right: number,
  ): number[] => {
    if (left < right) {
      const pivot = partition(arr, left, right);
      quickSortHelper(arr, left, pivot - 1);
      quickSortHelper(arr, pivot + 1, right);
    }
    return arr;
  };

  return quickSortHelper(arr, 0, arr.length - 1);
};
