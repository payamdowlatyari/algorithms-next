// You are given an integer n that consists of exactly 3 digits.

// We call the number n fascinating if, after the following modification,
// the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:

// Concatenate n with the numbers 2 * n and 3 * n.
// Return true if n is fascinating, or false otherwise.

// Concatenating two numbers means joining them together.
// For example, the concatenation of 121 and 371 is 121371.

// Constraints:

// 100 <= n <= 999

/**
 * Checks if a number is fascinating.
 * A fascinating number is a 3-digit number that, when concatenated with its multiples
 * (2 * n and 3 * n), contains all digits from 1 to 9 exactly once.
 *
 * @param {number} n
 * @return {boolean}
 *
 * @example
 * isFascinating(192) // true
 * isFascinating(100) // false
 *
 * Time complexity: O(1)
 * Space complexity: O(1)
 */
export function isFascinating(n: number): boolean {
  let isFasc: string = `${n}${2 * n}${3 * n}`;

  for (let i = 0; i < isFasc.length; i++) {
    if (isFasc[i] === '0') return false;
  }
  for (let digit = 1; digit <= 9; digit++) {
    if (!isFasc.includes(digit.toString())) return false;
  }

  return true;
}
