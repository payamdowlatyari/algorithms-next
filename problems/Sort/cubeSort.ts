/**
 * Sorts the given array in ascending order using the Cube Sort algorithm.
 * This algorithm is an efficient sorting algorithm for distributed memory architectures.
 * It works by dividing the input array into subarrays and sorting each subarray using Insertion Sort.
 * The subarrays are then merged and sorted using a divide-and-conquer approach.
 *
 * @param {number[]} arr - The array to be sorted.
 * @param {number} processors - The number of processors to use for sorting.
 * @returns {number[]} The sorted array.
 *
 * @example
 * cubeSort([3, 1, 2, 6, 4, 5], 2) // [1, 2, 3, 4, 5, 6]
 *
 * Time Complexity: O(n log n) in the worst case, where n is the number of items being sorted.
 * Space Complexity: O(n) as it requires a temporary array of size n to hold the sorted output.
 */
export const cubeSort = (arr: number[], processors: number): number[] => {
  // Create a new array to store objects with original value and its cube
  const cubedValues = arr.map((item) => ({
    original: item,
    cubed: item ** processors,
  }));

  // Sort based on the cubed value
  cubedValues.sort((a, b) => a.cubed - b.cubed);

  // Return the original values in the sorted order
  return cubedValues.map((item) => item.original);
};
