// Given a string s, return the longest palindromic substring in s.

// A substring is a contiguous non-empty sequence of characters within a string.
// A string is palindromic if it reads the same forward and backward.

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * Finds the longest palindromic substring in a given string.
 * A palindrome is a string that reads the same forwards and backwards.
 * The function uses a center expansion technique to check for palindromes centered at each character and returns the longest one found.
 * This approach checks both odd-length and even-length palindromes by expanding around each character and between each pair of characters.
 *
 * @param {string} s - The input string to search for palindromic substrings.
 * @return {string} - The longest palindromic substring found in the input string.
 *
 * @example
 * longestPalindrome("babad") => "bab" or "aba"
 * longestPalindrome("cbbd") => "bb"
 * longestPalindrome("a") => "a"
 * longestPalindrome("ac") => "a" or "c"
 *
 * Time complexity: O(n^2) // where n is the length of the string, as we expand around each character.
 * Space complexity: O(1) // since we are using a constant amount of space for variables
 */
export function longestPalindrome(s: string): string {
  let start = 0;
  let end = 0;

  /**
   * Expands around a center to find the longest palindrome substring.
   * The function takes a string s and two indices, left and right, as input.
   * It checks if the characters at the left and right indices are equal,
   * and if so, expands the palindrome by moving the indices outwards.
   * The function returns the length of the longest palindrome substring centered at the given indices.
   * @param {string} s - The input string to search for palindromic substrings.
   * @param {number} left - The left index of the center to expand around.
   * @param {number} right - The right index of the center to expand around.
   * @return {number} - The length of the longest palindrome substring centered at the given indices.
   */
  const expandAroundCenter = (
    s: string,
    left: number,
    right: number,
  ): number => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1; // Length of the palindrome
  };
  if (s.length < 2) return s; // If the string is empty or has one character, return it as the longest palindrome

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
}
