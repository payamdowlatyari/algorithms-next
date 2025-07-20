/**
 * Sorts an array in ascending order using the Merge Sort algorithm.
 * This algorithm is a divide-and-conquer algorithm that divides the input array into two halves,
 * sorts each half recursively, and then merges the sorted halves to obtain the final sorted array.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} The sorted array.
 *
 * @example
 * mergeSort([3, 1, 2, 6, 4, 5]) // [1, 2, 3, 4, 5, 6]
 *
 * Time Complexity: O(n log n) in the best case, where n is the number of items being sorted.
 * Space Complexity: O(n) as it requires a temporary array of size n to hold the sorted output.
 */
export const mergeSort = (arr: number[]): number[] => {
  const n = arr.length;

  if (n <= 1) {
    return arr;
  }

  const mid = Math.floor(n / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  /**
   * Merges two sorted arrays into one sorted array.
   *
   * @param {number[]} left - The first sorted array.
   * @param {number[]} right - The second sorted array.
   * @returns {number[]} The merged sorted array.
   *
   * @example
   * merge([1, 3], [2, 4]) // [1, 2, 3, 4]
   */
  const merge = (left: number[], right: number[]): number[] => {
    const output: number[] = [];

    while (left.length && right.length) {
      const minNum = left[0] <= right[0] ? left.shift() : right.shift();
      output.push(minNum as number);
    }

    output.push(...left);
    output.push(...right);

    return output;
  };

  return merge(left, right);
};
