import { minimumRecolors } from './minimumRecolors';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: blocks = "WBBWWBBWBW", k = 7
// Output: 3
// Explanation:
// One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
// so that blocks = "BBBBBBBWBW".
// It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
// Therefore, we return 3.
// Example 2:

// Input: blocks = "WBWBBBW", k = 2
// Output: 0
// Explanation:
// No changes need to be made, since 2 consecutive black blocks already exist.
// Therefore, we return 0.

describe('Describe Cases', () => {
  test('Test 1', () => {
    const blocks = 'WBBWWBBWBW';
    const k = 7;
    const sum = minimumRecolors(blocks, k);
    expect(sum).toEqual(3);
  });
  test('Test 2', () => {
    const blocks = 'WBWBBBW';
    const k = 2;
    const sum = minimumRecolors(blocks, k);
    expect(sum).toEqual(0);
  });
});
