/**
 * Sorts an array in ascending order using the insertion sort algorithm.
 * This algorithm builds the final sorted array one item at a time,
 * with the array elements being compared with each other and inserted
 * into their correct position.
 *
 * @param {number[]} arr - The array to be sorted.
 *
 * @example
 * const arr = [5, 2, 4, 6, 1, 3];
 * insertionSort(arr);
 * console.log(arr); // [1, 2, 3, 4, 5, 6]
 *
 * Time Complexity: O(n^2) in the worst case, where n is the number of items being sorted.
 * Space Complexity: O(1) as it sorts the array in place.
 */
export const insertionSort = (arr: number[]) => {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
};
