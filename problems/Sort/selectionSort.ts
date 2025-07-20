/**
 * Sorts the given array in-place using the selection sort algorithm.
 * This algorithm divides the input array into two parts: a sorted and an unsorted part.
 * It repeatedly selects the smallest (or largest, depending on the order) element from the unsorted part and moves it to the end of the sorted part.
 *
 * @param {array} arr The array to sort.
 *
 *
 * @example
 * selectionSort([3, 1, 2, 6, 4, 5]) // [1, 2, 3, 4, 5, 6]
 *
 * Time Complexity: O(n^2) in the worst case, where n is the number of items being sorted.
 * Space Complexity: O(1) as it sorts the array in place.
 */
export const selectionSort = (arr: Array<any>) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};
