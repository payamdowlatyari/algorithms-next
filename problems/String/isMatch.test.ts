import { isMatch } from './isMatch';
import { describe, expect, it } from '@jest/globals';

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

describe('isMatch', () => {
  it('Example 1', () => {
    expect(isMatch('aa', 'a')).toBe(false);
  });
  it('Example 2', () => {
    expect(isMatch('aa', 'a*')).toBe(true);
  });
  it('Example 3', () => {
    expect(isMatch('ab', '.*')).toBe(true);
  });
});
