/**
 * Sorts an array in ascending order using the Heap Sort algorithm.
 * This algorithm builds a max heap from the input data, and then repeatedly extracts the maximum element and
 * rebuilds the heap until the array is sorted.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} The sorted array.
 *
 * @example
 * heapSort([3, 1, 2, 6, 4, 5]) // [1, 2, 3, 4, 5, 6]
 *
 * Time Complexity: O(n log n) in the worst case, where n is the number of items being sorted.
 * Space Complexity: O(1) as it sorts the array in place.
 */
export const heapSort = (arr: number[]): number[] => {
  const n = arr.length;

  /**
   * Rebuilds the heap from the given node to the bottom of the tree.
   * This function is used to build the initial max heap and to rebuild the heap after extracting the maximum element.
   *
   * @param {Array<number>} arr - The array to be sorted.
   * @param {number} n - The number of elements in the heap.
   * @param {number} i - The index of the current node.
   * @returns {void}
   */
  const heapify = (arr: number[], n: number, i: number) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  };

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, i, 0);
  }

  return arr;
};
