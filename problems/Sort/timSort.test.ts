import { expect, test, describe } from '@jest/globals';
import { timSort } from './timSort';

describe('timSort', () => {
  test('should return sorted array', () => {
    expect(timSort([3, 1, 2, 6, 4, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('timSort', () => {
  test('should return sorted array', () => {
    expect(timSort([5, 2, 6, 1, 3, 2])).toEqual([1, 2, 2, 3, 5, 6]);
  });
});
