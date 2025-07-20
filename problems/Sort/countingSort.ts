/**
 * Sorts an array using the Counting Sort algorithm.
 * This algorithm works by counting the occurrences of each distinct element in the array,
 * and then calculating the position of each element in the sorted array.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - A new array with the elements sorted in ascending order.
 *
 * @example
 * countingSort([4, 2, 2, 8, 3, 3, 1]) // [1, 2, 2, 3, 3, 4, 8]
 *
 * Time Complexity: O(n + k), where n is the number of elements in the input array,
 * and k is the range of the input values.
 * Space Complexity: O(n + k) as it requires additional space for the count and output arrays.
 */
export const countingSort = (arr: number[]): number[] => {
  const max_num = Math.max(...arr);
  const min_num = Math.min(...arr);
  const count_range = max_num - min_num + 1;
  const count = Array(count_range).fill(0);
  const output = Array(arr.length);

  for (const num of arr) {
    count[num - min_num]++;
  }

  for (let i = 1; i < count_range; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min_num] - 1] = arr[i];
    count[arr[i] - min_num]--;
  }

  return output;
};
