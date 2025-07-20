import { makeConnected } from './makeConnected';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: n = 4, connections = [[0,1],[0,2],[1,2]]
// Output: 1
// Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.

// Example 2:

// Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
// Output: 2
// Explanation: There are 5 cables and 6 computers, so we need to remove 2 cables from the network.

// Example 3:

// Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
// Output: -1
// Explanation: There are not enough cables.

describe('Make Connected', () => {
  test('Example 1', () => {
    const n: number = 4;
    const connections: number[][] = [
      [0, 1],
      [0, 2],
      [1, 2],
    ];
    expect(makeConnected(n, connections)).toBe(1);
  });

  test('Example 2', () => {
    const n: number = 6;
    const connections: number[][] = [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
      [1, 3],
    ];
    expect(makeConnected(n, connections)).toBe(2);
  });

  test('Example 3', () => {
    const n: number = 6;
    const connections: number[][] = [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
    ];
    expect(makeConnected(n, connections)).toBe(-1);
  });
});
