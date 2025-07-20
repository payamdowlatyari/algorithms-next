/**
 * Timsort is a hybrid sorting algorithm, derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data.
 * It was implemented as the standard sort algorithm in Java SE 7 and on the Android platform.
 * It has a worst-case time complexity of O(n log n) and requires a temporary array of the same size as the input array.
 *
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} - The sorted array.
 *
 * @example
 * timSort([3, 1, 2, 6, 4, 5]) // [1, 2, 3, 4, 5, 6]
 *
 * Time Complexity: O(n log n) in the best case, where n is the number of items being sorted.
 * Space Complexity: O(n) as it requires a temporary array of size n to hold the sorted output.
 */
export const timSort = (arr: Array<number>): Array<number> => {
  const n = arr.length;
  const minRun = 32;

  /**
   * Sorts a subarray of the given array using Insertion Sort.
   * This algorithm builds the final sorted array one item at a time,
   * with the array elements being compared with each other and inserted
   * into their correct position.
   *
   * @param {Array<any>} arr - The array containing the subarray to be sorted.
   * @param {number} start - The starting index of the subarray.
   * @param {number} end - The ending index of the subarray.
   *
   * Time Complexity: O(n) in the best case, where n is the length of the subarray.
   * Space Complexity: O(1) as it sorts the array in place.
   */
  const insertionSort = (arr: any[], start: number, end: number) => {
    for (let i = start + 1; i <= end; i++) {
      let j = i;
      while (j > start && arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
      }
    }
  };

  /**
   * Merges two sorted subarrays into one sorted array.
   *
   * @param {any[]} left - The first sorted subarray.
   * @param {any[]} right - The second sorted subarray.
   * @returns {any[]} The merged sorted array.
   *
   * @example
   * merge([1, 3, 5], [2, 4, 6]) // [1, 2, 3, 4, 5, 6]
   */
  const merge = (left: any[], right: any[]): any[] => {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }

    return merged.concat(left.slice(i)).concat(right.slice(j));
  };

  for (let start = 0; start < n; start += minRun) {
    const end = Math.min(start + minRun - 1, n - 1);
    insertionSort(arr, start, end);
  }

  let size = minRun;

  while (size < n) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = Math.min(n - 1, left + size - 1);
      const right = Math.min(left + 2 * size - 1, n - 1);
      const merged = merge(
        arr.slice(left, mid + 1),
        arr.slice(mid + 1, right + 1),
      );
      arr.splice(left, right - left + 1, ...merged);
    }
    size *= 2;
  }

  return arr;
};
