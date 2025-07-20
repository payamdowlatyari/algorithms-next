/**
 * Sorts the given array using the Counting Sort algorithm with the given exponent.
 * This function is a helper function for Radix Sort.
 *
 * @param {number[]} arr - The array to be sorted.
 * @param {number} exp - The exponent to be used for sorting.
 *
 * @example
 * countingSort([170, 45, 75, 90, 802, 24, 2, 66], 1) // [2, 24, 45, 66, 75, 90, 170, 802]
 *
 * Time Complexity: O(n + k), where n is the number of elements in the array and
 * k is the range of the input.
 * Space Complexity: O(n + k) as it requires a temporary array of size n + k to hold the sorted output.
 */
export const countingSort = (arr: number[], exp: number) => {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const idx = Math.floor(arr[i] / exp);
    count[idx % 10] += 1;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  let i = n - 1;

  while (i >= 0) {
    const idx = Math.floor(arr[i] / exp);
    output[count[idx % 10] - 1] = arr[i];
    count[idx % 10] -= 1;
    i -= 1;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
};

/**
 * Sorts an array of non-negative integers using the Radix Sort algorithm.
 * This algorithm processes each digit of the numbers starting from the least
 * significant digit to the most significant digit, utilizing a stable sort
 * at each digit level.
 *
 * @param {number[]} arr - The array to be sorted.
 *
 * @example
 * const arr = [170, 45, 75, 90, 802, 24, 2, 66];
 * radixSort(arr);
 * console.log(arr); // [2, 24, 45, 66, 75, 90, 170, 802]
 *
 * Time Complexity: O(d * (n + k)), where d is the number of digits in the
 * largest number, n is the number of elements in the input array, and k is
 * the range of the digit (0 to 9 in this case).
 * Space Complexity: O(n + k) due to the additional space required for the
 * counting sort.
 */
export const radixSort = (arr: number[]) => {
  const maxVal = Math.max(...arr);
  let exp = 1;

  while (maxVal / exp > 0) {
    countingSort(arr, exp);
    exp *= 10;
  }

  return arr;
};
