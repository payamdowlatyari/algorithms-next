// 93. Restore IP Addresses

// A valid IP address consists of exactly four integers separated by single dots.
// Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses,
// but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses
// that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s.
// You may return the valid IP addresses in any order.

// Constraints:

// 1 <= s.length <= 20
// s consists of digits only.

/** * Restores all possible valid IP addresses from a given string of digits.
 * This function uses a backtracking approach to explore all combinations of inserting dots into the string,
 * while ensuring that each segment of the IP address is valid (between 0 and 255, and no leading zeros).
 *
 * @param {string} s - The input string containing only digits.
 * @return {string[]} An array of valid IP addresses that can be formed from the input string.
 *
 * @example
 * Input: s = "25525511135"
 * Output: ["255.255.11.135","255.255.111.35"]
 *
 * Time complexity: O(1) since the number of valid IP addresses is limited (at most 2^4 = 16 combinations).
 * Space complexity: O(1) for the same reason, as the number of valid IP addresses is limited.
 */
export function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];

  /**
   * Recursively generates all possible valid IP addresses by inserting dots into the input string.
   * This function uses a backtracking approach to explore all combinations of inserting dots into the string,
   * while ensuring that each segment of the IP address is valid (between 0 and 255, and no leading zeros).
   *
   * @param {number} start - The starting index of the current segment.
   * @param {string[]} path - The current path of segments that form the IP address.
   */
  function backtrack(start: number, path: string[]): void {
    if (path.length === 4) {
      if (start === s.length) {
        result.push(path.join('.'));
      }
      return;
    }

    for (let len = 1; len <= 3; len++) {
      if (start + len > s.length) {
        break;
      }

      const segment = s.substring(start, start + len);
      if (isValidSegment(segment)) {
        path.push(segment);
        backtrack(start + len, path);
        path.pop();
      }
    }
  }

  /**
   * Checks whether a given string segment is a valid IP address segment.
   * A segment is valid if it is between 0 and 255 (inclusive), and does not have leading zeros.
   * @param {string} segment - The string segment to check.
   * @return {boolean} True if the segment is valid, false otherwise.
   */
  function isValidSegment(segment: string): boolean {
    if (segment.length > 1 && segment[0] === '0') {
      return false;
    }
    const num = parseInt(segment, 10);
    return num >= 0 && num <= 255;
  }

  backtrack(0, []);
  return result;
}
