import { longestPalindrome } from './longestPalindromeSubstring';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

describe('longestPalindrome', () => {
  test('Example 1', () => {
    const input = 'babad';
    const output = ['bab', 'aba'];
    const result = longestPalindrome(input);
    expect(output).toContain(result); // Check if the result is one of the expected outputs
    expect(result.length).toBeGreaterThanOrEqual(3); // Ensure the result is at least 3 characters long
    expect(result).toEqual(expect.stringMatching(/^[a-z]+$/)); // Ensure the result is a valid string of lowercase letters
  });

  test('Example 2', () => {
    const input = 'cbbd';
    const output = ['bb'];
    const result = longestPalindrome(input);
    expect(output).toContain(result);
    expect(result.length).toBeGreaterThanOrEqual(2);
    expect(result).toEqual(expect.stringMatching(/^[a-z]+$/));
  });
});
