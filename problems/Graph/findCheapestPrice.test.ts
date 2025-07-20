import { findCheapestPrice } from './findCheapestPrice';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Output: 700
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
// Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

// Example 2:

// Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
// Output: 200
// Explanation:
// The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.

// Example 3:

// Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
// Output: 500
// Explanation:
// The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.

// Example 4:

// Input: n = 3, flights =[[0,1,2],[1,2,1],[2,0,10]], src = 1, dst = 2, k = 1
// Output: 1
// Explanation:
// The optimal path with at most 1 stop from city 1 to 2 is marked in red and has cost 1.

describe('Describe Cases', () => {
  test('Test Case 1', () => {
    const n = 4;
    const flights = [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ];
    const src = 0;
    const dst = 3;
    const k = 1;
    const expected = 700;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toBe(expected);
  });

  test('Test Case 2', () => {
    const n = 3;
    const flights = [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ];
    const src = 0;
    const dst = 2;
    const k = 1;
    const expected = 200;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toBe(expected);
  });

  test('Test Case 3', () => {
    const n = 3;
    const flights = [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ];
    const src = 0;
    const dst = 2;
    const k = 0;
    const expected = 500;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toBe(expected);
  });

  test('Test Case 4', () => {
    const n = 3;
    const flights = [
      [0, 1, 2],
      [1, 2, 1],
      [2, 0, 10],
    ];
    const src = 1;
    const dst = 2;
    const k = 1;
    const expected = 1;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toBe(expected);
  });
});
