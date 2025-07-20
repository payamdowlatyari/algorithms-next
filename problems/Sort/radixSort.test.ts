import { expect, test, describe } from '@jest/globals';
import { radixSort } from './radixSort';

describe('Radix Sort Algorithm', () => {
  test('Example 1', () => {
    const input = [170, 45, 75, 90, 802, 24, 2, 66];
    const output = [2, 24, 45, 66, 75, 90, 170, 802];
    expect(radixSort(input)).toEqual(output);
  });
});

describe('Radix Sort Algorithm', () => {
  test('Example 2', () => {
    const input = [170, 45, 75, 90, 802, 24, 2, 66];
    const output = [2, 24, 45, 66, 75, 90, 170, 802];
    expect(radixSort(input)).toEqual(output);
  });
});
