// Given an integer n, return the number of prime numbers that are strictly less than n.
// A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.

// Constraints:
// 0 <= n <= 5 * 106

/**
 * Count the number of prime numbers less than n using the Sieve of Eratosthenes.
 * @description This function uses an efficient algorithm to count primes.
 *
 * @param {number} n
 * @return {number}
 *
 * @example
 * countPrimes(10); // returns 4, as there are 4 primes less than 10: 2, 3, 5, 7
 * countPrimes(0); // returns 0, as there are no primes less than 0
 * countPrimes(1); // returns 0, as there are no primes less than 1
 *
 * Time complexity: O(n log log n)
 * Space complexity: O(n)
 */
export function countPrimes(n: number): number {
  if (n <= 2) return 0;

  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.reduce((count, prime) => count + prime, 0);
}
