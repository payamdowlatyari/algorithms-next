/**
 * Sorts the given array in-place using the Bucket Sort algorithm.
 * This algorithm divides the input array into a number of sublists, each of which is sorted using Insertion Sort.
 * The sublists are then merged and the process is repeated until the entire array is sorted.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} The sorted array.
 *
 * @example
 * bucketSort([3, 1, 2, 6, 4, 5]) // [1, 2, 3, 4, 5, 6]
 *
 * Time Complexity: O(n + k) in the best case, where n is the number of items being sorted and k is the range of input.
 * Space Complexity: O(n + k) as it requires a temporary array of size n + k to hold the sorted output.
 */
export const bucketSort = (arr: number[]): number[] => {
  const num_buckets = 10;
  const min_num = Math.min(...arr);
  const max_num = Math.max(...arr);
  const bucket_size = (max_num - min_num) / num_buckets;
  const buckets: number[][] = Array.from({ length: num_buckets }, () => []);

  for (const num of arr) {
    const index = Math.min(
      Math.floor((num - min_num) / bucket_size),
      num_buckets - 1,
    );
    buckets[index].push(num);
  }

  return buckets.flatMap((bucket) => bucket.sort((a, b) => a - b));
};
