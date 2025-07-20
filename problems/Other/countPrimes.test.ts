import { countPrimes } from './countPrimes';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0

describe('countPrimes', () => {
  test('Example 1', () => {
    const input = 10;
    const output = 4;
    expect(countPrimes(input)).toBe(output);
  });
  test('Example 2', () => {
    const input = 0;
    const output = 0;
    expect(countPrimes(input)).toBe(output);
  });
  test('Example 3', () => {
    const input = 1;
    const output = 0;
    expect(countPrimes(input)).toBe(output);
  });
});
