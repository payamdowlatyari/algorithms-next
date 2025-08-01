// Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
// and an integer n, return true if n new flowers can be planted in the flowerbed without violating the
// no-adjacent-flowers rule and false otherwise.

// Constraints:
// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

/**
 * Check if n new flowers can be planted in the flowerbed.
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 *
 * @example
 * canPlaceFlowers([1,0,0,0,1], 2) // true
 * canPlaceFlowers([1,0,0,0,1], 3) // false
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;

  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = n;
      n--;
    }

    if (n === 0) return true;
  }

  return false;
}
