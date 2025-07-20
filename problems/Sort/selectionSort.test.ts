import { expect, test, describe } from '@jest/globals';
import { selectionSort } from './selectionSort';

describe('Selection Sort Algorithm', () => {
  test('Example 1', () => {
    const input = [3, 1, 2, 6, 4, 5];
    const output = [1, 2, 3, 4, 5, 6];
    expect(selectionSort(input)).toEqual(output);
  });

  test('Example 2', () => {
    const input = [5, 2, 6, 1, 3, 2];
    const output = [1, 2, 2, 3, 5, 6];
    expect(selectionSort(input)).toEqual(output);
  });
});
