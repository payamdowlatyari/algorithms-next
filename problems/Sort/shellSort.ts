/**
 * Sorts the given array in-place using the Shell Sort algorithm.
 * This algorithm is a comparison based sorting algorithm which is
 * an improvement over Insertion Sort. It works by dividing the input
 * array into a number of sublists, each of which is sorted using Insertion
 * Sort. The sublists are then merged and the process is repeated until
 * the entire array is sorted.
 *
 * @param {array} arr The array to be sorted.
 *
 * @example
 * shellSort([3, 1, 2, 6, 4, 5]) // [1, 2, 3, 4, 5, 6]
 *
 * Time Complexity: O(n log n) in the best case, where n is the number of items being sorted.
 * Space Complexity: O(1) as it sorts the array in place.
 */
export const shellSort = (arr: Array<any>) => {
  const n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
  }
  return arr;
};
