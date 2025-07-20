/**
 * Bubble Sort Algorithm
 * This function sorts an array in ascending order using the bubble sort technique.
 * It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
 * The pass through the list is repeated until the list is sorted.
 *
 * @param {number[]} arr - The array to be sorted.
 * @return {number[]} The sorted array.
 *
 * @example
 * const arr = [64, 34, 25, 12, 22, 11, 90]
 * bubbleSort(arr)
 * console.log(arr) // [11, 12, 22, 25, 34, 64, 90]
 *
 * Time Complexity: O(n^2) in the worst case, where n is the number of items being sorted.
 * Space Complexity: O(1) as it sorts the array in place.
 */
export const bubbleSort = (arr: number[]): number[] => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
  return arr;
};
