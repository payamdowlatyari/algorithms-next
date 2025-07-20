import { shortestBridge } from './shortestBridge';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: grid = [[0,1],[1,0]]
// Output: 1

// Example 2:

// Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
// Output: 2

// Example 3:

// Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Output: 1

describe('shortestBridge', () => {
  test('Example 1', () => {
    expect(
      shortestBridge([
        [0, 1],
        [1, 0],
      ]),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      shortestBridge([
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 1],
      ]),
    ).toBe(2);
  });
  test('Example 3', () => {
    expect(
      shortestBridge([
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
      ]),
    ).toBe(1);
  });
});
