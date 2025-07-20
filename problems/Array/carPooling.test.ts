import { carPooling } from './carPooling';
import { describe, expect, test } from '@jest/globals';

// Example 1:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false
// Example 2:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 5
// Output: true

describe('carPooling', () => {
  test('Example 1', () => {
    const trips = [
      [2, 1, 5],
      [3, 3, 7],
    ];
    const capacity = 4;
    expect(carPooling(trips, capacity)).toBe(false);
  });

  test('Example 2', () => {
    const trips = [
      [2, 1, 5],
      [3, 3, 7],
    ];
    const capacity = 5;
    expect(carPooling(trips, capacity)).toBe(true);
  });
});
