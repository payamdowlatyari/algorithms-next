import { combinationSum } from './combinationSum';
import { describe, it, expect } from '@jest/globals';

// Example 1: Finding combinations that sum to 7
// Input: candidates = [2, 3, 6, 7], target = 7
// Output: [[7], [2, 2, 3]]

// Example 2: No combinations found
// Input: candidates = [5, 10, 15], target = 3
// Output: []

// Example 3: Handling empty candidates array
// Input: candidates = [], target = 7
// Output: []

describe('combinationSum', () => {
  it('should find all unique combinations that sum up to the target', () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;
    const expected = [[2, 2, 3], [7]];
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expected);
  });
  it('should return an empty array when no combinations are found', () => {
    const candidates = [5, 10, 15];
    const target = 3;
    const expected: number[][] = [];
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expected);
  });

  it('should handle empty candidates array', () => {
    const candidates: number[] = [];
    const target = 7;
    const expected: number[][] = [];
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expected);
  });
});
